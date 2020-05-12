// Diode Ladder Filter based on Will Pirkle's C++ Code
import { OnePoleFilter } from './onepolefilter'
import { fastTanh } from './utils'

export class DiodeLadder {
  constructor(sampleRate) {
    this.maxCutoff = sampleRate * 0.49
    this.piOverSampleRate = Math.PI / sampleRate
    this.K = 0.0
    this.gamma = 0.0
    this.SG1 = 0.0
    this.SG2 = 0.0
    this.SG3 = 0.0

    this.lpf1 = new OnePoleFilter(sampleRate)
    this.lpf2 = new OnePoleFilter(sampleRate)
    this.lpf3 = new OnePoleFilter(sampleRate)
    this.lpf4 = new OnePoleFilter(sampleRate)

    this.lpf1.a0 = 1.0
    this.lpf2.a0 = 0.5
    this.lpf3.a0 = 0.5
    this.lpf4.a0 = 0.5

    // last LPF has no feedback path
    this.lpf4.gamma = 1.0
    this.lpf4.delta = 0.0
    this.lpf4.epsilon = 0.0

    this.setResonance(500.0)
  }

  setCutoff(cutoff) {
    if (cutoff > this.maxCutoff) {
      cutoff = this.maxCutoff
    }

    const g = Math.tan(cutoff * this.piOverSampleRate)
    const onePlusG = 1.0 + g
    const halfG = 0.5 * g
    const oneOverOnePlusG = 1.0 / onePlusG

    // Big G's
    const G4 = halfG * oneOverOnePlusG
    const G3 = halfG / (onePlusG - halfG * G4)
    const G2 = halfG / (onePlusG - halfG * G3)
    const G1 = g / (onePlusG - g * G2)

    // our big G value GAMMA
    this.SG3 = G4
    this.SG2 = G4 * G3
    this.SG1 = this.SG2 * G2
    this.gamma = this.SG1 * G1

    // set alphas
    const alphaG = g * oneOverOnePlusG
    this.lpf1.alpha = alphaG
    this.lpf2.alpha = alphaG
    this.lpf3.alpha = alphaG
    this.lpf4.alpha = alphaG

    // set betas
    this.lpf1.beta = 1.0 / (onePlusG - g * G2)
    this.lpf2.beta = 1.0 / (onePlusG - halfG * G3)
    this.lpf3.beta = 1.0 / (onePlusG - halfG * G4)
    this.lpf4.beta = oneOverOnePlusG

    // set gammas
    this.lpf1.gamma = 1.0 + G1 * G2
    this.lpf2.gamma = 1.0 + G2 * G3
    this.lpf3.gamma = 1.0 + G3 * G4

    // set deltas
    this.lpf1.delta = g
    this.lpf2.delta = halfG
    this.lpf3.delta = halfG

    // set epsilons
    this.lpf1.epsilon = G2
    this.lpf2.epsilon = G3
    this.lpf3.epsilon = G4
  }

  // decode the resonance value - resonance is [0..1]
  setResonance(resonance) {
    this.K = resonance * 17.0
  }

  reset() {
    this.lpf1.reset()
    this.lpf2.reset()
    this.lpf3.reset()
    this.lpf4.reset()
  }

  render(xn) {
    this.lpf3.setFeedback(this.lpf4.feedbackOutput())
    this.lpf2.setFeedback(this.lpf3.feedbackOutput())
    this.lpf1.setFeedback(this.lpf2.feedbackOutput())

    // --- form input
    const sigma =
      this.SG1 * this.lpf1.feedbackOutput() +
      this.SG2 * this.lpf2.feedbackOutput() +
      this.SG3 * this.lpf3.feedbackOutput() +
      this.lpf4.feedbackOutput()

    // --- form input
    let U = (xn - this.K * sigma) / (1.0 + this.K * this.gamma)

    // ---NLP
    U = fastTanh(U)

    // --- cascade of four filters
    return this.lpf4.render(
      this.lpf3.render(this.lpf2.render(this.lpf1.render(U)))
    )
  }
}
