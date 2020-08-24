export class ParameterReader {
  /**
   * @constructor
   * @param {Array<number>} initialPatchValues - Array contain parameter values for patch.
   * @param {number} sampleRate - Sample rate of audio context.
   */
  constructor(initialPatchValues, sampleRate) {
    this._currentValues = Float64Array.from(initialPatchValues)
    this._targetValues = Float64Array.from(initialPatchValues)
    this._increments = new Float64Array(this._currentValues.length)
    this._sampleRate = sampleRate
    this._hasChanges = false
    this._lastIndex = -1
  }

  /**
   * Set the value of a control parameter.
   * @param {number} controlId - Index of control.
   * @param {number} patchValue - New value of control.
   * @param {number} transitionSeconds - Number of seconds for transition from current value.
   */
  setParameterValue(controlId, patchValue, transitionSeconds) {
    const currentValue = this._currentValues[controlId]
    const diff = patchValue - currentValue

    this._targetValues[controlId] = patchValue
    if (transitionSeconds === 0.0 || diff === 0.0) {
      this._currentValues[controlId] = patchValue
      this._increments[controlId] = 0.0
    } else {
      this._increments[controlId] = (diff / transitionSeconds) * this._sampleRate
      this._hasChanges = true
    }
  }

  /**
   * Read the next frame of parameter values into memory.
   * @param {number} idx - Current index being processed.
   * @returns {boolean} - True if any changes detected (if false then caller can optimise).
   */
  readForIndex(idx) {
    const hadChanges = this._hasChanges

    // If same index as previous call then return previous state.
    if (this._lastIndex === idx) {
      return hadChanges
    }

    // If we think ANY parameters are currently changing then process the changes.
    if (hadChanges) {
      const stillHasChanges = false

      for (let i = 0; i < this._increments.length; i++) {
        const increment = this._increments[i]
        if (increment !== 0.0) {
          // Parameter is changing ...
          const currentValue = this._currentValues[i]
          const targetValue = this._targetValues[i]
          const newValue = currentValue + increment
          if ((currentValue < targetValue) ^ (newValue < targetValue)) {
            // Parameter has NOT reached target.
            this._currentValues[i] = newValue
            stillHasChanges = true
          } else {
            // Parameter HAS reached target.
            this._increments[i] = 0.0
            this._currentValues[i] = targetValue
          }
        }
      }

      this._hasChanges = stillHasChanges
    }

    this._lastIndex = idx
    return hadChanges
  }

  /**
   * Get the current value for the specified parameter.
   * @param {number} controlId - Index for parameter.
   */
  getValueById(controlId) {
    return controlId >= 0 && controlId < this._currentValues.length ? this._currentValues[controlId] : 0.0
  }
}
