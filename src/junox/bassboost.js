export default class BassBoost {
  constructor({ frequency }) {
    this.frequency = frequency
    this.cap = 0.0
    this.feedback = 0.8
    this.filterGain = 1.0 / (this.frequency + 1.0)
  }

  reset() {
    this.cap = 0.0
  }

  render(input, gain) {
    this.cap = (input + this.cap * this.frequency) * this.filterGain
    return (input + this.cap * this.feedback) * gain
  }
}
