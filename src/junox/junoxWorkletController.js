import * as CONSTANTS from '../synth.constants.js'
import { ParameterReader } from './parameterReader.js'

export class JunoxWorkletController {
  constructor(availableVoices, sampleRate, initialPatchData) {
    this.sampleRate = sampleRate
    this.parameterReader = new ParameterReader(initialPatchData, sampleRate)

    // Arrays for tracking state and sequencing of voices.
    this.voicesAvailable = Array.from(availableVoices)
    this.voicesPressed = []
    this.voicesReleased = []
    this.voicesShuttingDown = []

    // Map of notes that are currently been held by sustain pedal.
    this.sustainPedalNotes = null

    // Array of notes that are due to be played.
    this.notesQueuedForVoiceAllocation = []
  }

  process(messageQueue, currentTime) {
    // Handle any messages that are now due.
    this.handleMessages(messageQueue, currentTime)

    // If any voices have finished then make available for next note.
    this.moveVoices(this.voicesPressed, this.voicesAvailable, collectAvailableVoices)
    this.moveVoices(this.voicesReleased, this.voicesAvailable, collectAvailableVoices)
    this.moveVoices(this.voicesShuttingDown, this.voicesAvailable, collectAvailableVoices)

    function collectAvailableVoices(voice) {
      const result = voice.isFinished()
      if (result) {
        console.log(`Voice ${voice.id} is available`)
      }
      return result
    }

    // Allocate notes to voices (and arrange note-stealing if necessary).
    this.allocateNotesToVoices()
  }

  handleMessages(messageQueue, currentTime) {
    for (let i = 0; i < messageQueue.length; i++) {
      const data = messageQueue[i]
      if (data && data.when <= currentTime) {
        this.handleMessage(data)
        messageQueue[i] = null
      }
    }

    // TODO - periodically remove null entries.
  }

  handleMessage(data) {
    // TODO - use handler-map.
    switch (data.action) {
      case CONSTANTS.NOTE_ON:
        this.handleNoteOn(data)
        break
      case CONSTANTS.NOTE_OFF:
        this.handleNoteOff(data)
        break
      case CONSTANTS.ALL_NOTES_OFF:
        this.handleAllNotesOff()
        break
      case CONSTANTS.SUSTAIN_ON:
        this.handleSustainOn()
        break
      case CONSTANTS.SUSTAIN_OFF:
        this.handleSustainOff()
        break
      case CONSTANTS.SET_PARAM:
        this.handleChangeParameter(data)
        break
      case CONSTANTS.SET_PATCH:
        this.handleChangePatch(data.patchData)
        break
      default:
        console.log('Unmanaged message - ' + JSON.stringify(data))
        break
    }
  }

  handleNoteOn(data) {
    // If the sustain-pedal is active and note is already playing then remove from sustain-list.
    if (this.sustainPedalNotes) {
      delete this.sustainPedalNotes[data.noteNumber]
    }

    // If note already playing then retrigger.
    if (
      this.moveVoices(this.voicesReleased, this.voicesPressed, retriggerExistingNote, data) ||
      this.moveVoices(this.voicesPressed, this.voicesPressed, retriggerExistingNote, data)
    ) {
      return
    }

    function retriggerExistingNote(voice, noteOnData) {
      if (voice.noteNumber === noteOnData.noteNumber) {
        voice.noteOn(noteOnData.noteNumber, noteOnData.velocity)
        return true
      }
      return false
    }

    // Otherwise queue for voice allocation.
    this.notesQueuedForVoiceAllocation.push(data)
  }

  handleNoteOff(data) {
    // If note is scheduled for start then remove it.
    for (let i = this.notesQueuedForVoiceAllocation.length - 1; i >= 0; i--) {
      if (this.notesQueuedForVoiceAllocation[i].noteNumber === data.noteNumber) {
        this.notesQueuedForVoiceAllocation.splice(i, 1)
      }
    }

    // If the sustain-pedal is engaged then queue-up "noteOff" events.
    if (this.sustainPedalNotes != null) {
      this.sustainPedalNotes[data.noteNumber] = data.noteNumber
      return
    }

    // If note already pressed then release.
    this.moveVoices(this.voicesPressed, this.voicesReleased, releaseExistingNote, data)

    function releaseExistingNote(voice, noteOffData) {
      if (voice.noteNumber === noteOffData.noteNumber && !voice.isShuttingDown()) {
        voice.noteOff(noteOffData.noteNumber, noteOffData.velocity)
        return true
      }
      return false
    }
  }

