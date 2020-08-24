import * as CONSTANTS from './synth.constants.js'
import { Juno60FactoryPatchesA } from './patches.js'

// Inline the bundled processor-code as a string.
import processorData from '../dist/synth.worklet.txt'

// Then we convert that string into an encoded URL.
const processorBlob = base64DataToBlob(processorData)
const processorUrl = URL.createObjectURL(processorBlob)

async function createJuno60(ac, patch = defaultPatch, processorOptions = {}) {
  await ac.audioWorklet.addModule(processorUrl)
  return new SynthWorkletNode(ac, { patch, ...processorOptions })
}

class SynthWorkletNode extends AudioWorkletNode {
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
      action: CONSTANTS.NOTE_ON,
      note,
      velocity,
    })
  }

  noteOff(note) {
    this.port.postMessage({
      action: CONSTANTS.NOTE_OFF,
      note,
    })
  }

  pitchBend(value) {
    this.port.postMessage({
      action: CONSTANTS.PITCH_BEND,
      value,
    })
  }

  setParam(name, value) {
    this.port.postMessage({
      action: CONSTANTS.SET_PARAM,
      name,
      value,
    })
  }

  setPatch(patchData) {
    this.port.postMessage({
      action: CONSTANTS.SET_PATCH,
      patchData,
    })
  }

  lfoTrigger() {
    this.port.postMessage({ action: CONSTANTS.LFO_TRIGGER_ON })
  }

  lfoRelease() {
    this.port.postMessage({ action: CONSTANTS.LFO_TRIGGER_OFF })
  }

  panic() {
    this.port.postMessage({
      action: CONSTANTS.ALL_NOTES_OFF,
    })
  }
}

const defaultPatch = {
  name: 'Strings 1',
  vca: 0.5,
  vcaType: 'env',
  lfo: { autoTrigger: true, frequency: 0.6, delay: 0 },
  dco: {
    range: 1,
    saw: true,
    pulse: false,
    sub: false,
    subAmount: 0,
    noise: 0,
    pwm: 0,
    pwmMod: 'l',
    lfo: 0,
  },
  hpf: 0,
  vcf: {
    frequency: 0.7,
    resonance: 0,
    modPositive: true,
    envMod: 0,
    lfoMod: 0,
    keyMod: 1,
  },
  env: { attack: 0.4, decay: 0, sustain: 1, release: 0.45 },
  chorus: 1,
}

const defaultAudioNodeOptions = {
  numberOfInputs: 0,
  numberOfOutputs: 1,
  channelCountMode: 'explicit',
  channelCount: 2,
  outputChannelCount: [2],
}

const defaultProcessorOptions = {
  patch: defaultPatch,
  polyphony: 6,
}

function clonePatch(patchData) {
  return {
    ...patchData,
    patchValues: Float64Array.from(patchData.values),
  }
}

function base64DataToBlob(dataUrl, contentType = 'application/javascript; charset=utf-8') {
  var byteString = atob(dataUrl.split(',')[1])
  var ab = new ArrayBuffer(byteString.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: contentType })
}

export { createJuno60, SynthWorkletNode, defaultPatch, Juno60FactoryPatchesA }
