import {
  AbstractEnvelope,
  AttackSegment,
  DecaySegment,
  ShutdownSegment,
} from './abstractEnvelope'

/**
 * Specific implementation of the Juno60 envelope.
 */
export class Juno60Envelope extends AbstractEnvelope {
  /**
   * Create a Juno-60 envelope.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(sampleRate) {
    super()
    this._segments = [
      (this.attack = new AttackSegment(sampleRate, 0.632, 1.0, false)),
      (this.decay = new DecaySegment(sampleRate, 0.025, 0.0, true)),
      (this.release = new DecaySegment(sampleRate, 0.025, 0.0, false)),
      (this.shutdown = new ShutdownSegment(sampleRate, 0.001)),
    ]
  }

  /**
   * Configure the segments of the envelope from direct values.
   * @param {number} attackDuration - Number of seconds for the duration of the attack phase.
   * @param {number} decayDuration - Number of seconds for the duration of the decay phase.
   * @param {number} sustainLevel - Level of the sustain phase (0.0 to 1.0).
   * @param {number} releaseDuration - Number of seconds for the duration of the release phase.
   */
  setValues(attackDuration, decayDuration, sustainLevel, releaseDuration) {
    this.attack.setDuration(attackDuration)
    this.decay.target = Math.max(0.02, sustainLevel)
    this.decay.setDuration(decayDuration)
    this.release.setDuration(this.decay.target <= 0.02 ? 0.01 : releaseDuration)
  }

  /**
   * Configure the segments of the envelope from slider-positions.
   * @param {number} attackSlider - Value of the attack slider (0.0 to 1.0).
   * @param {number} decaySlider - Value of the decay slider (0.0 to 1.0).
   * @param {number} sustainSlider - Value of the sustain slider (0.0 to 1.0).
   * @param {number} releaseSlider - Value of the release slider (0.0 to 1.0).
   */
  setValuesFromSliders(
    attackSlider,
    decaySlider,
    sustainSlider,
    releaseSlider
  ) {
    const attackDuration =
      0.001 + ((Math.exp(attackSlider * 5.0) - 1) / (Math.exp(5.0) - 1)) * 3.25
    const decayDuration =
      0.002 +
      ((Math.exp(decaySlider * 4.0) - 1) / (Math.exp(4.0) - 1)) *
        decaySlider *
        19.78
    const releaseDuration =
      0.002 +
      ((Math.exp(releaseSlider * 4.0) - 1) / (Math.exp(4.0) - 1)) *
        releaseSlider *
        19.78
    this.setValues(
      attackDuration,
      decayDuration,
      sustainSlider,
      releaseDuration
    )
  }
}
