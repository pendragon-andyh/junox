import { VCA_ENV, VCF_DIODELADDER } from './constants'
import { Juno60DCO } from './dco'
import { DiodeLadder } from './diodeladder'
import { Juno60Envelope } from './juno60Envelope'
import { MoogLowPassFilter } from './mooglpf'
import { Noise } from './noise'
import { interpolatedLookup } from './utils'

export default class Voice {
  constructor({ patch, sampleRate }) {
    this.patch = patch
    this.sampleRate = sampleRate
    this.note = -1
    this.velocity = 0.0
    this.filterNoteFactor = 0.0

    this.dco = new Juno60DCO(sampleRate)
    this.noise = new Noise(sampleRate, 5000)

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
   * @param {number} lfoDetuneOctaves - Number of octaves that the filter is detuned-by (for LFO and bend-lever).
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
    lfoDetuneOctaves,
    filterKeyMod
  ) {
    const modEnvOut = this.modEnv.render()
    const ampEnvOut = this.ampEnv.render()

    let pulseWidth = pwmDepth
    if (this.patch.dco.pwmMod === 'l') {
      pulseWidth *= lfoOut * 0.5 + 0.5
    } else if (this.patch.dco.pwmMod === 'e') {
      pulseWidth *= modEnvOut
    }

    let dcoOut = this.dco.render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel)
    if (noiseLevel > 0.0) {
      dcoOut += this.noise.render() * noiseLevel
    }

    // The VCF is voltage controller (1 volt per octave). Calculate how much each of the
    // modulators contribute to the control voltage.
    const cutoffDetuneOctave = (filterCutoff * 200) / 12
    const envDetineOctaves = modEnvOut * filterEnvMod * 12 // Envelope changes cutoff by upto +-12 octaves.
    const keyboardDetuneOctaves = filterKeyMod * this.filterNoteFactor
    const resonanceDetuneOctaves = this.patch.vcf.resonance // Resonance changes cutoff by upto an octave.
    let vcfCutoffValue =
      cutoffDetuneOctave +
      lfoDetuneOctaves +
      keyboardDetuneOctaves +
      envDetineOctaves +
      resonanceDetuneOctaves

    // Increase gain when the LPF cutoff frequency is low (the Moog LPF attenuates low
    // frequencies a lot more than the Juno-60 LPF does).
    if (vcfCutoffValue < 8.0) {
      let vcfGainBodge = (8.0 - vcfCutoffValue) * 0.125
      dcoOut *= 1.0 + vcfGainBodge * 3.0
    }

    // Convert the resulting control-voltage to the cutoff frequency.
    let cutoffFrequency = 7.8 * Math.pow(2.0, vcfCutoffValue)
    cutoffFrequency = fixLpfCutoff(cutoffFrequency)

    let vcfOut
    if (this.patch.vcf.type === VCF_DIODELADDER) {
      this.diodeLadderVCF.setCutoff(cutoffFrequency)
      this.diodeLadderVCF.setResonance(filterResonance)
      vcfOut = this.diodeLadderVCF.render(dcoOut)
    } else {
      this.moogVCF.resonance = filterResonance * 3.99
      vcfOut = this.moogVCF.render(dcoOut, cutoffFrequency)
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

      const c4 = 60
      const fiveOctaves = 5 * 12
      this.filterNoteFactor = 5 * ((this.note - c4) / fiveOctaves)
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

/**
 * The Moog filter does not have a linear response so we need to correct the cutoff frequency.
 */
function fixLpfCutoff(fc) {
  if (fc < 10000) {
    return fc * interpolatedLookup(0.002 * fc, lpfCutoffCorrections)
  }
  return fc
}

const lpfCutoffCorrections = [
  1,
  4,
  1.364446108,
  1.30021398,
  1.291615494,
  1.288268551,
  1.264147018,
  1.225067204,
  1.207675563,
  1.214457029,
  1.197350752,
  1.170175889,
  1.165266155,
  1.147560592,
  1.125353785,
  1.111233998,
  1.0918184,
  1.067975101,
  1.04060779,
  1.026150863,
  1.022347836,
  1,
]
