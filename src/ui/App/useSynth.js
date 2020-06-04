import { useState } from 'react'
import { set, cloneDeep } from 'lodash'
import patches from '../../patches'

export default function useSynth(synth, setLastNoteOn) {
  const [patch, setPatchValues] = useState(patches[0])
  const setSynthPatchValue = (name, value) => {
    synth.setParam(name, value)
    setPatchValues((patch) => {
      set(patch, name, value)
      return { ...patch }
    })
  }

  const setSynthValue = (name, forceValue, transformer = (v) => v) => (value) => {
    const paramValue = forceValue != null ? forceValue : transformer(value)
    setSynthPatchValue(name, paramValue)
  }

  const noteOn = (note, velocity = 0.8) => {
    synth.noteOn(note, velocity)
    setLastNoteOn(note)
  }
  const noteOff = (note) => synth.noteOff(note)

  const setPatch = (patchIndex) => {
    const newPatchData = cloneDeep(patches[patchIndex])
    synth.setPatch(newPatchData)
    setPatchValues(newPatchData)
  }

  const lfoTrigger = () => synth.lfoTrigger()
  const lfoRelease = () => synth.lfoRelease()

  return {
    lfoRelease,
    lfoTrigger,
    noteOff,
    noteOn,
    patch,
    setPatch,
    setSynthPatchValue,
    setSynthValue,
  }
}
