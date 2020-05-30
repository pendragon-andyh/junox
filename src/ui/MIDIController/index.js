import React from 'react'
import PropTypes from 'prop-types'

// TODO: should this be a React component at all???
// TODO: can this be done with hooks?

export default class MidiController extends React.Component {
  static propTypes = {
    noteOn: PropTypes.func.isRequired,
    noteOff: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.midiStarted = this.midiStarted.bind(this)
    this.midiSystemError = this.midiSystemError.bind(this)
    this.midiMessageReceived = this.midiMessageReceived.bind(this)
  }

  componentDidMount() {
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(this.midiStarted, this.midiSystemError)
    }
  }

  // TODO: Fix this with a midi dropdown selector
  midiStarted(midiAccess) {
    let midiIn = null
    let inputs = midiAccess.inputs.values()
    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input = input.value
      const name = input.name.toString().toLowerCase()
      const isPreferred =
        (!midiIn && name.includes('mpk')) ||
        name.includes('lpk') ||
        name.includes('key') ||
        name.includes('midi')
      if (isPreferred) {
        midiIn = input
        midiIn.onmidimessage = this.midiMessageReceived
      }
    }
    if (!midiIn) {
      console.log('no midi input available?')
    }
  }

  midiSystemError(err) {
    // TODO: surface this one better?
    console.log('MIDI not initialized - error encountered:' + err.code)
  }

  midiMessageReceived(event) {
    const cmd = event.data[0] >> 4
    const note = event.data[1]
    const velocity = event.data[2]
    if (cmd === 8 || (cmd === 9 && velocity === 0)) {
      this.props.noteOff(note)
    } else if (cmd === 9) {
      this.props.noteOn(note, velocity / 127)
    }
  }

  render() {
    return null
  }
}
