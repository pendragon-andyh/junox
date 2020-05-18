// Loosely based on Pirkle's HPF for KG25
import { TWOPI } from './utils'

export default class HPF {
  constructor({ cutoff, sampleRate }) {
    this.alpha = 1.0
    this.z1 = 0.0
    this.beta = 1.0
    this.T = 1.0 / sampleRate
    this.twoT = 2.0 / this.T
    this.setCutoff(cutoff)
  }

  setCutoff(cutoff) {
    const wd = TWOPI * cutoff
    const wa = this.twoT * Math.tan((wd * this.T) / 2.0)
    const g = (wa * this.T) / 2.0
    this.alpha = g / (1.0 + g)
  }

  reset() {
    this.z1 = 0.0
  }

  render(xn) {
    // calculate v(n)
    const vn = (xn - this.z1) * this.alpha
    // form LP output
    const lpf = vn + this.z1
    // update memory
    this.z1 = vn + lpf
    // do the HPF
    return xn - lpf
  }
}
