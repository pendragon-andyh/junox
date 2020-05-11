import DCO from './dco'
import { Juno60Envelope } from './juno60Envelope'
import { noteToFrequency } from '../utils'
import { MoogLowPassFilter } from './mooglpf'
import { DiodeLadder } from './diodeladder'
import { paramToPWM } from './params'
import { VCA_ENV, VCF_DIODELADDER } from './constants'

export default class Voice {
  constructor({ patch, sampleRate }) {
    this.note = -1
    this.finished = false
    this.velocity = 0
    this.patch = patch
    this.sampleRate = sampleRate

    this.dco = new DCO({
      frequency: 0,
      sampleRate,
      saw: patch.dco.saw,
      pulse: patch.dco.pulse,
      sub: patch.dco.sub,
      subAmount: patch.dco.subAmount,
      range: patch.dco.range,
      noise: patch.dco.noise,
      pwm: paramToPWM(patch.dco.pwm),
    })

    this.modEnv = new Juno60Envelope(sampleRate)
    this.ampEnv = new Juno60Envelope(sampleRate)

    this.moogVCF = new MoogLowPassFilter(sampleRate)
    this.diodeLadderVCF = new DiodeLadder(sampleRate)

    this.updatePatch(patch)
  }

  render(lfo, positiveLFO) {
    const modEnvOut = this.modEnv.render()
    const ampEnvOut = this.ampEnv.render()

    const dcoOut = this.dco.render(
      lfo * this.patch.dco.lfo,
      paramToPWM(positiveLFO * this.patch.dco.pwm)
    )

    let vcfCutoffValue = this.patch.vcf.frequency * 1.1 * 10

    const vcfDirection = this.patch.vcf.modPositive ? 1 : -1
    vcfCutoffValue += modEnvOut * this.patch.vcf.envMod * 14 * vcfDirection

    vcfCutoffValue += lfo * this.patch.vcf.lfoMod * 3.5

    const C2NoteNumber = 36
    const keyFollowDenominator = 5 * 12
    vcfCutoffValue +=
      this.patch.vcf.keyMod *
      5 *
      ((this.note - C2NoteNumber) / keyFollowDenominator - 0.4)

    const cutoffFrequency = 60.0 * Math.pow(2, vcfCutoffValue)
    if (this.patch.vcf.type === VCF_DIODELADDER) {
      this.diodeLadderVCF.setCutoff(cutoffFrequency)
    }

    let vcfOut =
      this.patch.vcf.type === VCF_DIODELADDER
        ? this.diodeLadderVCF.render(dcoOut)
        : this.moogVCF.render(dcoOut, cutoffFrequency)
    if (isNaN(vcfOut) || Math.abs(vcfOut) >= 2.0) {
      // TODO - Remove this (only used for exposing exploding filters).
      vcfOut = 0
    }

    return this.velocity * vcfOut * ampEnvOut
  }

  noteOn(note, velocity) {
    if (note !== this.note) {
      this.note = note
      this.dco.frequency = this.patch.dco.range * noteToFrequency(note)
      this.modEnv.reset()
      this.ampEnv.reset()
    }
    this.velocity = velocity
    this.modEnv.noteOn()
    this.ampEnv.noteOn()
  }

  noteOff() {
    this.modEnv.noteOff()
    this.ampEnv.noteOff()
  }

  isFinished() {
    return this.ampEnv.isFinished()
  }

  updatePatch(patch) {
    this.patch = patch

    this.dco.saw = patch.dco.saw
    this.dco.pulse = patch.dco.pulse
    this.dco.sub = patch.dco.sub
    this.dco.noise = patch.dco.noise
    this.dco.pwm = paramToPWM(patch.dco.pwm)

    this.modEnv.setValuesFromSliders(
      patch.env.attack,
      patch.env.decay,
      patch.env.sustain,
      patch.env.release
    )
    if (this.patch.vcaType === VCA_ENV) {
      this.ampEnv.setValuesFromSliders(
        patch.env.attack,
        patch.env.decay,
        patch.env.sustain,
        patch.env.release
      )
    } else {
      this.ampEnv.setValuesFromSliders(0.1, 0, 1, 0.1)
    }

    const sliderResonance = patch.vcf.resonance
    this.moogVCF.resonance = sliderResonance * 3.99
    this.diodeLadderVCF.setResonance(sliderResonance)
  }
}
