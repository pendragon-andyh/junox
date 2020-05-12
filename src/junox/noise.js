// Pseudo Random Number (PN Sequence) Oscillator
// Exhibits a spectrum that is between white noise (totally random) and pink noise (roll off at -3db/octave).
// Based on code from section 5.17 of Pirkle's Synth book.
// Modified to use 16bit UINT.
export class Noise {
  constructor() {
    this._b15 = 32768
    this._oneOverB15 = 1.0 / this._b15
    this._currentBits = 129 | ~~(Math.random() * this._b15)
  }

  render() {
    // Extract some of the bits and xor them together.
    const b0 = this._currentBits & 1
    const b2 = (this._currentBits & 4) > 0 ? 1 : 0
    const b3 = (this._currentBits & 8) > 0 ? 1 : 0
    const b10 = (this._currentBits & 1024) > 0 ? 1 : 0

    // Shift 1 bit right.
    this._currentBits >>= 1

    // Add (or not) bit 15.
    const xorBits = b0 ^ b2 ^ b3 ^ b10
    if (xorBits === 1) {
      this._currentBits |= this._b15
    }

    // Convert uint into -1 to +1 range.
    return this._currentBits * this._oneOverB15 - 1.0
  }
}