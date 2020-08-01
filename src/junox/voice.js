import { Juno60DCO } from './dco.js'
import { Juno60Envelope } from './juno60Envelope.js'
import { LadderFilter } from './ladderFilter.js'
import { Noise } from './noise.js'

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

    this.moogVCF = new LadderFilter(sampleRate)
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
    const envDetuneOctaves = modEnvOut * filterEnvMod * 12 // Envelope changes cutoff by upto +-12 octaves.
    const keyboardDetuneOctaves = filterKeyMod * this.filterNoteFactor
    const resonanceDetuneOctaves = this.patch.vcf.resonance * 0.5 // Resonance changes cutoff a little.
    const vcfCutoffValue =
      cutoffDetuneOctave +
      lfoDetuneOctaves * ampEnvOut + // Using env to dumb-down LFO makes UFO patch sound more natural.
      keyboardDetuneOctaves +
      envDetuneOctaves +
      resonanceDetuneOctaves

    // Convert the resulting control-voltage to the cutoff frequency and aply the filter.
    const cutoffFrequency = 7.8 * Math.pow(2.0, vcfCutoffValue)
    const vcfOut = this.moogVCF.process(dcoOut, this.moogVCF.calcCutoffFactor(cutoffFrequency), filterResonance)

    return this.velocity * vcfOut * ampEnvOut
  }

  noteOn(note, velocity) {
    // If the note is new (e.g. not a re-trigger) then initialize state.
    if (note !== this.note || this.isFinished()) {
      this.note = note
      this.dco.noteOn(note)
      this.modEnv.reset()
      this.ampEnv.reset()
      this.moogVCF.reset()

      const c4 = 60
      const fiveOctaves = 5 * 12
      this.filterNoteFactor = 5 * ((this.note - c4) / fiveOctaves)
    }

    // If the patch has no sound-source then assume that it is trying to use the filter as the source.
    if (!this.patch.dco.saw && !this.patch.dco.pulse && !this.patch.dco.subAmount && !this.patch.dco.noise) {
      const initialExcite = this.patch.vcf.resonance * this.patch.vcf.resonance * 0.01
      this.moogVCF.trigger(initialExcite)
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

    if (patch.vcaType === 'env') {
      this.ampEnv.setValuesFromSliders(env.attack, env.decay, env.sustain, env.release)
    } else {
      this.ampEnv.setValues(0.00247, 0.0057, 0.98, 0.0057)
    }

    this.patch = patch
  }
}
