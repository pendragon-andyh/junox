export class MidiAdapter {
  _midiAccess = null
  _midiOptions = {}

  withSysex(sysexMode = true) {
    this._midiOptions.sysex = sysexMode
  }

  isConnected() {
    return this._midiAccess !== null
  }

  async start(onStateChange = null) {
    if (navigator.requestMIDIAccess) {
      this._midiAccess = null

      const that = this
      function midiAccessSuccess(access) {
        that._midiAccess = access
        access.onstatechange = onStateChange
      }

      function midiAccessFailed() {
        console.log('MIDI access failed.')
      }

      await navigator.requestMIDIAccess(this._midiOptions).then(midiAccessSuccess, midiAccessFailed)
    } else {
      console.log('MIDI is not available for this browser.')
    }

    return this
  }

  stop() {
    this._midiAccess = null
  }

  listInputs() {
    this.ensureMidiStarted()
    const results = []
    this._midiAccess.inputs.forEach((x) => {
      results.push({ id: x.id, name: x.name, port: x })
    })
    return results
  }

  connectFromInput(portId, consumer) {
    this.ensureMidiStarted()

    const port = this._midiAccess.inputs.get(portId)
    if (!port) {
      throw new RangeError(`MIDI Input port "${portId} not found`)
    }

    // If port is already connected to somethinf then send "all notes off" message to tidy-up.
    if (port.onmidimessage) {
      port.onmidimessage([176, 123, 0])
    }

    // Forward the MIDI event data to the consumer.
    port.onmidimessage = (ev) => {
      consumer && consumer.handleMidiInputMessage(ev.data)
    }
  }

  disconnectFromInput(portId) {
    this.ensureMidiStarted()
    this.connectFromInput(portId, null)
  }

  ensureMidiStarted() {
    if (!this._midiAccess) {
      throw new Error(`MIDI connection has not been started`)
    }
  }
}

/**
 * Class that can act as a consumer of MIDI/keyboard inputs.
 */
export class MidiConsumer {
  /**
   * @property  Event handler-method for note-on events.
   * @type {function} - onNoteOn(noteNumber, velocity)
   */
  onNoteOn = null

  /**
   * @property  Event handler-method for note-off events.
   * @type {function} - onNoteOff(noteNumber, velocity)
   */
  onNoteOff = null

  /**
   * @property  Event handler-method for control-change (CC) events.
   * @type {function} - onControlChange(controlNumber, controlValue)
   */
  onControlChange = null

  /**
   * @property  Event handler-method for pitch-bend events.
   * @type {function} - onPitchBend(bendValue)
   */
  onPitchBend = null

  /**
   * @property Event handler-method for "all notes off" events".
   * @type {function} - onWatchAll()
   */
  onAllNotesOff = null

  /**
   * @property Event handler-method for watching all incoming-inputs on a MIDI port.
   * @type {function} - onWatchAll(data)
   */
  onWatchAll = null

  /** @private Map of all notes that are currently on */
  _onNotes = {}

  /** @private Map of all notes that are currently been held by the sustain pedal */
  _sustainedNotes = {}

  /** @private True if the sustain pedal is active */
  _isSustained = false

  /** @private Map of CC handler methods for specific controllers */
  _controlChangeHandlers = {
    64: function (controlValue) {
      if (controlValue) {
        this.sustainOn()
      } else {
        this.sustainOff()
      }
    },
    123: this.allNotesOff,
  }

  /**
   * Register handler-functions for specific CC event.
   * @param {number} controlNumber - Control number (between 0 and 127),
   * @param {number} handler - Handler-function for handling the specified control-change.
   */
  registerControlChangeHandler(controlNumber, handler) {
    this._sustainedNotes[controlNumber] = handler
  }

  /**
   * Trigger a note.
   * @param {number} noteNumber - MIDI note number (0 - 127).
   * @param {number} velocity - Velocity (1 = soft, 127 = hard, 0 = off).
   */
  noteOn(noteNumber, velocity = 64) {
    // If the velocity is zero then its really a noteOff event.
    if (velocity === 0) {
      this.noteOff(noteNumber, 64)
      return
    }

    // Invoke the "onNoteOn" event handler to do the real work.
    this.onNoteOn && this.onNoteOn(noteNumber, velocity)

    // Keep track of the triggered notes.
    this._onNotes[noteNumber] = true
    delete this._sustainedNotes[noteNumber]
  }

  /**
   * Release a note.
   * @param {number} noteNumber - MIDI note number (0 - 127).
   * @param {number} velocity - Velocity (0 = soft, 127 = hard).
   */
  noteOff(noteNumber, velocity = 64) {
    // If the sustain-pedal is active then store -up the note-off event for later.
    if (this._isSustained) {
      this._sustainedNotes[noteNumber] = true
      return
    }

    // Invoke the "onNoteOff" event handler to do the real work.
    this.onNoteOff && this.onNoteOff(noteNumber, velocity)

    // Keep track of the triggered notes.
    delete this._onNotes[noteNumber]
    delete this._sustainedNotes[noteNumber]
  }

  /**
   * Activate the sustain pedal (any released notes will be held until the pedal is deactivated).
   */
  sustainOn() {
    this._isSustained = true
  }

  /**
   * Deactivate the sustain-pedal (and release any notes that have been held by it).
   */
  sustainOff() {
    this._isSustained = false
    for (let sustainedNoteNumber in Object.keys(this._sustainedNotes)) {
      this.noteOff(sustainedNoteNumber, 64)
    }
  }

  /**
   * Set the value for a control.
   * @param {number} controlNumber - Control number (0 - 127).
   * @param {*} controlValue - Control value (0 - 127).
   */
  controlChange(controlNumber, controlValue) {
    // Invoke a specific control-handler if one has been registered.
    const handler = this._controlChangeHandlers[controlNumber]
    handler && handler.call(this, controlValue)

    // Invoke the "onControlChange" event handler to do the real work.
    this.onControlChange && this.onControlChange(controlValue)
  }

  /**
   * Set the current pitch-bend value.
   * @param {number} bendValue - The current value of the bend-lever (-1 to +1).
   */
  pitchBend(bendValue) {
    // Invoke the "onControlChange" event handler to do the real work.
    this.onPitchBend && this.onPitchBend(bendValue)
  }

  /**
   * Release all notes.
   */
  allNotesOff() {
    this._isSustained = false
    for (let noteNumber in Object.keys(this._onNotes)) {
      this.noteOff(noteNumber, 64)
    }
    this.onAllNotesOff && this.onAllNotesOff()
  }

  /**
   * Handle incoming MIDI input events.
   * @param {Array<int>} data - Incoming event data from the MIDI adapter.
   */
  handleMidiInputMessage(data) {
    // If "watch all" handler has been specified then invoke it.
    this.onWatchAll && this.onWatchAll(data)

    // Decode the MIDI message and invoke the appropriate behaviour.
    const messageType = data[0] >> 4
    switch (messageType) {
      case 8:
        this.noteOff(data[1], data[2])
        break
      case 9:
        this.noteOn(data[1], data[2])
        break
      case 11:
        this.controlChange(data[1], data[2])
        break
      case 14:
        const bendValue = ((data[2] << 7) + data[1]) / 8192 - 1
        this.pitchBend(bendValue)
        break
      default:
        break
    }
  }
}
