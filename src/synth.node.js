import {
  LFO_TRIGGER_OFF,
  LFO_TRIGGER_ON,
  NOTE_OFF,
  NOTE_ON,
  PANIC,
  SET_PARAM,
  SET_PATCH,
} from './synth.constants.js'

export const defaultPatch = {
  name: 'Unspecified patch',
  vca: 0.5,
  vcaType: 'gate',
  lfo: { autoTrigger: true, frequency: 0.0, delay: 0.0 },
  dco: {
    range: 1,
    saw: false,
    pulse: true,
    sub: false,
    subAmount: 0,
    noise: 0,
    pwm: 0,
    pwmMod: 'm',
    lfo: 0,
  },
  hpf: 0,
  vcf: {
    frequency: 1.0,
    resonance: 0.0,
    modPositive: true,
    envMod: 0,
    lfoMod: 0,
    keyMod: 0,
  },
  env: { attack: 0.5, decay: 0.5, sustain: 0.5, release: 0.5 },
  chorus: 0,
}

export const defaultAudioNodeOptions = {
  numberOfInputs: 1,
  numberOfOutputs: 1,
  channelCountMode: 'explicit',
  channelCount: 2,
  outputChannelCount: [2],
}

export const defaultProcessorOptions = {
  patch: defaultPatch,
  polyphony: 6,
}

export class SynthWorkletNode extends AudioWorkletNode {
  constructor(context, processorOptions) {
    super(context, 'junox-synth', {
      ...defaultAudioNodeOptions,
      processorOptions: {
        ...defaultProcessorOptions,
        ...processorOptions,
      },
    })
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

  setPatch(patchData) {
    this.port.postMessage({
      action: SET_PATCH,
      patchData,
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
