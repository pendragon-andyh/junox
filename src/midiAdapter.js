export class MidiAdapter {
  constructor() {
    this._midiAccess = null

    /**
     * @property - Currently-selected MIDI input port.
     * @type {MIDIInput}
     */
    this.inputPort = null

    /**
     * @property - Currently-selected consumer of MIDI inputs.
     * @type {MidiConsumer}
     */
    this.inputConsumer = null
  }

  /**
   * Returns True if the instance is currently connected to MIDI.
   */
  isConnected() {
    return this._midiAccess !== null
  }

  /**
   * Connect to MIDI.
   * @param {Object} midiOptions - Options object (e.g. to specify Sysex).
   * @param {Function} onStateChange - Optional event-handler function for MIDI state changes.
   */
  async connect(midiOptions = {}, onStateChange = null) {
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

      await navigator.requestMIDIAccess(midiOptions).then(midiAccessSuccess, midiAccessFailed)
    } else {
      console.log('MIDI is not available for this browser.')
    }

    return this
  }

  /**
   * Disconnect from MIDI.
   */
  disconnect() {
    this._midiAccess = null
  }

  /**
   * Get a list of the currently-available MIDI input ports.
   */
  listInputs() {
    const results = []
    if (this._midiAccess) {
      this._midiAccess.inputs.forEach((port) => {
        const titleCaseName = port.name.charAt(0).toUpperCase() + port.name.slice(1)
        results.push({ id: port.id, name: titleCaseName, port })
      })
    }
    return results
  }

  /**
   * Get a list of the currently-available MIDI input ports.
   */
  listOutputs() {
    const results = []
    if (this._midiAccess) {
      this._midiAccess.outputs.forEach((port) => {
        const titleCaseName = port.name.charAt(0).toUpperCase() + port.name.slice(1)
        results.push({ id: port.id, name: titleCaseName, port })
      })
    }
    return results
  }

  /**
   * Set the current MIDI input port.
   * @param {string} portId - Id of the port (from the ```listInputs()``` method)
   */
  setInputPort(portId) {
    this.ensureMidiStarted()

    let port = null
    if (portId) {
      port = this._midiAccess.inputs.get(portId)
      if (!port) {
        throw new RangeError(`MIDI Input port "${portId} not found`)
      }
    }

    // If port is already connected to something then send "all notes off" message to tidy-up.
    if (this.inputPort) {
      if (this.inputPort.onmidimessage) {
        this.handleMidiInput([176, 123, 0])
        this.inputPort.onmidimessage = null
      }
    }

    // Start listening to the new MIDI input port.
    if (port) {
      port.onmidimessage = (ev) => this.handleMidiInput(ev.data)
    }

    this.inputPort = port
  }

  /**
   * Specify a "consumer" for incoming MIDI messages.
   * @param {MidiConsumer} consumer - Object htat wants to listen to incoming MIDI input messages.
   */
  routeInputMessagesTo(consumer) {
    this.ensureMidiStarted()

    if (this.inputConsumer) {
      this.handleMidiInput([176, 123, 0])
    }

    this.inputConsumer = consumer
  }

  /**
   * @private - Forward the MIDI event data to the consumer.
   * @param {Array<int>} data - MIDI message data.
   */
  handleMidiInput(data) {
    this.inputConsumer && this.inputConsumer.handleMidiInputMessage(data)
  }

  /**
   * @private - Confirm that we are currently connected to MIDI.
   */
  ensureMidiStarted() {
    if (!this._midiAccess) {
      throw new Error(`MIDI connection has not been started`)
    }
  }
}
