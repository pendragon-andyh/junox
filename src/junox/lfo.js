import { delayToLFOAttackRate } from './params'

export default class LFO {
  constructor({ frequency, delay = 0, sampleRate }) {
    // we need the phase to go x4 because of triangle
    this.anchorRate = 3.95 / sampleRate
    this.sampleRate = sampleRate
    this.direction = 1
    this.value = 0
    this.attackPhase = 0
    this.setRate(frequency)
    this.setDelay(delay)
    this.trigger()
  }

  setRate(frequency) {
    this.rateFactor = frequency * this.anchorRate
    //this.value = -this.rateFactor
  }

  setDelay(delay) {
    this.delaySamples = delay * this.sampleRate
    this.attackSamples = delayToLFOAttackRate(delay) * this.sampleRate
  }

  trigger() {
    this.direction = 1
    this.delayPhase = 0
    this.attackPhase = 0
    this.attackRateFactor = 0
    this.attackOutput = 0.01
  }

  delayEnv() {
    this.delayPhase = this.delayPhase + 1
    if (this.attackPhase > this.attackSamples) {
      return 1
    } else if (this.delayPhase > this.delaySamples) {
      this.attackPhase = this.attackPhase + 1
      this.attackRateFactor = this.attackPhase / this.attackSamples
      this.attackOutput = (1 - this.attackOutput) * this.attackRateFactor
      return Math.max(this.attackOutput * 2, 1)
    }
    return 0
  }

  render() {
    let newValue = this.value
    if (this.direction === 1) {
      newValue += this.rateFactor
      if (newValue > 1.0) {
        this.direction = -1
        newValue = 2.0 - newValue
      }
    } else {
      newValue -= this.rateFactor
      if (newValue < -1.0) {
        this.direction = 1
        newValue = -2.0 - newValue
      }
    }
    this.value = newValue
    return this.value * this.delayEnv()
  }
}
