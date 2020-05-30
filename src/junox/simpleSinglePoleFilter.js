/**
 * Optimised implementation of single-pole low pass filter (with high-pass option).
 * The maximum this can attenuate is +-6db.
 */
export class SimpleSinglePoleFilter {
  /**
   * @constructor
   * @param {number} sampleRate - Sample rate (Hz)
   * @param {*} fc - Cutoff frequency (Hz)
   */
  constructor(sampleRate, fc = 5.0) {
    this._piOverSampleRate = Math.PI / sampleRate
    this.setCutoff(fc)
  }

  _a0 = 1.0
  _b1 = 0.0
  _z1 = 0.0

  /**
   * Flush storage and clear feedback.
   */
  reset() {
    this._z1 = 0.0
  }

  /**
   * Process a single sample through the low-pass filter (using transposed direct form II technique).
   * @param {number} xin - Input value.
   * @returns {number} - Output value.
   */
  renderLP(xin) {
    const xout = xin * this._a0 + this._z1
    this._z1 = -this._b1 * xout
    return xout
  }

  /**
   * Process using high-pass filter (inverse of low-pass).
   * @param {number} xin - Input value.
   * @returns {number} - Output value.
   */
  renderHP(xin) {
    return xin - this.renderLP(xin)
  }

  /**
   * Set cutoff frequency for for simple low pass filter.
   * @param {number} fc - Cutoff frequency (Hz)
   */
  setCutoff(fc) {
    this._b1 = -Math.exp(-2.0 * fc * this._piOverSampleRate)
    this._a0 = 1.0 + this._b1
  }
}
