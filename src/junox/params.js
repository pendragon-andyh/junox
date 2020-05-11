import { fastTrig } from './utils'

export function paramToPWM(value) {
  return 0.5 + value * 0.45
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
