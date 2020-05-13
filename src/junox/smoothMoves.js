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
    const fc = 5

    this.b1 = -Math.exp((-2.0 * fc * Math.PI) / sampleRate)
    this.a0 = 1.0 + this.b1

    this.targetValue = value
    this.isStarted = false
    this.z1 = 0.0

    this.reset()
  }

  /**
   * Change the current value to a new value using a linear transition over a period of time.
   * @param {number} value - New parameter value.
   * @param {number} duration - Duration (in seconds) of the transition from the old value to the new one.
   */
  linearRampToValueAtTime(value, duration) {
    this.targetValue = value

    if (!this.isStarted || duration <= 0) {
      this.reset()
      return
    }
  }

  /**
   * Reset immediately to the target value.
   * This should only be used if the instrument is currently silent.
   */
  reset() {
    this.z1 = this.targetValue - this.targetValue * this.a0
    this.isStarted = false
  }

  /**
   * Get the next value of parameter.
   * @returns {number}
   */
  getNextValue() {
    this.isStarted = true
    const xout = this.targetValue * this.a0 - this.z1
    this.z1 = this.b1 * xout
    return xout
  }
}
