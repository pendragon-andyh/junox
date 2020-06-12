import { RingBuffer } from './ringBuffer.js'
import { SimpleSinglePoleFilter } from './simpleSinglePoleFilter.js'

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
   * @constructor
   * @param {number} sampleRate
   */
  constructor(sampleRate) {
    this._sampleRate = sampleRate
    this._isUsed = false
    this._nextChorusMode = 0

    this._ringBuffer = new RingBuffer(Math.trunc(sampleRate * 0.006))
    this._preFilter = new SimpleSinglePoleFilter(sampleRate, 7237)
    this._postLeftFilter = new SimpleSinglePoleFilter(sampleRate, 10644)
    this._postRightFilter = new SimpleSinglePoleFilter(sampleRate, 10644)

    // Current state of the wet/dry mix.
    this._dryCurrent = 1.0
    this._dryChange = 0.0
    this._dryTarget = 1.0

    // Current state of the triangle-wave LFO that controls the delay-offset.
    this._lfoValue = 0.0
    this._lfoIncrement = 0.01

    // Current settings of the left/right delay.
    this._maxLeftOffset = 0.0
    this._averageLeftSamples = 0.0
    this._maxRightOffset = 0.0
    this._averageRightSamples = 0.0
  }

  /**
   * Calculate the `leftOutput` and `rightOutput` signal values for the specified `input`.
   * @param {number} input
   */
  render(input) {
    this._isUsed = true
    let dry = this._dryCurrent

    // Handle transitions to the wet/dry ratio.
    if (this._dryChange !== 0.0) {
      dry += this._dryChange
      if (dry > 1.0) {
        // We have completed the transition to fully-dry.
        dry = 1.0
        this._dryChange = 0
        this.update(this._nextChorusMode)
      } else if (dry < this._dryTarget && this._dryChange < 0.0) {
        dry = this._dryTarget
        this._dryChange = 0
      }
      this._dryCurrent = dry
    }

    // If wet/dry ratio is fully-dry then we are in Mode 0. Just return the input value.
    if (dry === 1.0) {
      this.leftOutput = input
      this.rightOutput = input
      return
    }

    // Calculate the change to the LFO.
    let lfoValue = this._lfoValue + this._lfoIncrement
    if (lfoValue > 1.0) {
      lfoValue = 2.0 - lfoValue
      this._lfoIncrement = -this._lfoIncrement
    } else if (lfoValue < -1.0) {
      lfoValue = -2.0 - lfoValue
      this._lfoIncrement = -this._lfoIncrement
    }
    this._lfoValue = lfoValue

    // Calculate the left/right output values (delayed-signal=>LPF + dry-signal).
    const dryOutput = input * dry
    const wetFactor = 1.0 - dry

    const leftDelaySamples = this._averageLeftSamples + lfoValue * this._maxLeftOffset
    const leftDelayedValue = this._ringBuffer.readSample(leftDelaySamples)
    this.leftOutput = dryOutput + this._postLeftFilter.renderLP(leftDelayedValue * wetFactor)

    const rightDelaySamples = this._averageRightSamples + lfoValue * this._maxRightOffset
    const rightDelayedValue = this._ringBuffer.readSample(rightDelaySamples)
    this.rightOutput = dryOutput + this._postRightFilter.renderLP(rightDelayedValue * wetFactor)

    // Add the latest input to the ring-buffer (pre-filter and pre-saturate).
    this._ringBuffer.writeSample(this._preFilter.renderLP(this._applySaturation(input)))
  }

  /**
   * Reset the delay-line's contents (only used when the instrument is silent).
   */
  reset() {
    this._ringBuffer.reset()
    this._preFilter.reset()
    this._postLeftFilter.reset()
    this._postRightFilter.reset()
    this._isUsed = false
  }

  /**
   * Update the chorus effect to the specified mode.
   * @param {number} chorusMode - New chorus-mode setting.
   */
  update(chorusMode) {
    if (this._dryCurrent < 1.0 && !this._isUsed) {
      // Want to avoid clicks/pops - so all mode-changes cause temporary transition to fully-dry.
      this._dryChange = 0.0005
      this._dryTarget = 1.0
      this._nextChorusMode = chorusMode
    } else {
      // Apply the desired parameter change.
      switch (chorusMode) {
        case 1: // Mode I.
          this._updateValues(0.513, 0.44, 0.00154, 0.00515, 0.00151, 0.0054, true)
          break
        case 2: // Mode II.
          this._updateValues(0.863, 0.44, 0.00154, 0.00515, 0.00151, 0.0054, true)
          break
        case 3: // Mode I+II.
          this._updateValues(9.75, 0.44, 0.00322, 0.00356, 0.00328, 0.00365, false)
          break
        default:
          // Off (dry = 100%)
          this._updateValues(0.513, 1.0, 0.00154, 0.00515, 0.00151, 0.0054, true)
          this._ringBuffer.reset()
          break
      }
    }
  }

  /**
   * @private Apply mild saturation (to mimic the NLP from the BBD).
   * @param {number} input - Input value.
   * @returns {number} - Result of the saturated input.
   */
  _applySaturation(input) {
    return input ////Math.tanh(input * 0.6) * 1.86202
  }

  /**
   * @private Apply the internal settings.
   * @param {number} freq - Frequency (Hz).
   * @param {number} dry - Ratio of dry:wet (1.0 = fully-dry).
   * @param {number} minLeftDelay - Minimum delay for the left channel (seconds).
   * @param {number} maxLeftDelay - Maximum delay for the left channel (seconds).
   * @param {number} minRightDelay - Minimum delay for the right channel (seconds).
   * @param {number} maxRightDelay - Maximum delay for the right channel (seconds).
   * @param {boolean} isStereo - True if the output image should be stereo.
   */
  _updateValues(freq, dry, minLeftDelay, maxLeftDelay, minRightDelay, maxRightDelay, isStereo) {
    // Left/right delay.
    const averageLeftDelay = (minLeftDelay + maxLeftDelay) * 0.5
    const maxLeftOffset = maxLeftDelay - averageLeftDelay
    this._averageLeftSamples = averageLeftDelay * this._sampleRate
    this._maxLeftOffset = maxLeftOffset * this._sampleRate

    const averageRightDelay = (minRightDelay + maxRightDelay) * 0.5
    const maxRightOffset = maxRightDelay - averageRightDelay
    this._averageRightSamples = averageRightDelay * this._sampleRate
    this._maxRightOffset = maxRightOffset * this._sampleRate * (isStereo ? -1 : 1)

    // Transition to desired wet/dry ration.
    this._dryTarget = dry
    if (!this._isUsed) {
      this._dryChange = dry
    }
    this._dryChange = (dry - this._dryCurrent) / 1000

    // Value-change between each "tick" of triangle-wave LFO.
    this._lfoIncrement = (Math.sign(this._lfoIncrement) * 4 * freq) / this._sampleRate
  }
}
