export function noteToFrequency (note) {
  return Math.pow(2, (note - 81) / 12) * 440
}

export function lerp (a, b, t) {
  return (1 - t) * a + t * b
}
