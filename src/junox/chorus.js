import { LFO } from './lfo'
import { RingBuffer } from './ringBuffer'
import { SmoothMoves } from './smoothMoves'

/**
 * Emulation of a Roland Juno 60 chorus effect.
 */
export class Chorus {
  /**
   * Output from left-side of chorus.
   */
  leftOutput = 0.0

  /**
   * Output from right-side of chorus.
   */
  rightOutput = 0.0

  /**
   * The average number of samples between the writeIndex and the read-index.
   * Must be smaller than `maxBufferSize`.
   */
  _averageDelaySamples = 0.0

  /**
   * @constructor
   * @param {number} sampleRate
   */
  constructor(sampleRate) {
    this.sampleRate = sampleRate
    this.ringBuffer = new RingBuffer(Math.trunc(sampleRate * 0.006))
    this.lfo = new LFO(sampleRate)
    this._averageDelaySamples = sampleRate * 0.0035

    // The maximum number of samples that the delay will be modulated by.
    // Must be smaller than `_averageDelaySamples` and `(maxBufferSize - _averageDelaySamples)`.
    this.maxDelayOffset = new SmoothMoves(0.0, sampleRate)

    // Proportion of wet (delayed signal) to dry (original signal). Normally between 0.0 and 0.5.
    this.wet = new SmoothMoves(0.0, sampleRate)
  }

  /**
   * Calculate the `leftOutput` and `rightOutput` signal values for the specified `input`.
   * @param {number} input
   */
  render(input) {
    const wet = this.wet.getNextValue()

    if (wet <= 0) {
      this.leftOutput = input
      this.rightOutput = input
    } else {
      const lfoValue = this.lfo.render()
      const maxDelayOffset = this.maxDelayOffset.getNextValue()
      const currentOffsetSamples = lfoValue * maxDelayOffset
      const leftDelaySamples = this._averageDelaySamples + currentOffsetSamples
      const rightDelaySamples =
        maxDelayOffset <= 0 ? leftDelaySamples : this._averageDelaySamples - currentOffsetSamples

      const leftDelayedValue = this.ringBuffer.readSample(leftDelaySamples)
      const rightDelayedValue = this.ringBuffer.readSample(rightDelaySamples)

      const dryOutput = input * (1.0 - wet)
      this.leftOutput = dryOutput + leftDelayedValue * wet
      this.rightOutput = dryOutput + rightDelayedValue * wet
    }

    this.ringBuffer.writeSample(input)
  }

  /**
   * Reset the delay-line's contents (only used when the instrument is silent).
   */
  reset() {
    this.ringBuffer.reset()
  }

  /**
   * Update the chorus effect to the specified mode.
   * @param {number} chorusMode - New chorus-mode setting.
   */
  update(chorusMode) {
    switch (chorusMode) {
      case 1: // Mode I.
        this.lfo.setRate(0.513)
        this.wet.linearRampToValueAtTime(0.5, 0.002)
        this.maxDelayOffset.linearRampToValueAtTime(0.00185 * this.sampleRate, 0.002)
        break
      case 2: // Mode II.
        this.lfo.setRate(0.863)
        this.wet.linearRampToValueAtTime(0.5, 0.002)
        this.maxDelayOffset.linearRampToValueAtTime(0.00185 * this.sampleRate, 0.002)
        break
      case 3: // Mode I+II.
        this.lfo.setRate(9.75)
        this.wet.linearRampToValueAtTime(0.5, 0.002)
        this.maxDelayOffset.linearRampToValueAtTime(-0.0002 * this.sampleRate, 0.002)
        break
      default:
        // Off
        this.lfo.setRate(0.513)
        this.wet.linearRampToValueAtTime(0.0, 0.002)
        this.maxDelayOffset.linearRampToValueAtTime(0.00185 * this.sampleRate, 0.002)
        break
    }
  }
}