  handleAllNotesOff() {
    // Remove any queued-notes.
    this.notesQueuedForVoiceAllocation = []

    // Deactivate the sustain-pedal.
    this.sustainPedalNotes = null

    // Request shutdown of all pressed/released notes.
    this.moveVoices(this.voicesReleased, this.voicesShuttingDown, requestShutdown)
    this.moveVoices(this.voicesPressed, this.voicesShuttingDown, requestShutdown)

    function requestShutdown(voice) {
      voice.shutdown()
      return true
    }
  }

  /**
   * Start collect details of noteOff events.
   */
  handleSustainOn() {
    if (!this.sustainPedalNotes) {
      this.sustainPedalNotes = {}
    }
  }

  /**
   * Apply all pending noteOff events.
   */
  handleSustainOff() {
    if (this.sustainPedalNotes) {
      const sustainedNotes = Object.values(this.sustainPedalNotes)
      this.sustainPedalNotes = null
      for (let noteNumber of sustainedNotes) {
        this.handleNoteOff({ noteNumber: +noteNumber, velocity: 0.5 })
      }
    }
  }

  handleChangeParameter(data) {
    this.parameterReader.setParameterValue(data.controlId, data.patchValue, data.transitionSeconds)
  }

  handleChangePatch(patchData) {
    // Request all existing notes to stop. They will continue to use their original parameter values.
    this.handleAllNotesOff()

    // Create new parameter-reader to be used for future notes.
    this.parameterReader = new ParameterReader(patchData, this.sampleRate)
  }

  moveVoices(sourceArray, targetArray, condition, data) {
    let found = false
    for (var i = sourceArray.length - 1; i >= 0; i--) {
      const voice = sourceArray[i]
      if (condition.apply(this, voice, data)) {
        targetArray.push(voice)
        sourceArray.splice(i, 1)
        found = true
      }
    }
    return found
  }

  allocateNotesToVoices() {
    // Steal voices if too many notes requested.
    while (this.notesQueuedForVoiceAllocation.length > this.voicesShuttingDown.length + this.voicesAvailable.length) {
      // Prefer to steal released-voices first, then pressed-voices.
      if (!this.stealVoiceFrom(this.voicesReleased) && !this.stealVoiceFrom(this.voicesPressed)) {
        // Otherwise discard surplus waiting notes.
        this.notesQueuedForVoiceAllocation.shift()
      }
    }

    // Allocate notes to available voices.
    while (this.notesQueuedForVoiceAllocation && this.voicesAvailable) {
      const voice = this.voicesAvailable.pop()
      const item = this.notesQueuedForVoiceAllocation.pop()
      voice.noteOn(item.noteNumber, item.velocity)
      this.voicesPressed.push(voice)
    }
  }

  stealVoiceFrom(sourceVoices) {
    if (sourceVoices) {
      // Ask oldest voice to shutdown so it becomes available shortly.
      const victim = sourceVoices.shift()
      victim.shutdown()
      this.voicesShuttingDown.push(victim)
      return true
    }
    return false
  }
}

export class VoiceAllocatorForPoly1 {
  allocate(controller, synthProfile) {
    // Steal voices if too many notes requested.
    while (
      controller.notesQueuedForVoiceAllocation.length >
      controller.voicesShuttingDown.length + controller.voicesAvailable.length
    ) {
      // Prefer to steal released-voices first, then pressed-voices.
      if (!controller.stealVoiceFrom(controller.voicesReleased) && !controller.stealVoiceFrom(controller.voicesPressed)) {
        // Otherwise discard surplus waiting notes.
        controller.notesQueuedForVoiceAllocation.shift()
      }
    }

    // Allocate notes to available voices.
    while (controller.notesQueuedForVoiceAllocation && controller.voicesAvailable) {
      const voice = controller.voicesAvailable.pop()
      const item = controller.notesQueuedForVoiceAllocation.pop()
      voice.noteOn(item.noteNumber, item.velocity, parameterReader, synthProfile)
      controller.voicesPressed.push(voice)
    }
  }
}

export class VoiceAllocatorForPoly2 {}

export class VoiceAllocatorForMono {}

export class VoiceAllocatorForUnison {}
