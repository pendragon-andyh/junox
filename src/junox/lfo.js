/**
 * Implementation of a low frequency oscillator.
 *  * Capable of different output waveforms.
 * Note: You might want to pipe the output from a lowpass filter (see biquad).
 */
export class LFO {
  /**
   * @constructor.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(sampleRate) {
    this._oneOverSampleRate = 1.0 / sampleRate
    this._phaseIncrement = 0.0

    /** Current phase of the LFO (0.0 to 1.0) */
    this.currentPhase = 1.0

    /** Current value of the LFO. */
    this.currentValue = 0.0

    /** Has the LFO's cycled in the latest sample? This is useful when you want to automatically retrigger the envelope. */
    this.isRestarted = false

    /** Waveform ("none", "triangle", "square", "sine", "random", "noise") */
    this.waveform = 'triangle'
  }

  /**
   * Reset the LFO (only used when the instrument is silent).
   */
  reset() {
    this.currentPhase = 1.0
    this.currentValue = 0.0
  }

  /**
   * Calculate the next value of the LFO.
   */
  render() {
    // Increment the phase of the LFO.
    this.isRestarted = false
    this.currentPhase += this._phaseIncrement
    if (this.currentPhase > 1.0) {
      this.isRestarted = true
      this.currentPhase -= 1.0
    }

    // Convert the phase into the output waveform.
    let value = 0.0
    switch (this.waveform) {
      case 'none':
        value = 0.0
        break
      case 'sine':
        value = Math.sin(this.currentPhase * 2 * Math.PI)
        break
      case 'square':
        value = this.currentPhase > 0.5 ? -1.0 : 1.0
        break
      case 'random':
        value = this.isRestarted ? Math.random() * 2.0 - 1.0 : this.currentValue
        break
      case 'noise':
        value = Math.random() * 2.0 - 1.0
        break
      default:
        // Default to triangle.
        value = this.currentPhase * 4.0
        if (value > 1.0) {
          value = 2.0 - value
        }
        if (value < -1.0) {
          value = -2.0 - value
        }
        break
    }

    return (this.currentValue = value)
  }

  /**
   * Set the speed of the LFO..
   * @param {number} frequency - Frequency of the LFO (Hz).
   */
  setRate(frequency) {
    this._phaseIncrement = frequency * this._oneOverSampleRate
  }
}
