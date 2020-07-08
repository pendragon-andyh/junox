import { LFO } from './lfo.js'
import { AbstractEnvelope, DelaySegment, AttackSegment, DecaySegment, ShutdownSegment } from './abstractEnvelope.js'

/**
 * Implementation of a low frequency oscillator - with the ability to delay the onset of modulation.
 * Note: You might want to pipe the output from a lowpass filter (see biquad).
 */
export class LFOWithEnvelope extends LFO {
  /**
   * @constructor.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(sampleRate) {
    super(sampleRate)

    const segments = [
      (this._delay = new DelaySegment(sampleRate)),
      (this._attack = new AttackSegment(sampleRate, 0.03, 1.0, true)),
      (this._release = new DecaySegment(sampleRate, 0.025, 0.0, false)),
      (this._shutdown = new ShutdownSegment(sampleRate, 0.001)),
    ]
    this._release.setDuration(0.1)
    this._env = new AbstractEnvelope(segments)
  }

  /**
   * Returns true if the envelope is currently active.
   */
  isActive() {
    return !this._env.isFinished()
  }

  /**
   * Trigger (or retrigger) the envelope.
   */
  trigger() {
    if (!this.isActive()) {
      this.currentPhase = 1.0
      this.currentValue = 0.0
    }
    if (this._env.isFinished() || !this._env.isReleased()) {
      this._env.trigger()
    }
  }

  /**
   * Release the current note.
   */
  release() {
    this._env.release()
  }

  /**
   * Shutdown the envelope (when you need all notes to stop quickly, or when you are stealing voices).
   */
  shutdown() {
    this._env.shutdown()
  }

  /**
   * Reset the envelope (only used when the voice is silent).
   * @override
   */
  reset() {
    super.reset()
    this._env.reset()
  }

  /**
   * Calculate the next value of the LFO.
   * @override
   */
  render() {
    if (!this.isActive()) {
      return 0.0
    }

    // Calculate the envelope (as determined by the "delay" setting).
    const envValue = this._env.render()
    if (envValue === 0.0) {
      // If no value then we can bail-out here.
      return 0.0
    }

    return envValue * super.render()
  }

  /**
   * Configure the LFO from direct values.
   * @param {number} frequency - Frequency of the LFO (Hz).
   * @param {number} delayDuration - Number of seconds for the duration of the delay phase.
   * @param {number} attackDuration - Number of seconds for the duration of the attack phase.
   */
  setValues(frequency, delayDuration, attackDuration) {
    this.setRate(frequency)
    this._delay.setDuration(delayDuration)
    this._attack.setDuration(attackDuration)
  }
}
