// One Pole Filter based on Will Pirkle's C++ Code
export class OnePoleFilter {
  constructor(piOverSampleRate) {
    this.piOverSampleRate = piOverSampleRate

    this.beta = 0.0
    this.gamma = 1.0
    this.delta = 0.0
    this.epsilon = 0.0
    this.a0 = 1.0

    this._z1 = 0.0
    this._feedback = 0.0
  }

  setCutoff(cutoff) {
    const g = Math.tan(cutoff * this.piOverSampleRate)
    this.alpha = g / (1.0 + g)
  }

  setFeedback(feedback) {
    this._feedback = feedback
  }

  feedbackOutput() {
    return this.beta * (this._z1 + this._feedback * this.delta)
  }

  reset() {
    this._z1 = 0.0
    this._feedback = 0.0
  }

  render(input) {
    const xIn = input * this.gamma + this._feedback + this.epsilon * this.feedbackOutput()
    const vn = (this.a0 * xIn - this._z1) * this.alpha
    const out = vn + this._z1
    this._z1 = vn + out
    return out
  }
}
