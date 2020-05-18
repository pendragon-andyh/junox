import { VCA_ENV, VCF_DIODELADDER } from './constants'
import { Juno60DCO } from './dco'
import { DiodeLadder } from './diodeladder'
import { Juno60Envelope } from './juno60Envelope'
import { MoogLowPassFilter } from './mooglpf'
import { Noise } from './noise'

export default class Voice {
  constructor({ patch, sampleRate }) {
    this.patch = patch
    this.sampleRate = sampleRate
    this.note = -1
    this.velocity = 0.0
    this.filterNoteFactor = 0.0

    this.dco = new Juno60DCO(sampleRate)
    this.noise = new Noise()

    this.modEnv = new Juno60Envelope(sampleRate)
    this.ampEnv = new Juno60Envelope(sampleRate)

    this.moogVCF = new MoogLowPassFilter(sampleRate)
    this.diodeLadderVCF = new DiodeLadder(sampleRate)

    // Note: This is called by noteOn()
    // this.updatePatch(patch)
  }

  /**
   * Render output for a single quantum. The passed-in parameters should be "smoothed" so that we don't hear zippering.
   * @param {number} lfoOut - Current value of the LFO (between -1 and +1)
   * @param {number} detuneFactor - Factor to increase note's frequency by (0.5 = octave-down, 1.0 = default, 2.0 = octave-up)
   * @param {number} pwmDepth - Pulse width depth (between 0-square and 1)
   * @param {number} sawLevel - Output level of the Sawtooth waveform (between 0 and 1).
   * @param {number} pulseLevel - Output level of the Pulse waveform (between 0 and 1).
   * @param {number} subLevel - Output level of the Sub waveform (between 0 and 1).
   * @param {number} noiseLevel - Output level of the noise (between 0 and 1).
   * @param {number} filterCutoff - Current value of the filter's cutoff slider (between 0 and 1).
   * @param {number} filterResonance - Current value of the filter's resonance slider (between 0 and 1).
   * @param {number} filterEnvMod - Current value of the filter's envelope modulation slider (between -1 (for negative) and +1 (for positive)).
   * @param {number} filterLfoMod - Current value of the filter's LFO modulation slider (between 0 and 1).
   * @param {number} filterKeyMod - Current value of the filter's keyboard modulation slider (between 0 and 1).
   */
  render(
    lfoOut,
    detuneFactor,
    pwmDepth,
    sawLevel,
    pulseLevel,
    subLevel,
    noiseLevel,
    filterCutoff,
    filterResonance,
    filterEnvMod,
    filterLfoMod,
    filterKeyMod
  ) {
    const modEnvOut = this.modEnv.render()
    const ampEnvOut = this.ampEnv.render()

    let pulseWidth = pwmDepth * 0.48
    if (this.patch.dco.pwmMod === 'l') {
      pulseWidth *= lfoOut * 0.5 + 0.5
    } else if (this.patch.dco.pwmMod === 'e') {
      pulseWidth *= modEnvOut
    }

    let dcoOut = this.dco.render(detuneFactor, 0.5 + pulseWidth, sawLevel, pulseLevel, subLevel)
    if (noiseLevel > 0.0) {
      dcoOut += this.noise.render() * noiseLevel
    }

    const vcfCutoffValue =
      filterCutoff * 11.0 +
      lfoOut * filterLfoMod * 3.5 +
      filterKeyMod * this.filterNoteFactor +
      modEnvOut * filterEnvMod * 14
    const cutoffFrequency = 60.0 * Math.pow(2.0, vcfCutoffValue)

    let vcfOut
    if (this.patch.vcf.type === VCF_DIODELADDER) {
      this.diodeLadderVCF.setCutoff(cutoffFrequency)
      this.diodeLadderVCF.setResonance(filterResonance)
      vcfOut = this.diodeLadderVCF.render(dcoOut)
    } else {
      this.moogVCF.resonance = filterResonance * 3.99
      vcfOut = this.moogVCF.render(dcoOut, cutoffFrequency)
    }
    if (isNaN(vcfOut) || Math.abs(vcfOut) >= 2.0) {
      // TODO - Remove this (only used for exposing exploding filters).
      vcfOut = 0
    }

    return this.velocity * vcfOut * ampEnvOut
  }

  noteOn(note, velocity) {
    if (note !== this.note || this.isFinished()) {
      this.note = note
      this.dco.noteOn(note)
      this.modEnv.reset()
      this.ampEnv.reset()
      this.moogVCF.reset()
      this.diodeLadderVCF.reset()
      this.filterNoteFactor = 5 * ((this.note - 36) / 60 - 0.4)
    }

    this.velocity = velocity
    this.updatePatch(this.patch)
    this.modEnv.trigger()
    this.ampEnv.trigger()
  }

  noteOff() {
    this.modEnv.release()
    this.ampEnv.release()
  }

  isFinished() {
    return this.ampEnv.isFinished()
  }

  updatePatch(patch) {
    const env = patch.env

    this.modEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release)

    if (patch.vcaType === VCA_ENV) {
      this.ampEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release)
    } else {
      this.ampEnv.setValues(0.00247, 0.0057, 0.98, 0.0057)
    }

    this.patch = patch
  }
}
