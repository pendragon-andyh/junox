import { set } from 'lodash'
import Voice from './voice'
import Chorus from './chorus'
import LFO from './lfo'
import BassBoost from './bassboost'
import HighPassFilter from './hpf'
import { sliderToLFOFreq, sliderToLFODelay, sliderToHPF } from './params'
import { clampVolume } from './utils'

export default class Junox {
  constructor({ patch, sampleRate, polyphony }) {
    this.patch = patch
    this.voices = []
    this.maxVoices = polyphony
    this.patch = patch
    this.sampleRate = sampleRate

    this.chorus = new Chorus(sampleRate, 0.006, 0.0035)

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

    this.update()
  }

  noteOn(note, velocity) {
    const voiceIndex = this.voices.findIndex((voice) => voice.note === note)
    const newVoice = new Voice({
      note,
      patch: this.patch,
      velocity,
      sampleRate: this.sampleRate,
    })
    if (!this.voices.length && this.patch.lfo.autoTrigger) {
      this.lfo.trigger()
    }
    if (this.voices.length < this.maxVoices) {
      this.voices.push(newVoice)
      return
    }
    if (voiceIndex > -1) {
      this.voices[voiceIndex] = newVoice
      return
    }
    // TODO: recycle voice at minimum volume
    this.voices[0] = newVoice
  }

  noteOff(note) {
    this.voices.forEach((voice) => voice.note === note && voice.noteOff())
  }

  lfoTrigger() {
    this.lfo.trigger()
    this.lfoTriggered = true
  }

  lfoRelease() {
    this.lfoTriggered = false
  }

  render(outL, outR) {
    // remove dead voices first
    this.voices = this.voices.filter((voice) => !voice.isFinished())

    for (let i = 0; i < outL.length; i++) {
      const canLFO = this.patch.lfo.autoTrigger || this.lfoTriggered
      const lfo = canLFO ? this.lfo.render() : 0
      const positiveLFO = lfo / 2 + 0.5

      // Gather the outputs from each voice.
      let monoOut = 0
      for (let j = 0; j < this.voices.length; j++) {
        if (!this.voices[j].isFinished()) {
          monoOut += this.voices[j].render(lfo, positiveLFO)
        }
      }

      // Apply the VCA gain.
      monoOut *= this.vcaGainFactor

      // Apply high-pass filter (or base boost).
      if (this.patch.hpf < 0.3) {
        monoOut = clampVolume(monoOut + this.bassBoost.render(monoOut, 0.3))
      } else {
        monoOut = this.hpf.render(monoOut)
      }

      // Apply the chorus effect.
      this.chorus.render(monoOut)
      outL[i] = this.chorus.leftOutput
      outR[i] = this.chorus.rightOutput
    }
  }

  setValue(path, value) {
    set(this.patch, path, value)
    this.update()
  }

  update() {
    // TODO: fix me for real time
    this.voices.forEach((voice) => voice.updatePatch(this.patch))

    switch (this.patch.chorus) {
      case 1:
        this.chorus.lfo.setRate(0.513)
        this.chorus.wet = 0.5
        this.chorus.maxDelayOffset = 0.00185 * this.sampleRate
        break
      case 2:
        this.chorus.lfo.setRate(0.863)
        this.chorus.wet = 0.5
        this.chorus.maxDelayOffset = 0.00185 * this.sampleRate
        break
      case 3:
        this.chorus.lfo.setRate(10)
        this.chorus.wet = 0.5
        this.chorus.maxDelayOffset = 0.0002 * this.sampleRate
        break
      default:
        this.chorus.lfo.setRate(0.513)
        this.chorus.wet = 0.0
        this.chorus.maxDelayOffset = 0.00185 * this.sampleRate
        break
    }

    this.lfo.setRate(sliderToLFOFreq(this.patch.lfo.frequency))
    this.lfo.setDelay(sliderToLFODelay(this.patch.lfo.delay))

    this.hpf.setCutoff(sliderToHPF(this.patch.hpf))

    // VCA gain. 0.0 => 0.1, 0.5 => 0.316, 1.0 => 1.0
    this.vcaGainFactor = Math.pow(1.2589, this.patch.vca * 10) * 0.1
  }

  panic() {
    this.voices = []
  }
}
