import DCO from './dco'
import ADSREnvelope from './envelope'
import { noteToFrequency } from '../utils'
import { MoogLowPassFilter } from './mooglpf'
import { DiodeLadder } from './diodeladder'
import {
  paramToPWM,
  sliderToAttack,
  sliderToSustain,
  sliderToDecay,
  sliderToRelease,
} from './params'
import { VCA_ENV, VCF_DIODELADDER } from './constants'

export default class Voice {
  constructor({ note, patch, velocity, sampleRate }) {
    this.note = note
    this.finished = false
    this.velocity = velocity
    this.patch = patch
    this.sampleRate = sampleRate

    this.dco = new DCO({
      frequency: noteToFrequency(this.note),
      sampleRate,
      saw: patch.dco.saw,
      pulse: patch.dco.pulse,
      sub: patch.dco.sub,
      subAmount: patch.dco.subAmount,
      range: patch.dco.range,
      noise: patch.dco.noise,
      pwm: paramToPWM(patch.dco.pwm),
    })

    this.env = new ADSREnvelope({
      attack: sliderToAttack(patch.env.attack),
      decay: sliderToDecay(patch.env.decay),
      sustain: sliderToSustain(patch.env.sustain),
      release: sliderToRelease(patch.env.release),
      sampleRate,
    })

    this.gate = new ADSREnvelope({
      attack: sliderToAttack(0.1),
      decay: sliderToDecay(0.1),
      sustain: sliderToSustain(1),
      release: sliderToRelease(0.1),
      sampleRate,
    })

    this.moogVCF = new MoogLowPassFilter(sampleRate)
    this.diodeLadderVCF = new DiodeLadder(sampleRate)

    this.updatePatch(patch)
  }

  render(lfo, positiveLFO) {
    const env = this.env.render()
    const gate = this.gate.render()

    const dcoOut = this.dco.render(
      lfo * this.patch.dco.lfo,
      paramToPWM(positiveLFO * this.patch.dco.pwm * this.patch.dco.lfoMod)
    )

    let vcfCutoffValue = this.patch.vcf.frequency * 1.1 * 10

    const vcfDirection = this.patch.vcf.modPositive ? 1 : -1
    vcfCutoffValue += this.env.out * this.patch.vcf.envMod * 14 * vcfDirection

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

    const vca = this.patch.vcaType === VCA_ENV ? env : gate
    return this.velocity * vcfOut * vca
  }

  noteOff() {
    this.env.noteOff()
    this.gate.noteOff()
  }

  isFinished() {
    return this.env.isFinished() && this.gate.isFinished()
  }

  updatePatch(patch) {
    this.patch = patch

    this.dco.saw = patch.dco.saw
    this.dco.pulse = patch.dco.pulse
    this.dco.sub = patch.dco.sub
    this.dco.noise = patch.dco.noise
    this.dco.pwm = paramToPWM(patch.dco.pwm)

    this.env.attack = sliderToAttack(patch.env.attack) * 1000
    this.env.decay = sliderToDecay(patch.env.decay) * 1000
    this.env.sustain = sliderToSustain(patch.env.sustain)
    this.env.release = sliderToRelease(patch.env.release) * 1000

    const sliderResonance = patch.vcf.resonance
    this.moogVCF.resonance = sliderResonance * 3.99
    this.diodeLadderVCF.setResonance(sliderResonance)
  }
}
