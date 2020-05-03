import LFO from './lfo'
import { RingBuffer } from './ringBuffer'

export default class Chorus {
  /**
   * Proportion of wet (delayed signal) to dry (original signal). Normally between 0.0 and 0.5.
   */
  wet = 0.0

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
  averageDelaySamples = 0.0

  /**
   * The maximum number of samples that the delay will be modulated by.
   * Must be smaller than `averageDelaySamples` and `(maxBufferSize - averageDelaySamples)`.
   */
  maxDelayOffset = 0.0

  /**
   * @constructor
   * @param {number} sampleRate
   * @param {number} maxDelaySeconds
   * @param {number} avgDelaySeconds
   */
  constructor(sampleRate, maxDelaySeconds, avgDelaySeconds) {
    this.ringBuffer = new RingBuffer(Math.trunc(sampleRate * maxDelaySeconds))
    this.lfo = new LFO({ frequency: 0, sampleRate })
    this.averageDelaySamples = sampleRate * avgDelaySeconds
    this.maxDelayOffset = this.averageDelaySamples * 0.5
  }

  /**
   * Calculate the `leftOutput` and `rightOutput` signal values for the specified `input`.
   * @param {number} input
   */
  render(input) {
    const wet = this.wet
    if (wet <= 0) {
      this.leftOutput = input
      this.rightOutput = input
    } else {
      const lfoValue = this.lfo.render()
      const currentOffsetSamples = lfoValue * this.maxDelayOffset
      const leftDelaySamples = this.averageDelaySamples + currentOffsetSamples
      const rightDelaySamples =
        this.maxDelayOffset <= 0
          ? leftDelaySamples
          : this.averageDelaySamples - currentOffsetSamples

      const leftDelayedValue = this.ringBuffer.readSample(leftDelaySamples)
      const rightDelayedValue = this.ringBuffer.readSample(rightDelaySamples)

      const dryOutput = input * (1.0 - this.wet)
      this.leftOutput = dryOutput + leftDelayedValue * this.wet
      this.rightOutput = dryOutput + rightDelayedValue * this.wet
    }

    this.ringBuffer.writeSample(input)
  }
}
