// One Pole Filter based on Will Pirkle's C++ Code
export class OnePoleFilter {
  constructor(piOverSampleRate) {
    this.piOverSampleRate = piOverSampleRate
    this.beta = 0.0
    this.z1 = 0.0
    this.gamma = 1.0
    this.delta = 0.0
    this.epsilon = 0.0
    this.a0 = 1.0
    this.feedback = 0.0
  }

  setFeedback(feedback) {
    this.feedback = feedback
  }

  feedbackOutput() {
    return this.beta * (this.z1 + this.feedback * this.delta)
  }

  setCutoff(cutoff) {
    const g = Math.tan(cutoff * this.piOverSampleRate)
    this.alpha = g / (1.0 + g)
  }

  render(input) {
    const xIn =
      input * this.gamma + this.feedback + this.epsilon * this.feedbackOutput()
    const vn = (this.a0 * xIn - this.z1) * this.alpha
    const out = vn + this.z1
    this.z1 = vn + out
    return out
  }
}
