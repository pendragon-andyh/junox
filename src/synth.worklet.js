import Junox from './junox/junox.js'
import * as CONSTANTS from './synth.constants.js'

class JunoxWorker extends AudioWorkletProcessor {
  constructor(options) {
    super()
    this.synth = new Junox({
      patch: options.processorOptions.patch,
      polyphony: options.processorOptions.polyphony,
      // eslint-disable-next-line no-undef
      sampleRate: sampleRate || 48000,
    })
    this.port.onmessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    if (event.data.action === CONSTANTS.NOTE_ON) {
      this.synth.noteOn(event.data.note, event.data.velocity)
    } else if (event.data.action === CONSTANTS.NOTE_OFF) {
      this.synth.noteOff(event.data.note)
    } else if (event.data.action === CONSTANTS.PITCH_BEND) {
      this.synth.pitchBend(event.data.value)
    } else if (event.data.action === CONSTANTS.SET_PARAM) {
      this.synth.setValue(event.data.name, event.data.value)
    } else if (event.data.action === CONSTANTS.SET_PATCH) {
      this.synth.patch = event.data.patchData
      this.synth.update()
    } else if (event.data.action === CONSTANTS.LFO_TRIGGER_ON) {
      this.synth.lfoTrigger()
    } else if (event.data.action === CONSTANTS.LFO_TRIGGER_OFF) {
      this.synth.lfoRelease()
    } else if (event.data.action === CONSTANTS.PANIC) {
      this.synth.panic()
    } else {
      console.log('Unmanaged message', JSON.stringify(event.data))
    }
  }

  process(inputs, outputs) {
    const output = outputs[0]
    this.synth.render(output[0], output[1])
    return true
  }
}

registerProcessor('junox-synth', JunoxWorker)
