import React, { useState } from 'react'
import AudioRecorder from '../../vendor/AudioRecorder'
import { saveAs } from 'filesaver.js'
import { FixedSizeButton } from '../Button'
import { RedButton } from './elements'

export default function Record({ audioContext, outNode }) {
  const [isRecording, setRecording] = useState(false)
  const [recorder] = useState(new AudioRecorder(audioContext, outNode))

  const startRecording = () => {
    recorder.start()
    setRecording(true)
  }

  const stopRecording = () => {
    recorder.stop()
    saveAs(recorder.exportWaveBlob(), 'recorded.wav')

    // Hack to reset. I think that AudioRecord is designer with the assumption that
    // a new instance would be used for each recording session.
    recorder['leftChannel'] = []
    recorder['rightChannel'] = []
    recorder['recordingLength'] = 0

    setRecording(false)
  }

  if (isRecording) {
    return <FixedSizeButton onClick={stopRecording}>Stop</FixedSizeButton>
  }
  return <RedButton onClick={startRecording}>Record</RedButton>
}
