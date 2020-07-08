/**
 * Class that can act as a consumer of MIDI/keyboard inputs.
 */
export class MidiConsumer {
  constructor() {
    /**
     * @property  Event handler-method for note-on events.
     * @type {function} - onNoteOn(noteNumber, velocity)
     */
    this.onNoteOn = null

    /**
     * @property  Event handler-method for note-off events.
     * @type {function} - onNoteOff(noteNumber, velocity)
     */
    this.onNoteOff = null

    /**
     * @property  Event handler-method for control-change (CC) events.
     * @type {function} - onControlChange(controlNumber, controlValue)
     */
    this.onControlChange = null

    /**
     * @property  Event handler-method for pitch-bend events.
     * @type {function} - onPitchBend(bendValue)
     */
    this.onPitchBend = null

    /**
     * @property Event handler-method for "all notes off" events".
     * @type {function} - onWatchAll()
     */
    this.onAllNotesOff = null

    /**
     * @property Event handler-method for watching all incoming-inputs on a MIDI port.
     * @type {function} - onWatchAll(data)
     */
    this.onWatchAll = null

    /** @private Map of all notes that are currently on */
    this._onNotes = {}

    /** @private Map of all notes that are currently been held by the sustain pedal */
    this._sustainedNotes = {}

    /** @private True if the sustain pedal is active */
    this._isSustained = false

    /** @private Map of CC handler methods for specific controllers */
    this._controlChangeHandlers = {
      64: function (controlValue) {
        if (controlValue) {
          this.sustainOn()
        } else {
          this.sustainOff()
        }
      },
      123: this.allNotesOff,
    }
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
    for (let sustainedNoteNumber of Object.keys(this._sustainedNotes)) {
      this.noteOff(sustainedNoteNumber, 64)
    }
  }

  /**
   * Set the value for a control.
   * @param {number} controlNumber - Control number (0 - 127).
   * @param {number} controlValue - Control value (0 - 127).
   */
  controlChange(controlNumber, controlValue) {
    // Invoke a specific control-handler if one has been registered.
    const handler = this._controlChangeHandlers[controlNumber]
    handler && handler.call(this, controlValue)
    // Invoke the "onControlChange" event handler to do the real work.
    this.onControlChange && this.onControlChange(controlNumber, controlValue)
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
    for (let noteNumber of Object.keys(this._onNotes)) {
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
    const messageType = (data[0] >> 4) & 7
    switch (messageType) {
      case 0:
        this.noteOff(data[1], data[2])
        break
      case 1:
        this.noteOn(data[1], data[2])
        break
      case 3:
        this.controlChange(data[1], data[2])
        break
      case 6:
        const bendValue = ((data[2] << 7) + data[1]) / 8192 - 1
        this.pitchBend(bendValue)
        break
      default:
        break
    }
  }
}
