import { fastTanh } from './utils'

/**
 * Implementation of Moog-style low pass filter (based on a paper by Stilson/Smith).
 * https://www.musicdsp.org/en/latest/Filters/26-moog-vcf-variation-2.html
 */
export class MoogLowPassFilter {
  constructor(sampleRate) {
    this.cutoffToNormalizedFactor = (1.16 * 2.0) / sampleRate

    // Resonance factor (0 = no resonance, 4 = self-oscillation).
    this.resonance = 0.0

    this._in1 = 0.0
    this._in2 = 0.0
    this._in3 = 0.0
    this._in4 = 0.0
    this._out1 = 0.0
    this._out2 = 0.0
    this._out3 = 0.0
    this._out4 = 0.0
  }

  /**
   * Render a single quantum through the filter.
   * @param {number} input - Input signal value.
   * @param {number} fc - Cutoff frequency (Hz).
   */
  render(input, fc) {
    let f = fc * this.cutoffToNormalizedFactor
    if (f > 1.16) {
      f = 1.16
    }

    const fSquare = f * f
    const fb = this.resonance * (1.0 - 0.15 * fSquare)
    const f1 = 1.0 - f

    input -= this._out4 * fb // TODO - apply fastTanH here?
    input *= 0.35013 * fSquare * fSquare

    this._out1 = input + 0.3 * this._in1 + f1 * this._out1 // Pole 1
    this._in1 = input

    this._out2 = this._out1 + 0.3 * this._in2 + f1 * this._out2 // Pole 2
    this._in2 = this._out1

    this._out3 = this._out2 + 0.3 * this._in3 + f1 * this._out3 // Pole 3
    this._in3 = this._out2

    this._out4 = this._out3 + 0.3 * this._in4 + f1 * this._out4 // Pole 4
    this._in4 = this._out3

    return this._out4
  }
}
