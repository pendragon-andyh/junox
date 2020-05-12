/**
 * If an audio signal changes instantly then you often hear a "glitch". This class allows us to
 * transition between two values smoothly.
 */
export class SmoothMoves {
  /**
   * Create a new parameter.
   * @param {number} value - Initial value of the parameter.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(value, sampleRate) {
    this._currentValue = value
    this._targetValue = value
    this._sampleRate = sampleRate
  }

  _stepSize = 0.0
  _isStarted = false

  /**
   * Change the current value instantly to a new value.
   * @param {number} value - New parameter value.
   */
  setValue(value) {
    this._targetValue = value
    this._stepSize = value - this._currentValue
  }

  /**
   * Change the current value to a new value using a linear transition over a period of time.
   * @param {number} value - New parameter value.
   * @param {number} duration - Duration (in seconds) of the transition from the old value to the new one.
   */
  linearRampToValueAtTime(value, duration) {
    this.setValue(value)

    if (this._currentValue !== value && duration && this._isStarted) {
      this._stepSize /= duration * this._sampleRate
    }
  }

  /**
   * Reset immediately to the target value.
   * This should only be used if the instrument is currently silent.
   */
  reset() {
    this._currentValue = this._targetValue
    this._stepSize = 0.0
    this._isStarted = false
  }

  /**
   * Get the next value of parameter.
   * @returns {number}
   */
  getNextValue() {
    let value = this._currentValue

    // Check if we are mid-transition.
    if (value !== this._targetValue) {
      // Increment the current value towards the target value.
      value += this._stepSize

      // Check if we have reached/overshot any transition.
      if (
        Math.sign(this._targetValue - value) *
          Math.sign(this._targetValue - this._currentValue) <=
        0
      ) {
        value = this._targetValue
      }

      this._isStarted = true
      this._currentValue = value
    }

    return value
  }
}
