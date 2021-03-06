import { SmoothMoves } from './smoothMoves.js'
import Voice from './voice.js'
import { Chorus } from './chorus.js'
import { LFOWithEnvelope } from './lfoWithEnvelope.js'
import { SimpleSinglePoleFilter } from './simpleSinglePoleFilter.js'
import { fastTanh, interpolatedLookup } from './utils.mjs'

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
      (this.bendAmountParam = new SmoothMoves(0, sampleRate)),
      (this.dcoBendDepthParam = new SmoothMoves(1, sampleRate)),
      (this.pitchLfoModDepthParam = new SmoothMoves(0, sampleRate)),
      (this.pwmDepthParam = new SmoothMoves(0, sampleRate)),
      (this.sawLevelParam = new SmoothMoves(0, sampleRate)),
      (this.pulseLevelParam = new SmoothMoves(0, sampleRate)),
      (this.subLevelParam = new SmoothMoves(0, sampleRate)),
      (this.noiseLevelParam = new SmoothMoves(0, sampleRate)),
      (this.filterCutoffParam = new SmoothMoves(0, sampleRate)),
      (this.filterResonanceParam = new SmoothMoves(0, sampleRate)),
      (this.filterBendDepthParam = new SmoothMoves(1, sampleRate)),
      (this.filterEnvModParam = new SmoothMoves(0, sampleRate)),
      (this.filterLfoModParam = new SmoothMoves(0, sampleRate)),
      (this.filterKeyModParam = new SmoothMoves(0, sampleRate)),
      (this.vcaGainFactorParam = new SmoothMoves(0, sampleRate)),
    ]

    this.lfo = new LFOWithEnvelope(sampleRate)
    this.lfo.waveform = 'sine'

    this.hpf = new SimpleSinglePoleFilter(sampleRate)

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

    const newVoice = new Voice({ patch: this.patch, sampleRate: this.sampleRate })
    newVoice.noteOn(note, velocity)

    if (this.voices.length < this.maxVoices) {
      this.voices.push(newVoice)
      return
    }
    // TODO: recycle voice at minimum volume
    this.voices[0] = newVoice
  }

  noteOff(note) {
    this.voices.forEach((voice) => voice.note === note && !voice.isFinished() && voice.noteOff())
  }

  pitchBend(value) {
    this.bendAmountParam.setValue(value)
  }

  lfoTrigger() {
    this.lfo.trigger()
  }

  lfoRelease() {
    this.lfo.release()
  }

  render(outL, outR) {
    // If silent then return immediately.
    if (this.status === synthStatus.SILENT) {
      return
    }
    this.status--

    // TODO - Just leave voices deactivated.
    // remove dead voices first
    this.voices = this.voices.filter((voice) => !voice.isFinished())
    if (this.voices.length) {
      this.status = synthStatus.NOTES_ACTIVE
    }

    // Render contents of buffer.
    for (let i = 0; i < outL.length; i++) {
      const bendAmount = this.bendAmountParam.getNextValue()
      const dcoBendDepth = this.dcoBendDepthParam.getNextValue()
      const pwmDepth = this.pwmDepthParam.getNextValue()
      const pitchLfoModDepth = this.pitchLfoModDepthParam.getNextValue()
      const sawLevel = this.sawLevelParam.getNextValue()
      const pulseLevel = this.pulseLevelParam.getNextValue()
      const subLevel = this.subLevelParam.getNextValue()
      const noiseLevel = this.noiseLevelParam.getNextValue()
      const filterCutoff = this.filterCutoffParam.getNextValue()
      const filterResonance = this.filterResonanceParam.getNextValue()
      const filterBendDepth = this.filterBendDepthParam.getNextValue()
      const filterEnvMod = this.filterEnvModParam.getNextValue()
      const filterLfoMod = this.filterLfoModParam.getNextValue()
      const filterKeyMod = this.filterKeyModParam.getNextValue()
      const vcaGainFactor = this.vcaGainFactorParam.getNextValue()

      // Calculate "k-rate" values (trading smoothness/accuracy against performance).
      if (i === 0) {
        // TODO?
      }

      const lfoOut = this.lfo.render()

      // All voices are detuned by the same relative-amount (from LFO and pitch-bend lever).
      // Calculations come from the Juno 60 service manual.
      const dcoDetuneOctaves =
        lfoOut * pitchLfoModDepth * 0.25 + // +-300 cents (page 14).
        (bendAmount * dcoBendDepth * 7) / 12 // +-700 cents (page 14).
      let dcoDetuneFactor = this.patch.dco.range
      if (dcoDetuneOctaves !== 0.0) {
        dcoDetuneFactor *= Math.pow(2, dcoDetuneOctaves)
      }
      const filterDetuneOctaves =
        bendAmount * filterBendDepth * 4 + // +- 4 octaves
        filterLfoMod * lfoOut * 3.0 // +- 6 octaves (section 8.7 - VCF LFO Gain)

      // Gather the outputs from each voice.
      let monoOut = 0.0
      for (let v = 0; v < this.voices.length; v++) {
        const voice = this.voices[v]
        if (!voice.isFinished()) {
          monoOut += voice.render(
            lfoOut,
            dcoDetuneFactor,
            pwmDepth,
            sawLevel,
            pulseLevel,
            subLevel,
            noiseLevel,
            filterCutoff,
            filterResonance,
            filterEnvMod,
            filterDetuneOctaves,
            filterKeyMod
          )
        }
      }

      // Apply high pass filter.
      // Juno-60 has just 4 possible values (0, 1, 2, 3) corresponding to (none, 250, 520, 1220).
      // Our design uses a slider (like the Juno-6) so interpolate between the Juno-60's values).
      if (this.patch.hpf > 0.0) {
        let lowPassOut = this.hpf.renderLP(monoOut)
        if (this.patch.hpf < 0.25) {
          // And gradually apply HPF between 0.0 and 0.25.
          lowPassOut *= this.patch.hpf * 4.0
        }
        monoOut -= lowPassOut
      }

      // Apply the VCA gain.
      monoOut *= vcaGainFactor

      // Soft clip (to ensure that the output signal is not outside of range).
      monoOut = fastTanh(3.0 * monoOut)

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
      if (this.patch.lfo.autoTrigger) {
        this.lfo.reset()
      }
      this.hpf.reset()
      this.chorus.reset()

      // Reset any parameters to their target values.
      for (let i = 0; i < this.parameters.length; i++) {
        this.parameters[i].reset()
      }
    }
  }

  setValue(path, value) {
    // This used to use NPM.lodash.set ... but that doesn't work well when using ES6 modules.
    const pathSegments = path.split('.')
    if (pathSegments.length) {
      let target = this.patch
      for (let i = 0; i < pathSegments.length - 1; i++) {
        target = target[pathSegments[i]] || (target[pathSegments[i]] = {})
      }
      target[pathSegments[pathSegments.length - 1]] = value

      this.update()
    }
  }

  update() {
    let isActive = false
    for (let v = 0; v < this.voices.length; v++) {
      const voice = this.voices[v]
      voice.updatePatch(this.patch)
      isActive = isActive || !voice.isFinished()
    }

    // Relative volumes of each source.
    let sawLevel = this.patch.dco.saw ? 0.2 : 0.0
    let pulseLevel = this.patch.dco.pulse ? 0.2 : 0.0
    let subLevel = this.patch.dco.sub ? this.patch.dco.subAmount * 0.195 : 0.0
    let noiseLevel = this.patch.dco.noise * 0.21

    // If multiple waveforms at same time then the overall level is reduced.
    let mixFactor = sawLevel + pulseLevel + subLevel + noiseLevel
    if (mixFactor > 0.26) {
      mixFactor = 0.26 / (0.26 + (mixFactor - 0.26) * 0.3)
      pulseLevel *= mixFactor
      sawLevel *= mixFactor
      subLevel *= mixFactor
      noiseLevel *= mixFactor
    }

    this.sawLevelParam.setValue(sawLevel, isActive)
    this.pulseLevelParam.setValue(pulseLevel, isActive)
    this.subLevelParam.setValue(subLevel, isActive)
    this.noiseLevelParam.setValue(noiseLevel, isActive)
    this.pitchLfoModDepthParam.setValue(this.patch.dco.lfo, isActive)
    this.pwmDepthParam.setValue(this.patch.dco.pwm, isActive)

    const envModDirection = this.patch.vcf.modPositive ? 1.0 : -1.0
    this.filterCutoffParam.setValue(this.patch.vcf.frequency, isActive)
    this.filterResonanceParam.setValue(this.patch.vcf.resonance, isActive)
    this.filterEnvModParam.setValue(this.patch.vcf.envMod * envModDirection, isActive)
    this.filterLfoModParam.setValue(this.patch.vcf.lfoMod, isActive)
    this.filterKeyModParam.setValue(this.patch.vcf.keyMod, isActive)

    this.chorus.update(this.patch.chorus)
    setLfoValuesFromSliders(this.lfo, this.patch.lfo.frequency, this.patch.lfo.delay)
    setHpfValuesFromSliders(this.hpf, this.patch.hpf)

    // VCA gain. 0.0 => 0.1, 0.5 => 0.316, 1.0 => 1.0
    const vcaGainFactor = Math.pow(1.2589, this.patch.vca * 10) * 0.1
    this.vcaGainFactorParam.setValue(vcaGainFactor, isActive)
  }

  panic() {
    // TODO - Use shutdown().
    this.voices = []
  }
}

