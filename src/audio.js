import synthWorklet from './synth.worklet'
import SynthWorkletNode from './synth.node'

export const SAMPLE_RATE = 44100

function unlockAudioContext(audioContext) {
  if (audioContext.state === 'suspended') {
    const events = ['touchstart', 'touchend', 'mousedown', 'keydown']
    const unlock = () => {
      events.forEach(function(event) {
        document.body.removeEventListener(event, unlock)
      })
      console.log('Resuming audio context...')
      audioContext.resume()
    }

    events.forEach(function(event) {
      document.body.addEventListener(event, unlock, false)
    })
  }
}

export async function initAudio() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)({
    sampleRate: SAMPLE_RATE
  })
  try {
    await audioContext.audioWorklet.addModule(synthWorklet)
    const synthNode = new SynthWorkletNode(audioContext, {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCountMode: 'explicit',
      channelCount: 2,
      outputChannelCount: [2]
    })
    synthNode.connect(audioContext.destination)
    unlockAudioContext(audioContext)
    return { synthNode, context: audioContext }
  } catch (error) {
    console.log('error', error)
    throw error
  }
}
