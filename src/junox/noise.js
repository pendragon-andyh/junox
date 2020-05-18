// Pseudo Random Number (PN Sequence) Oscillator
// Exhibits a spectrum that is between white noise (totally random) and pink noise (roll off at -3db/octave).
// Based on code from section 5.17 of Pirkle's Synth book.
// Modified to use 24bit UINT.
const b23 = 8388608
const oneOverB23 = 1.0 / b23

export class Noise {
  constructor(sampleRate, fc) {
    // Initial random state.
    this._currentBits = 129 | ~~(Math.random() * b23)

    // Coefficients for 6db low pass filter.
    this._b1 = -Math.exp((-2.0 * fc * Math.PI) / sampleRate)
    this._a0 = 1.0 + this._b1
  }

  _z1 = 0

  render() {
    // Extract some of the bits and xor them together.
    const b0 = this._currentBits & 1
    const b1 = (this._currentBits & 2) > 0 ? 1 : 0
    const b3 = (this._currentBits & 8) > 0 ? 1 : 0
    const b4 = (this._currentBits & 16) > 0 ? 1 : 0

    // Shift 1 bit right.
    this._currentBits >>= 1

    // Add (or not) bit 23.
    const xorBits = b0 ^ b1 ^ b3 ^ b4
    if (xorBits === 1) {
      this._currentBits |= b23
    }

    // Convert uint into -1 to +1 range.
    const xin = this._currentBits * oneOverB23 - 1.0

    // Apply low pass filter.
    const xout = xin * this._a0 - this._z1
    this._z1 = this._b1 * xout
    return xout
  }
}
