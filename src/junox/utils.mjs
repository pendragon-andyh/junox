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
    return 1.0
  }
  const xSquared = x * x
  return (x * (27.0 + xSquared)) / (27.0 + 9.0 * xSquared)
}

/**
 * Use linear interpolation to lookup a value from an array.
 * @param {number} value - Input value (range is 0..[length of array]).
 * @param {Float64Array} table - The table to be looked-up from.
 */
export function interpolatedLookup(value, table) {
  const index = value | 0
  const indexNext = index + 1
  const factor = value - index

  if (index < 0) {
    return table[0]
  }

  if (indexNext >= table.length) {
    return table[table.length - 1]
  }

  return table[index] * (1.0 - factor) + table[indexNext] * factor
}
