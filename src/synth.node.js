import {
  LFO_TRIGGER_OFF,
  LFO_TRIGGER_ON,
  NOTE_OFF,
  NOTE_ON,
  PANIC,
  SET_PARAM,
  SET_PATCH,
} from './synth.constants'

export default class SynthWorkletNode extends AudioWorkletNode {
  constructor(context, options) {
    super(context, 'junox-synth', options)
    this.port.onmessage = this.handleMessage.bind(this)
  }

  handleMessage(event) {
    // TODO - Messages received from processor.
  }

  sendMessage(action, payload) {
    this.port.postMessage({
      action,
      ...payload,
    })
  }

  noteOn(note, velocity) {
    this.port.postMessage({
      action: NOTE_ON,
      note,
      velocity,
    })
  }

  noteOff(note) {
    this.port.postMessage({
      action: NOTE_OFF,
      note,
    })
  }

  setParam(name, value) {
    this.port.postMessage({
      action: SET_PARAM,
      name,
      value,
    })
  }

  setPatch(index) {
    this.port.postMessage({
      action: SET_PATCH,
      index,
    })
  }

  lfoTrigger() {
    this.port.postMessage({ action: LFO_TRIGGER_ON })
  }

  lfoRelease() {
    this.port.postMessage({ action: LFO_TRIGGER_OFF })
  }

  panic() {
    this.port.postMessage({
      action: PANIC,
    })
  }
}
