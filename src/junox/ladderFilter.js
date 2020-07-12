/**
 * Implementation of Moog-style "Virtual Analog" ladder filter (based on Pirkle's Synth book).
 */
export class LadderFilter {
  constructor(sampleRate) {
    this.reset()
    this.nyquistLimit = sampleRate * 0.5
    this.piOverSampleRate = Math.PI / sampleRate
  }

  /**
   * Reset the filter - ready for the next note.
   */
  reset() {
    this.z1 = 0.0
    this.z2 = 0.0
    this.z3 = 0.0
    this.z4 = 0.0
  }

  /**
   * Calculate the "cutoffFactor" for the specifed frequency.
   * @param {number} fc - Cutoff frequency (Hz).
   */
  calcCutoffFactor(fc) {
    if (fc > this.nyquistLimit) {
      fc = this.nyquistLimit
    }

    return Math.tan(fc * this.piOverSampleRate)
  }

  /**
   * Trigger the filter (useful for percussive sounds).
   * @param {number} initialExcite - Initial amount of excitement for the feedback resonance loop.
   */
  trigger(initialExcite) {
    this.z4 += initialExcite
  }

  /**
   * Apply filtering to the input sigmal.
   * If saturation or passband-compensation are required then pre-apply to input (Valimaki).
   * Consider applying a peak-limiter to the output (to prevent blow-up).
   * @param {number} input - Input signal (normally in range -1.0 to +1.0).
   * @param {number} cutoffFactor - Result of prewarping the cutoff-frequency.
   * @param {number} resonance - Resonance amount (range: 0.0 to 1.0).
   * @param {number} mode - Filter mode (see ladderFilterModes).
   */
  process(input, cutoffFactor, resonance, mode = ladderFilterModes.LPF4) {
    // // If cutoff frequency gets too close to the Nyquist-limit then progressively bypass the filter.
    // let bypassFactor = 0.0
    // if (cutoffFactor > 1.0) {
    //   bypassFactor = (cutoffFactor - 1.0) / 1000.0
    //   if (bypassFactor > 1.0) {
    //     bypassFactor = 1.0
    //   }
    //   cutoffFactor = 1.0
    // }

    const oneOverOnePlusg = 1.0 / (1.0 + cutoffFactor)

    // Feedforward coefficient for VA one-pole filters.
    const alpha = cutoffFactor * oneOverOnePlusg

    // Feedback coefficients for VA one-pole filters.
    const beta4 = oneOverOnePlusg
    const beta3 = beta4 * alpha
    const beta2 = beta3 * alpha
    const beta1 = beta2 * alpha

    // Mix the feedback with the input.
    const feedback = beta1 * this.z1 + beta2 * this.z2 + beta3 * this.z3 + beta4 * this.z4
    const k = 4.0 * resonance
    const xin = (input - k * feedback) / (1.0 + k * alpha * alpha * alpha * alpha)

    // Apply pole 1.
    const lpf1In = (xin - this.z1) * alpha
    const lpf1Out = lpf1In + this.z1
    this.z1 = lpf1In + lpf1Out

    // Apply pole 2.
    const lpf2In = (lpf1Out - this.z2) * alpha
    const lpf2Out = lpf2In + this.z2
    this.z2 = lpf2In + lpf2Out

    // Apply pole 3.
    const lpf3In = (lpf2Out - this.z3) * alpha
    const lpf3Out = lpf3In + this.z3
    this.z3 = lpf3In + lpf3Out

    // Apply pole 4.
    const lpf4In = (lpf3Out - this.z4) * alpha
    const lpf4Out = lpf4In + this.z4
    this.z4 = lpf4In + lpf4Out

    // Implement the specified filter-mode.
    let output = mode[4] * lpf4Out + mode[3] * lpf3Out + mode[2] * lpf2Out + mode[1] * lpf1Out + mode[0] * xin

    // if (bypassFactor) {
    //   output = input * bypassFactor + output * (1.0 - bypassFactor)
    // }

    return output
  }
}

/**
 * Set of available filter-modes.
 * (table 7.1 "The A, B, C, D and E values for the various filters" from Pirkle's Synth book)
 */
export const ladderFilterModes = {
  LPF2: Float64Array.from([0.0, 0.0, 1.0, 0.0, 0.0]),
  LPF4: Float64Array.from([0.0, 0.0, 0.0, 0.0, 1.0]),
  BPF2: Float64Array.from([0.0, 2.0, -2.0, 0.0, 0.0]),
  BPF2: Float64Array.from([0.0, 0.0, 4.0, -8.0, 4.0]),
  HPF2: Float64Array.from([1.0, -2.0, 1.0, 0.0, 0.0]),
  HPF4: Float64Array.from([1.0, -4.0, 6.0, -4.0, 1.0]),
}
ladderFilterModes.all = [
  ladderFilterModes.LPF2,
  ladderFilterModes.LPF4,
  ladderFilterModes.BPF2,
  ladderFilterModes.BPF4,
  ladderFilterModes.HPF2,
  ladderFilterModes.HPF4,
]
