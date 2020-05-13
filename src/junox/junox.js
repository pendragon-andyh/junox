import { set } from 'lodash'
import { SmoothMoves } from './smoothMoves'
import Voice from './voice'
import Chorus from './chorus'
import LFO from './lfo'
import BassBoost from './bassboost'
import HighPassFilter from './hpf'
import { sliderToLFOFreq, sliderToLFODelay, sliderToHPF } from './params'
import { clampVolume } from './utils'

const synthStatus = {
  SILENT: 0,
  NOTES_ACTIVE: 4, // This is the number of trailing frames that will be rendered AFTER all notes have finished.
}

export default class Junox {
  constructor({ patch, sampleRate, polyphony }) {
    this.patch = patch
    this.sampleRate = sampleRate
    this.maxVoices = polyphony

    this.voices = []
    this.status = synthStatus.SILENT

    // Parameters that need to be "smoothed" (so we can change them in realtime without hearing stepping/zippering)
    this.parameters = [
      (this.pitchBendParam = new SmoothMoves(0, sampleRate)),
      (this.pitchBendDepthParam = new SmoothMoves(1, sampleRate)),
      (this.lfoRateParam = new SmoothMoves(0, sampleRate)),
      (this.pitchLfoModDepthParam = new SmoothMoves(0, sampleRate)),
      (this.pwmDepthParam = new SmoothMoves(0, sampleRate)),
      (this.sawLevelParam = new SmoothMoves(0, sampleRate)),
      (this.pulseLevelParam = new SmoothMoves(0, sampleRate)),
      (this.subLevelParam = new SmoothMoves(0, sampleRate)),
      (this.noiseLevelParam = new SmoothMoves(0, sampleRate)),
      (this.filterCutoffParam = new SmoothMoves(0, sampleRate)),
      (this.filterResonanceParam = new SmoothMoves(0, sampleRate)),
      (this.filterEnvModParam = new SmoothMoves(0, sampleRate)),
      (this.filterLfoModParam = new SmoothMoves(0, sampleRate)),
      (this.filterKeyModParam = new SmoothMoves(0, sampleRate)),
      (this.vcaGainFactorParam = new SmoothMoves(0, sampleRate)),
    ]

    this.lfo = new LFO({
      frequency: sliderToLFOFreq(patch.lfo.frequency),
      delay: 0,
      sampleRate,
    })

    this.bassBoost = new BassBoost({ frequency: 75 })

    this.hpf = new HighPassFilter({
      cutoff: sliderToHPF(patch.hpf),
      resonance: 1,
      sampleRate,
    })

    this.chorus = new Chorus(sampleRate)

    this.update()
  }

  noteOn(note, velocity) {
    this.status = synthStatus.NOTES_ACTIVE

    // If note already playing then retrigger.
    const voiceIndex = this.voices.findIndex((voice) => voice.note === note)
    if (voiceIndex >= 0) {
      this.voices[voiceIndex].noteOn(note, velocity)
      return
    }

    // TODO - Fix triggering and release for LFO.
    if (!this.voices.length && this.patch.lfo.autoTrigger) {
      this.lfo.trigger()
    }

    const newVoice = new Voice({
      patch: this.patch,
      sampleRate: this.sampleRate,
    })
    newVoice.noteOn(note, velocity)

    if (this.voices.length < this.maxVoices) {
      this.voices.push(newVoice)
      return
    }
    // TODO: recycle voice at minimum volume
    this.voices[0] = newVoice
  }

  noteOff(note) {
    this.voices.forEach(
      (voice) => voice.note === note && !voice.isFinished() && voice.noteOff()
    )
  }

  lfoTrigger() {
    this.lfo.trigger()
    this.lfoTriggered = true
  }

  lfoRelease() {
    this.lfoTriggered = false
  }

