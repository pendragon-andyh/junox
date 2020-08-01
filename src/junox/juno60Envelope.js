import { AbstractEnvelope, AttackSegment, DecaySegment, ShutdownSegment } from './abstractEnvelope.js'
import { interpolatedLookup } from './utils.js'

const curveFromAttackSliderToDuration = [0.001, 0.03, 0.24, 0.65, 3.25]
const curveFromDecaySliderToDuration = [0.002, 0.096, 0.984, 4.449, 19.783]
const curveFromReleaseSliderToDuration = [0.002, 0.096, 0.984, 4.449, 19.783]

/**
 * Specific implementation of the Juno60 envelope.
 */
export class Juno60Envelope extends AbstractEnvelope {
  /**
   * Create a Juno-60 envelope.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(sampleRate) {
    super([
      new AttackSegment(sampleRate, 0.632, 1.0, false),
      new DecaySegment(sampleRate, 0.025, 0.0, true),
      new DecaySegment(sampleRate, 0.025, 0.0, false),
      new ShutdownSegment(sampleRate, 0.001),
    ])
    this._attack = this._segments[0]
    this._decay = this._segments[1]
    this._release = this._segments[2]
    this._shutdown = this._segments[3]
  }

  /**
   * Configure the segments of the envelope from direct values.
   * @param {number} attackDuration - Number of seconds for the duration of the attack phase.
   * @param {number} decayDuration - Number of seconds for the duration of the decay phase.
   * @param {number} sustainLevel - Level of the sustain phase (0.0 to 1.0).
   * @param {number} releaseDuration - Number of seconds for the duration of the release phase.
   */
  setValues(attackDuration, decayDuration, sustainLevel, releaseDuration) {
    this._attack.setDuration(attackDuration)
    this._decay.target = Math.max(0.02, sustainLevel)
    this._decay.setDuration(decayDuration)
    this._release.setDuration(this._decay.target <= 0.02 ? 0.01 : releaseDuration)
  }

  /**
   * Configure the segments of the envelope from slider-positions.
   * @param {number} attackSlider - Value of the attack slider (0.0 to 1.0).
   * @param {number} decaySlider - Value of the decay slider (0.0 to 1.0).
   * @param {number} sustainSlider - Value of the sustain slider (0.0 to 1.0).
   * @param {number} releaseSlider - Value of the release slider (0.0 to 1.0).
   */
  setValuesFromSliders(attackSlider, decaySlider, sustainSlider, releaseSlider) {
    const attackDuration = interpolatedLookup(
      attackSlider * curveFromAttackSliderToDuration.length,
      curveFromAttackSliderToDuration
    )
    const decayDuration = interpolatedLookup(decaySlider * curveFromDecaySliderToDuration.length, curveFromDecaySliderToDuration)
    const releaseDuration = interpolatedLookup(
      releaseSlider * curveFromReleaseSliderToDuration.length,
      curveFromReleaseSliderToDuration
    )

    this.setValues(attackDuration, decayDuration, sustainSlider, releaseDuration)
  }
}
