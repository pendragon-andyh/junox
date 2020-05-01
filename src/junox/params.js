import { fastTrig } from './utils'

export function paramToPWM(value) {
  return 0.5 + value * 0.45
}

const sliderToAttackDenominator = Math.exp(10 * 0.5) - 1
export function sliderToAttack(val) {
  return 0.001 + ((Math.exp(val * 5) - 1) / sliderToAttackDenominator) * 3.25
}

const sliderToDecayDenominator = Math.exp(10 * 0.4) - 1
export function sliderToDecay(val, maxValue = 17.46) {
  const slider = val * 10
  return (
    0.002 +
    ((Math.exp(slider * 0.4) - 1) / sliderToDecayDenominator) *
      slider *
      0.1 *
      maxValue
  )
}

export function sliderToSustain(val) {
  const x = 1 // how far we are in the decay phase?
  return val + (1 - val) * Math.exp(-3.5 * x) - Math.exp(-3.5)
}

export function sliderToRelease(val) {
  const slider = val * 10
  return (
    0.002 +
    ((Math.exp(slider * 0.4) - 1) / (Math.exp(10 * 0.4) - 1)) *
      slider *
      0.1 *
      17.46
  )
}

// 0 => 0.3Hz, 0.5 => 3.5Hz, 1 => 21Hz
export function sliderToLFOFreq(val) {
  return (
    0.25 *
    1.2 *
    Math.pow(1.53, val * 10) *
    (1 + fastTrig.sin(Math.PI * val) * 0.39)
  )
}

export function sliderToLFODelay(val) {
  return sliderToDecay(val, 2.786)
}

export function delayToLFOAttackRate(delay) {
  // this fudge isn't precise, but good enough
  return 0.0608 * delay * delay + 0.18407482 * delay + 0.0166
}

export function sliderToHPF(val) {
  // Juno 60 does not implement the bass boost
  // but it sounds good/realistic so we should keep it
  const hpfMap = {
    0: 0,
    1: 250,
    2: 520,
    3: 1220,
  }
  return hpfMap[Math.floor(val * 3)]
}

export function sliderToFilterFreqNorm(val, sampleRate) {
  const freq = 60.0 * Math.pow(2, val)
  const nyquist = sampleRate / 2
  if (freq > nyquist) {
    return 1
  }
  return freq / sampleRate
}

export function sliderToResonance(val) {
  return val + 0.01
}