const curveFromLfoRateSliderToFreq = [0.3, 0.85, 3.39, 11.49, 22.22]
const curveFromLfoDelaySliderToDelay = [0.0, 0.0639, 0.85, 1.2, 2.685]
const curveFromLfoDelaySliderToAttack = [0.001, 0.053, 0.188, 0.348, 1.15]

/**
 * Configure the LFO from the Juno60's slider values.
 * @param {LFO} - Instance of LFO class.
 * @param {number} rateSlider - Value of the rate slider (0.0 to 1.0).
 * @param {number} delaySlider - Value of the delay slider (0.0 to 1.0).
 */
function setLfoValuesFromSliders(lfo, rateSlider, delaySlider) {
  const frequency = interpolatedLookup(rateSlider * curveFromLfoRateSliderToFreq.length, curveFromLfoRateSliderToFreq)
  const delayDuration = interpolatedLookup(delaySlider * curveFromLfoDelaySliderToDelay.length, curveFromLfoDelaySliderToDelay)
  const attackDuration = interpolatedLookup(delaySlider * curveFromLfoDelaySliderToAttack.length, curveFromLfoDelaySliderToAttack)

  lfo.setValues(frequency, delayDuration, attackDuration)
}

const curveFromHpfSliderToFreq = [140, 250, 520, 1220]

function setHpfValuesFromSliders(hpf, rateSlider) {
  const frequency = interpolatedLookup(rateSlider * curveFromHpfSliderToFreq.length, curveFromHpfSliderToFreq)
  hpf.setCutoff(frequency)
}
