/**
 * Implementation of a ring-buffer. This is used for delay-based effects.
 */
export class RingBuffer {
  /**
   * @param {number} maxBufferSize - Maximum number of samples that the signal can be delayed-by (calculate using `delaySeconds * sampleRate`).
   */
  constructor(maxBufferSize) {
    this.buffer = new Float32Array(maxBufferSize)
    this.writeIndex = 0
    this.maxBufferSize = maxBufferSize
  }

  /**
   *
   * @param {number} index
   */
  ringBufferIndex(index) {
    if (index < 0) {
      return index + this.maxBufferSize
    }
    if (index >= this.maxBufferSize) {
      return index - this.maxBufferSize
    }
    return index
  }

  /**
   * Read a sample from the ring-buffer.
   * Delay period = `readOffset / sampleRate`
   * @param (number) readOffset - The number of samples between the read and the write position
   */
  readSample(readOffset) {
    const readIndex = this.ringBufferIndex(this.writeIndex - readOffset)
    const indexA = Math.floor(readIndex)
    const fractional = readIndex - indexA
    const indexB = this.ringBufferIndex(indexA + 1)
    return this.buffer[indexA] * (1 - fractional) + this.buffer[indexB] * fractional
  }

  /**
   * Write a new sample into the ring-buffer.
   * @param {number} input
   */
  writeSample(input) {
    this.buffer[this.writeIndex] = input
    this.writeIndex = (this.writeIndex + 1) % this.maxBufferSize
  }

  /**
   * Reset the delay-line's contents (only used when the instrument is silent).
   */
  reset() {
    this.buffer.fill(0.0)
  }
}
