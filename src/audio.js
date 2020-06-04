import synthWorklet from './synth.worklet'
import { SynthWorkletNode } from './synth.node'
import Juno60FactoryPatchesA from 'patches'

function unlockAudioContext(audioContext) {
  if (audioContext.state === 'suspended') {
    const events = ['touchstart', 'touchend', 'mousedown', 'keydown']

    console.log('Audio context - susepended until user interaction ...')
    events.forEach((eventName) => document.body.addEventListener(eventName, unlock, false))

    function unlock() {
      events.forEach((eventName) => document.body.removeEventListener(eventName, unlock))
      console.log('Audio context - unlocked ...')
      audioContext.resume()
    }
  }
}

export async function initAudio() {
  const audioContext = new AudioContext()
  try {
    await audioContext.audioWorklet.addModule(synthWorklet)
    const synthNode = new SynthWorkletNode(audioContext, { patch: Juno60FactoryPatchesA[0] })
    synthNode.connect(audioContext.destination)

    unlockAudioContext(audioContext)

    return { synthNode, context: audioContext }
  } catch (error) {
    console.log('error', error)
    throw error
  }
}
