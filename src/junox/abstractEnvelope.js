/**
 * Base implementation of an envelope.
 * @abstract
 */
export class AbstractEnvelope {
  constructor(segments) {
    /** @property Set of segments that form the envelope. */
    this._segments = segments

    /** @property Index of the current segment of the envelope (-1 = not currently active). */
    this._currentPhase = -1

    /** @property Current value of the envelope. */
    this._currentValue = 0.0
  }

  /**
   * Returns true if the envelope is currently active.
   */
  isFinished() {
    return this._currentPhase === -1
  }

  /**
   * Returns true if the envelope is active, and has been released or shutdown.
   */
  isReleased() {
    return this.currentPhase !== 0 && this.currentPhase !== 1
  }

  /**
   * Returns true if the envelope is currently shutting-down.
   */
  isShuttingDown() {
    return this.currentPhase === this._segments.length - 1
  }

  /**
   * Trigger (or retrigger) the envelope.
   */
  trigger() {
    this._currentPhase = 0
    for (let segment of this._segments) {
      segment.reset()
    }
  }

  /**
   * Release the current note.
   */
  release() {
    if (this._currentPhase !== -1) {
      this._currentPhase = this._segments.length - 2
    }
  }

  /**
   * Shutdown the envelope (when you need all notes to stop quickly, or when you are stealing voices).
   */
  shutdown() {
    if (this._currentPhase !== -1) {
      this._currentPhase = this._segments.length - 1
    }
  }

  /**
   * Reset the envelope (only used when the voice is silent).
   */
  reset() {
    this._currentPhase = -1
    this._currentValue = 0.0
    for (let i = 0; i < this._segments.length; i++) {
      this._segments[i].reset()
    }
  }

  /**
   * Calculate the next value of the envelope.
   */
  render() {
    let currentPhase = this._currentPhase
    while (currentPhase >= 0 && currentPhase < this._segments.length) {
      // Calculate the next value of the current segment.
      const segment = this._segments[currentPhase]
      const nextValue = segment.process(this._currentValue)
      if (segment.isComplete(nextValue)) {
        // Switch to next phase of the envelope.
        currentPhase++
        if (currentPhase >= this._segments.length) {
          // All phases are complete, so update to "not-active".
          this._currentValue = 0.0
          currentPhase = -1
        }
        this._currentPhase = currentPhase
      } else {
        // Otherwise the calculated value was good.
        this._currentValue = nextValue
        break
      }
    }
    return this._currentValue
  }
}

export class AttackSegment {
  /**
   * Create an envelope attack segment.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   * @param {number} attackTCO - For analog this is often "Math.exp(-1.5)".
   * @param {number} target - Target level at-which this segment should stop.
   * @param {bool} isSustainAtEnd - Set to true if the end of the segment is the sustain phase.
   */
  constructor(sampleRate, attackTCO, target, isSustainAtEnd) {
    this._sampleRate = sampleRate
    this._attackTCO = attackTCO
    this._attackCoeff = 0.0
    this._attackOffset = 0.0
    this._isSustainAtEnd = isSustainAtEnd
    this.target = target
  }

  /**
   * Configure the segment so that it would attack from 0 to +1 in the specified number of seconds.
   * @param {number} seconds - Planned duration of the segment (if the segment runs from 0 to +1)
   */
  setDuration(duration) {
    const samples = this._sampleRate * duration
    this._attackCoeff = Math.exp(-Math.log((1.0 + this._attackTCO) / this._attackTCO) / samples)
    this._attackOffset = (1.0 + this._attackTCO) * (1.0 - this._attackCoeff)
  }

  /**
   * Reset the segment.
   */
  reset() {}

  /**
   * Calculate the next value of this segment of the envelope.
   * @param {number} previousValue - Previous value of the envelope.
   * @returns {number} - Next value of the envelope
   */
  process(previousValue) {
    const result = previousValue * this._attackCoeff + this._attackOffset
    return result > this.target && this._isSustainAtEnd ? this.target : result
  }

  /**
   * Test if the segment is now complete.
   * @param {number} value - Value to test.
   * @returns {bool} - True if the value if the segment is now complete.
   */
  isComplete(value) {
    return value > this.target
  }
}

