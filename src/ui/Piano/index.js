import React from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'

export default React.memo(function PianoWrapper({ noteOn, noteOff, octave }) {
  const firstNote = MidiNumbers.fromNote('f3')
  const lastNote = MidiNumbers.fromNote('e5')
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: [...KeyboardShortcuts.BOTTOM_ROW, ...KeyboardShortcuts.QWERTY_ROW],
  })
  return (
    <Piano
      keyboardShortcuts={keyboardShortcuts}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(note) => noteOn(note + octave)}
      stopNote={(note) => noteOff(note + octave)}
      width={850}
    />
  )
})
