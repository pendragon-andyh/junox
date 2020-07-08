export class Noise {
  constructor(sampleRate, fc = 5000) {
    // Coefficients for 6db low pass output filter.
    this._b1 = -Math.exp((-2.0 * fc * Math.PI) / sampleRate)
    this._a0 = 1.0 + this._b1
    this._z1 = 0.0
  }

  render() {
    // White noise.
    const xin = Math.random() * 2.0 - 1.0

    // Apply low pass filter to convert to pink noise.
    const xout = xin * this._a0 - this._z1
    this._z1 = this._b1 * xout
    return xout
  }
}