  render(outL, outR) {
    // If silent then return immediately.
    if (this.status === synthStatus.SILENT) {
      return
    }
    this.synthStatus--

    // TODO - Just leave voices deactivated.
    // remove dead voices first
    this.voices = this.voices.filter((voice) => !voice.isFinished())
    if (this.voices.length) {
      this.status = synthStatus.NOTES_ACTIVE
    }

    // Render contents of buffer.
    for (let i = 0; i < outL.length; i++) {
      const pitchBend = this.pitchBendParam.getNextValue()
      const pitchBendDepth = this.pitchBendDepthParam.getNextValue()
      const pwmDepth = this.pwmDepthParam.getNextValue()
      const pitchLfoModDepth = this.pitchLfoModDepthParam.getNextValue()
      const sawLevel = this.sawLevelParam.getNextValue()
      const pulseLevel = this.pulseLevelParam.getNextValue()
      const subLevel = this.subLevelParam.getNextValue()
      const noiseLevel = this.noiseLevelParam.getNextValue()
      const filterCutoff = this.filterCutoffParam.getNextValue()
      const filterResonance = this.filterResonanceParam.getNextValue()
      const filterEnvMod = this.filterEnvModParam.getNextValue()
      const filterLfoMod = this.filterLfoModParam.getNextValue()
      const filterKeyMod = this.filterKeyModParam.getNextValue()
      const vcaGainFactor = this.vcaGainFactorParam.getNextValue()

      // Calculate "k-rate" values (trading smoothness/accuracy against performance).
      if (i === 0) {
        // TODO
      }

      const canLFO = this.patch.lfo.autoTrigger || this.lfoTriggered
      const lfoOut = canLFO ? this.lfo.render() : 0.0

      // All voices are detuned by the same relative-amount.
      let detuneOctaves = lfoOut * pitchLfoModDepth + pitchBend * pitchBendDepth
      let detuneFactor = this.patch.dco.range
      if (detuneOctaves !== 0.0) {
        detuneFactor *= Math.pow(2, detuneOctaves)
      }

      // Gather the outputs from each voice.
      let monoOut = 0.0
      for (let v = 0; v < this.voices.length; v++) {
        const voice = this.voices[v]
        if (!voice.isFinished()) {
          monoOut += voice.render(
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
          )
        }
      }

      // Apply the VCA gain.
      monoOut *= vcaGainFactor

      // Apply high-pass filter (or base boost).
      if (this.patch.hpf < 0.3) {
        monoOut = clampVolume(monoOut + this.bassBoost.render(monoOut, 0.3))
      } else {
        monoOut = this.hpf.render(monoOut)
      }

      // TODO - tanh here??

      // Apply the chorus effect.
      this.chorus.render(monoOut)
      outL[i] = this.chorus.leftOutput
      outR[i] = this.chorus.rightOutput
    }

    // Check if synth should now be silent.
    if (this.status === synthStatus.SILENT) {
      // Fade-out the current output signal (should only contain echos).
      let fadeLevel = 1.0
      const fadeStep = fadeLevel / outL.length
      for (let i = 0; i < outL.length; i++) {
        outL[i] *= fadeLevel
        outR[i] *= fadeLevel
        fadeLevel -= fadeStep
      }

      // Reset any stateful elements (filters, delay-buffers, lfo, etc).
      this.bassBoost.reset()
      this.hpf.reset()
      this.chorus.reset()

      // Reset any parameters to their target values.
      for (let i = 0; i < this.parameters.length; i++) {
        this.parameters[i].reset()
      }
    }
  }

  setValue(path, value) {
    set(this.patch, path, value)
    this.update()
  }

  update() {
    let isActive = false
    for (let v = 0; v < this.voices.length; v++) {
      const voice = this.voices[v]
      voice.updatePatch(this.patch)
      isActive = isActive || !voice.isFinished()
    }

    let changeDuration = isActive ? 128.0 / this.sampleRate : 0.0

    // Relative volumes of each source.
    const sawLevel = this.patch.dco.saw ? 0.2 : 0.0
    const pulseLevel = this.patch.dco.pulse ? 0.2 : 0.0
    const subLevel = this.patch.dco.sub ? this.patch.dco.subAmount * 0.195 : 0.0
    const noiseLevel = this.patch.dco.noise * 0.21

    // If multiple sources at same time then volume is reduced (max is 0.5).
    let mixFactor = sawLevel + pulseLevel + subLevel + noiseLevel
    if (mixFactor > 0.3) {
      mixFactor = 2.0 - (mixFactor - 0.3) * 1.5
    } else {
      mixFactor = 2.0
    }

    this.sawLevelParam.linearRampToValueAtTime(
      sawLevel * mixFactor,
      changeDuration
    )
    this.pulseLevelParam.linearRampToValueAtTime(
      pulseLevel * mixFactor,
      changeDuration
    )
    this.subLevelParam.linearRampToValueAtTime(
      subLevel * mixFactor,
      changeDuration
    )
    this.noiseLevelParam.linearRampToValueAtTime(
      noiseLevel * mixFactor,
      changeDuration
    )
    this.pitchLfoModDepthParam.linearRampToValueAtTime(
      this.patch.dco.lfo,
      changeDuration
    )
    this.pwmDepthParam.linearRampToValueAtTime(
      this.patch.dco.pwm,
      changeDuration
    )

    const envModDirection = this.patch.vcf.modPositive ? 1.0 : -1.0
    this.filterCutoffParam.linearRampToValueAtTime(
      this.patch.vcf.frequency,
      changeDuration * 200
    )
    this.filterResonanceParam.linearRampToValueAtTime(
      this.patch.vcf.resonance,
      changeDuration
    )
    this.filterEnvModParam.linearRampToValueAtTime(
      this.patch.vcf.envMod * envModDirection,
      changeDuration
    )
    this.filterLfoModParam.linearRampToValueAtTime(
      this.patch.vcf.lfoMod,
      changeDuration
    )
    this.filterKeyModParam.linearRampToValueAtTime(
      this.patch.vcf.keyMod,
      changeDuration
    )

    this.chorus.update(this.patch.chorus)

    // TODO
    this.lfoRateParam.linearRampToValueAtTime(
      this.patch.lfo.frequency,
      changeDuration
    )
    this.lfo.setRate(sliderToLFOFreq(this.patch.lfo.frequency))
    this.lfo.setDelay(sliderToLFODelay(this.patch.lfo.delay))

    // TODO
    this.hpf.setCutoff(sliderToHPF(this.patch.hpf))

    // VCA gain. 0.0 => 0.1, 0.5 => 0.316, 1.0 => 1.0
    const vcaGainFactor = Math.pow(1.2589, this.patch.vca * 10) * 0.1
    this.vcaGainFactorParam.linearRampToValueAtTime(
      vcaGainFactor,
      changeDuration
    )
  }

  panic() {
    // TODO - Use shutdown().
    this.voices = []
  }
}
