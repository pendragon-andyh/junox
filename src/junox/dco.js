import { fastTanh } from './utils.js'

export class Juno60DCO {
  constructor(sampleRate) {
    this.sampleRate = sampleRate
    this.currentPhase = 0.0
    this.phaseIncrement = 0.0
    this.pulseWidth = 0.5
    this.pulsePositive = 1.0
    this.pulseNegative = -1.0
    this.pulseHeight = 1.0
    this.subOutput = 1.0
  }

  /**
   * Signal the start of a new note (voice should be silent before this point).
   * @param {number} noteNumber - MIDI note number (0 to 127).
   */
  noteOn(noteNumber) {
    // Convert MIDI not number into a frequency, and then calculate the phase-increment for each sample-quantum.
    const noteFrequency = Math.pow(2, (noteNumber - 81) / 12) * 440
    this.phaseIncrement = noteFrequency / this.sampleRate

    // Juno60 DCO seems to start new notes partway through cycle (I think this is so that fast-attacks can be heard for low notes).
    this.currentPhase = 1.9
  }

  /**
   * Render output for a single quantum.
   * @param {number} detuneFactor - Factor to increase note's frequency by (0.5 = octave-down, 1.0 = default, 2.0 = octave-up)
   * @param {number} pulseWidth - Pulse width (0..1 - where 0 = square).
   * @param {number} sawLevel - Output level of the Sawtooth waveform.
   * @param {number} pulseLevel - Output level of the Pulse waveform.
   * @param {number} subLevel - Output level of the Sub waveform.
   */
  render(detuneFactor, pulseWidth, sawLevel, pulseLevel, subLevel) {
    // Increment phase [0-1]. Wrap-around if the cycle is complete.
    // The detuneFactor allows pitch-bend, LFO, and range to be applied.
    const phaseIncrement = this.phaseIncrement * detuneFactor
    const origPhase = this.currentPhase
    this.currentPhase += phaseIncrement
    while (this.currentPhase > 1.0) {
      this.currentPhase -= 1.0

      // Only change the PWM point when the phase has wrapped (so rapid modulation doesn't cause noise).
      this.pulseWidth = 0.5 - 0.45 * pulseWidth
      this.pulsePositive = 1.0 - pulseWidth * 0.95
      this.pulseNegative = -1.0
      this.pulseHeight = 0.45 * (this.pulsePositive - this.pulseNegative)
    }

    // Phat sawtooth (mimics charging capacitor).
    let newSawOutput = 0.0
    if (sawLevel > 0.0) {
      newSawOutput = fastTanh(this.currentPhase) * 2.626 - 1.0
      newSawOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, 1.0)
    }

    // Pulse uses a comparator against the current phase.
    let newPulseOutput = 0.0
    if (pulseLevel > 0.0) {
      newPulseOutput =
        this.currentPhase > this.pulseWidth
          ? (this.pulsePositive *= 0.999)
          : (this.pulseNegative *= 0.999)
      newPulseOutput -= this.calcPolyBLEP2(this.currentPhase, phaseIncrement, this.pulseHeight)
      const x = this.currentPhase - this.pulseWidth
      newPulseOutput += this.calcPolyBLEP2(x < 0.0 ? x + 1.0 : x, phaseIncrement, this.pulseHeight)
    }

    // Sub flip-flops between -1 and +1 when the phase reaches 0.5.
    let newSubOutput = (this.subOutput *= 0.998)
    let y = this.currentPhase - 0.1
    if (y < phaseIncrement && y > -phaseIncrement) {
      if (y < 0.0) {
        y += 1.0
      }
      const origSubOutput = newSubOutput
      if (this.currentPhase >= 0.1 && origPhase < 0.1) {
        this.subOutput = newSubOutput = newSubOutput > 0.0 ? -1.0 : +1.0
      }
      newSubOutput -= this.calcPolyBLEP2(y, phaseIncrement, origSubOutput)
    }

    // Return the mixed-down output.
    return newSawOutput * sawLevel + newPulseOutput * pulseLevel + newSubOutput * subLevel
  }

  /**
   * Calculate the PolyBLEP correction that is required to reduce aliasing.
   * @param {number} phase - Current phase.
   * @param {number} inc - Current phase-increment (to produce the desired pitch).
   * @param {number} height - Height of the PolyBLEP correction).
   */
  calcPolyBLEP2(phase, inc, height) {
    let result = 0.0
    if (phase < inc) {
      // Right side of transition.
      const t = phase / inc
      result = height * (t + t - t * t - 1.0)
    } else if (phase + inc > 1.0) {
      // Left side of transition.
      const t = (phase - 1.0) / inc
      result = height * (t * t + (t + t) + 1.0)
    }

    return result
  }
}
