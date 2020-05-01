import DCO from './dco'
import ADSREnvelope from './envelope'
import { noteToFrequency } from '../utils'
import MoogLowPassFilter from './mooglpf'
import DiodeLadder from './diodeladder'
import {
  paramToPWM,
  sliderToAttack,
  sliderToFilterFreqNorm,
  sliderToResonance,
  sliderToSustain,
  sliderToDecay,
  sliderToRelease,
} from './params'
import { VCA_ENV, VCF_DIODELADDER, VCF_MOOG } from './constants'

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

    this.moogVCF = new MoogLowPassFilter({
      sampleRate,
      resonance: sliderToResonance(patch.vcf.resonance),
      cutoff: sliderToFilterFreqNorm(patch.vcf.frequency, sampleRate) * 3.99,
    })

    this.diodeLadderVCF = new DiodeLadder({
      sampleRate,
      cutoff: sliderToFilterFreqNorm(patch.vcf.frequency, sampleRate) * 18000,
      resonance: sliderToResonance(patch.vcf.resonance) * 9 + 1,
    })
  }

  render(lfo, positiveLFO) {
    const env = this.env.render()
    const gate = this.gate.render()

    const dcoOut = this.dco.render(
      lfo * this.patch.dco.lfo,
      paramToPWM(positiveLFO * this.patch.dco.pwm * this.patch.dco.lfoMod)
    )

    const C2NoteNumber = 36
    const keyFollowDenominator = 5 * 12
    const vcfDirection = this.patch.vcf.modPositive ? 1 : -1
    let vcfCutoffValue = this.patch.vcf.frequency * 1.1 * 10
    vcfCutoffValue += this.env.out * this.patch.vcf.envMod * 14 * vcfDirection
    vcfCutoffValue += lfo * this.patch.vcf.lfoMod * 3.5
    vcfCutoffValue +=
      this.patch.vcf.keyMod *
      5 *
      ((this.note - C2NoteNumber) / keyFollowDenominator - 0.4)
    const cutoffNormalized = sliderToFilterFreqNorm(
      vcfCutoffValue,
      this.sampleRate
    )
    if (this.patch.vcf.type === VCF_MOOG) {
      this.moogVCF.cutoff = cutoffNormalized
    } else {
      this.diodeLadderVCF.setCutoff(cutoffNormalized * 18000)
    }

    const vcfOut =
      this.patch.vcf.type === VCF_DIODELADDER
        ? this.diodeLadderVCF.render(dcoOut)
        : this.moogVCF.render(dcoOut)

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
    // TODO: this can be optimised by updating only what changed
    this.dco.saw = patch.dco.saw
    this.dco.pulse = patch.dco.pulse
    this.dco.sub = patch.dco.sub
    this.dco.noise = patch.dco.noise
    this.dco.pwm = paramToPWM(patch.dco.pwm)

    this.env.attack = sliderToAttack(patch.env.attack)
    this.env.decay = sliderToDecay(patch.env.decay)
    this.env.sustain = sliderToSustain(patch.env.sustain)
    this.env.release = sliderToRelease(patch.env.release)

    const sliderResonance = sliderToResonance(patch.vcf.resonance)
    const sliderCutoff = sliderToFilterFreqNorm(patch.vcf.frequency * 10 * 1.4)
    this.moogVCF.resonance = sliderResonance * 3.99
    this.moogVCF.cutoff = sliderCutoff
    this.diodeLadderVCF.setCutoff(sliderCutoff * 18000)
    this.diodeLadderVCF.setResonance(sliderResonance * 9 + 1)
  }
}
