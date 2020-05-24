/**
 * Biquad filter.  Based on original code by Nigel Redmon:
 * * https://www.earlevel.com/main/2011/01/02/biquad-formulas/
 * * https://www.earlevel.com/main/2012/11/26/biquad-c-source-code/
 * With an interactive demo at https://www.earlevel.com/main/2013/10/13/biquad-calculator-v2/
 * Note: Biquad filter is NOT designed for heavy modulation.
 */
export class BiquadFilter {
  constructor(sampleRate) {
    this._oneOversampleRate = 1.0 / sampleRate
    this._piOverSampleRate = Math.PI * this.oneOverSampleRate
  }

  _a0 = 1.0
  _a1 = 0.0
  _a2 = 0.0
  _b1 = 0.0
  _b2 = 0.0
  _z1 = 0.0
  _z2 = 0.0

  /**
   * Flush storage and clear feedback.
   */
  reset() {
    this._z1 = 0.0
    this._z2 = 0.0
  }

  /**
   * Process a single sample through the filter (using transposed direct form II technique).
   * @param {number} xin - Input value.
   * @returns {number} - Output value.
   */
  process(xin) {
    const xout = xin * this._a0 + this._z1
    this._z1 = xin * this._a1 + this._z2 - this._b1 * xout
    this._z2 = xin * this._a2 - this._b2 * xout
    return xout
  }

  /**
   * Set the coefficients for the filter.
   * Allows you to plug-in other filter implementations.
   * @param {number} a0
   * @param {number} a1
   * @param {number} a2
   * @param {number} b1
   * @param {number} b2
   */
  setCoefficients(a0, a1, a2, b1, b2) {
    this._a0 = a0
    this._a1 = a1
    this._a2 = a2
    this._b1 = b1
    this._b2 = b2
  }

  /**
   * Low pass filter - 12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} q - Q factor (0.7071 = Butterworth)
   */
  setCoefficientsForLowPass(fc, q = 0.7071) {
    const oneOverQ = 1.0 / q
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const norm = 1.0 / (1.0 + k * oneOverQ + kSquared)
    this._a0 = kSquared * norm
    this._a1 = 2.0 * this._a0
    this._a2 = this._a0
    this._b1 = 2.0 * (kSquared - 1.0) * norm
    this._b2 = (1.0 - k * oneOverQ + kSquared) * norm
  }

  /**
   * High pass filter - 12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} q - Q factor (0.7071 = Butterworth)
   */
  setCoefficientsForHighPass(fc, q = 0.7071) {
    const oneOverQ = 1.0 / q
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const norm = 1.0 / (1.0 + k * oneOverQ + kSquared)
    this._a0 = norm
    this._a1 = -2.0 * this._a0
    this._a2 = this._a0
    this._b1 = 2.0 * (kSquared - 1.0) * norm
    this._b2 = (1.0 - k * oneOverQ + kSquared) * norm
  }

  /**
   * Band pass filter - 12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} q - Q factor (0.7071 = Butterworth)
   */
  setCoefficientsForBandPass(fc, q = 0.7071) {
    const oneOverQ = 1.0 / q
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const norm = 1.0 / (1.0 + k * oneOverQ + kSquared)
    this._a0 = k * oneOverQ * norm
    this._a1 = 0.0
    this._a2 = -this._a0
    this._b1 = 2.0 * (kSquared - 1.0) * norm
    this._b2 = (1.0 - k * oneOverQ + kSquared) * norm
  }

  /**
   * Notch filter - 12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} q - Q factor (0.7071 = Butterworth)
   */
  setCoefficientsForNotch(fc, q = 0.7071) {
    const oneOverQ = 1.0 / q
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const norm = 1.0 / (1.0 + k * oneOverQ + kSquared)
    this._a0 = (1.0 + kSquared) * norm
    this._a1 = 2.0 * (kSquared - 1.0) * norm
    this._a2 = this._a0
    this._b1 = this._a1
    this._b2 = (1.0 - k * oneOverQ + kSquared) * norm
  }

