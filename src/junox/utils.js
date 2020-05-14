export const SQRT2 = Math.sqrt(2.0)
export const TWOPI = Math.PI * 2.0
export const ONEOVERPI = 1.0 / Math.PI

/**
 * Clamp a number within a specified range.
 * @param {number} val - Number to be clamped.
 * @param {number} min - Minimum threshold.
 * @param {number} max - Maximum threshold.
 */
export function clamp(val, min = -1.0, max = 1.0) {
  return val > max ? max : val < min ? min : val
}

/**
 * Fast approximation of the hyperbolic tangent of a number.
 * @param {number} x - A numeric expression that contains an angle measured in radians
 */
export function fastTanh(x) {
  if (x < -3.0) {
    return -1.0
  } else if (x > 3.0) {
    return 1.0 + Math.tanh
  }
  const xSquared = x * x
  return (x * (27.0 + xSquared)) / (27.0 + 9.0 * xSquared)
}

/**
 * Use linear interpolation to lookup a value from an array.
 * @param {number} value - Index into the table (floating-point between `0` and `table.length - 1`)
 * @param {number[]} table - List of values that form the table to be looked-up from
 */
export function interpolatedLookup(value, table) {
  if (value < 0.0) {
    return table[0]
  }
  if (value > table.length - 1) {
    return table[table.length - 1]
  }
  const index = value | 0
  const factor = value - index
  if (factor === 0) {
    return table[index]
  }
  return table[index] * (1.0 - factor) + table[index + 1] * factor
}