/**
 * Model a "decay" segment (where we want to "decay" or "release")
 */
export class DecaySegment {
  /**
   * Create an envelope decay segment.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   * @param {number} decayTCO - For analog this is often "Math.exp(-4.95)".
   * @param {number} target - Target level at-which this segment should stop.
   * @param {bool} isSustainAtEnd - Set to true if the end of the segment is the sustain phase.
   */
  constructor(sampleRate, decayTCO, target, isSustainAtEnd) {
    this._sampleRate = sampleRate
    this._decayTCO = decayTCO
    this._decayCoeff = 0.0
    this._decayOffset = 0.0
    this._isSustainAtEnd = isSustainAtEnd
    this.target = target
  }

  /**
   * Configure the segment so that it would decay from +1 to 0 in the specified number of seconds.
   * @param {number} seconds - Planned duration of the segment (if the segment runs from +1 to 0)
   */
  setDuration(seconds) {
    const samples = this._sampleRate * seconds
    this._decayCoeff = Math.exp(-Math.log((1.0 + this._decayTCO) / this._decayTCO) / samples)
    this._decayOffset = (this.target - this._decayTCO) * (1.0 - this._decayCoeff)
  }

  /**
   * Reset the segment.
   */
  reset() {}

  /**
   * Calculate the next value of this segment of the envelope.
   * @param {number} previousValue - Previous value of the envelope.
   * @returns {number} - Next value of the envelope
   */
  process(previousValue) {
    const result = previousValue * this._decayCoeff + this._decayOffset
    return result < this.target && this._isSustainAtEnd ? this.target : result
  }

  /**
   * Test if the segment is now complete.
   * @param {number} value - Value to test.
   * @returns {bool} - True if the value if the segment is now complete.
   */
  isComplete(value) {
    return (value <= this.target && !this._isSustainAtEnd) || value < 0.02
  }
}

export class DelaySegment {
  /**
   * Create an envelope delay segment.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   */
  constructor(sampleRate) {
    this._sampleRate = sampleRate
    this._delaySampleCount = 0
    this._currentRemaining = 0
  }

  /**
   * Configure the segment so that it will delay for the specified number of seconds.
   * @param {number} seconds - Planned duration of the segment.
   */
  setDuration(duration) {
    const delaySampleCount = (this._sampleRate * duration) | 0
    this._currentRemaining += delaySampleCount - this._delaySampleCount
    this._delaySampleCount = delaySampleCount
  }

  /**
   * Reset the segment.
   */
  reset() {
    this._currentRemaining = this._delaySampleCount
  }

  /**
   * Calculate the next value of this segment of the envelope.
   * @param {number} previousValue - Previous value of the envelope.
   * @returns {number} - Next value of the envelope.
   */
  process(previousValue) {
    this._currentRemaining--
    return previousValue
  }

  /**
   * Test if the segment is now complete.
   * @returns {bool} - True if the value if the segment is now complete.
   */
  isComplete() {
    return this._currentRemaining <= 0
  }
}

/**
 * Model a "shutdown" segment (where we want to shutdown all notes, or where we need to steal voices)
 */
export class ShutdownSegment {
  /**
   * Create an envelope shutdown segment.
   * @param {number} sampleRate - Samples-per-second for the current audio context.
   * @param {number} seconds - Planned duration of the segment (if the segment runs from +1 to 0)
   */
  constructor(sampleRate, seconds) {
    this._shutdownRate = 1.0 / (seconds * sampleRate)
  }

  /**
   * Reset the segment.
   */
  reset() {}

  /**
   * Calculate the next value of this segment of the envelope.
   * @param {number} previousValue - Previous value of the envelope.
   * @returns {number} - Next value of the envelope
   */
  process(previousValue) {
    const result = previousValue - this._shutdownRate
    return this.value < 0.0 ? 0.0 : result
  }

  /**
   * Test if the segment is now complete.
   * @param {number} value - Value to test.
   * @returns {bool} - True if the value if the segment is now complete.
   */
  isComplete(value) {
    return value <= 0.0
  }
}