  /**
   * Peak filter - 12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} q - Q factor
   * @param {number} - peakGain (dB)
   */
  setCoefficientsForPeak(fc, q = 0.7071, peakGain = 6.0) {
    const oneOverQ = 1.0 / q
    const v = Math.pow(10.0, Math.abs(peakGain) / 20.0)
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    if (peakGain >= 0.0) {
      const norm = 1.0 / (1.0 + oneOverQ * k + kSquared)
      this._a0 = (1.0 + v * oneOverQ * k + kSquared) * norm
      this._a1 = 2.0 * (kSquared - 1.0) * norm
      this._a2 = (1.0 - v * oneOverQ * k + kSquared) * norm
      this._b1 = this._a1
      this._b2 = (1.0 - oneOverQ * k + kSquared) * norm
    } else {
      const norm = 1.0 / (1.0 + v * oneOverQ * k + kSquared)
      this._a0 = (1.0 + oneOverQ * k + kSquared) * norm
      this._a1 = 2.0 * (kSquared - 1.0) * norm
      this._a2 = (1.0 - oneOverQ * k + kSquared) * norm
      this._b1 = this._a1
      this._b2 = (1.0 - v * oneOverQ * k + kSquared) * norm
    }
  }

  /**
   * Low shelf filter - up to +/-12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} - peakGain (dB)
   */
  setCoefficientsForLowShelf(fc, peakGain = 6.0) {
    const v = Math.pow(10.0, Math.abs(peakGain) / 20.0)
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const kTimesRoot2 = Math.SQRT2 * k
    const kTimesRoot2V = Math.sqrt(2.0 * v) * k
    if (peakGain >= 0.0) {
      const norm = 1.0 / (1.0 + kTimesRoot2 + kSquared)
      this._a0 = (1.0 + kTimesRoot2V + v * kSquared) * norm
      this._a1 = 2.0 * (v * kSquared - 1.0) * norm
      this._a2 = (1.0 - kTimesRoot2V + v * kSquared) * norm
      this._b1 = 2.0 * (kSquared - 1.0) * norm
      this._b2 = (1.0 - kTimesRoot2 + kSquared) * norm
    } else {
      const norm = 1.0 / (1.0 + kTimesRoot2V + v * kSquared)
      this._a0 = (1.0 + kTimesRoot2 + kSquared) * norm
      this._a1 = 2.0 * (kSquared - 1.0) * norm
      this._a2 = (1.0 - kTimesRoot2 + kSquared) * norm
      this._b1 = 2.0 * (v * kSquared - 1.0) * norm
      this._b2 = (1.0 - kTimesRoot2V + v * kSquared) * norm
    }
  }

  /**
   * High shelf filter - up to +/-12db.
   * @param {number} fc - Cutoff frequency (Hz)
   * @param {number} - peakGain (dB)
   */
  setCoefficientsForHighShelf(fc, peakGain = 6.0) {
    const v = Math.pow(10.0, Math.abs(peakGain) / 20.0)
    const k = Math.tan(fc * this._piOverSampleRate)
    const kSquared = k * k
    const kTimesRoot2 = Math.SQRT2 * k
    const kTimesRoot2V = Math.sqrt(2.0 * v) * k
    if (peakGain >= 0.0) {
      const norm = 1.0 / (1.0 + kTimesRoot2 + kSquared)
      this._a0 = (v + kTimesRoot2V + kSquared) * norm
      this._a1 = 2.0 * (kSquared - v) * norm
      this._a2 = (v - kTimesRoot2V + kSquared) * norm
      this._b1 = 2.0 * (kSquared - 1.0) * norm
      this._b2 = (1.0 - kTimesRoot2 + kSquared) * norm
    } else {
      const norm = 1.0 / (v + kTimesRoot2V + kSquared)
      this._a0 = (1.0 + kTimesRoot2 + kSquared) * norm
      this._a1 = 2.0 * (kSquared - 1.0) * norm
      this._a2 = (1.0 - kTimesRoot2 + kSquared) * norm
      this._b1 = 2.0 * (kSquared - v) * norm
      this._b2 = (v - kTimesRoot2V + kSquared) * norm
    }
  }
}
