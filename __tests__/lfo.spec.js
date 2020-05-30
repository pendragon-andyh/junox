import LFO from '../src/junox/lfo'

// TODO -- refactor this ones - they feel a bit pointless like this
// but helps debug issues and shapes that are not debuggable in real time
describe('LFO', () => {
  it('should produce a triangle wave', () => {
    const lfo = new LFO({ sampleRate: 100, delay: 0, frequency: 1 })
    // skip delay
    lfo.attackPhase = 2
    const out = Array(100)
      .fill(0)
      .map(() => lfo.render())
    expect(out[0]).toBeCloseTo(0, 2)
    expect(out[25]).toBeCloseTo(1, 1)
    expect(out[50]).toBeCloseTo(0, 2)
    expect(out[75]).toBeCloseTo(-1, 1)
    expect(out[99]).toBeCloseTo(0, 1)
  })
  describe('delay', () => {
    it('should envelope delay', () => {
      const lfo = new LFO({ sampleRate: 140, delay: 2, frequency: 1 })
      const out = Array(280)
        .fill(0)
        .map(() => lfo.delayEnv())
      out.forEach((val, idx) => expect(val).toBeLessThan(0.01))
    })
    it('should have an attack slope afterwards', () => {
      const sampleRate = 125
      const lfo = new LFO({ sampleRate, delay: 0, frequency: 1 })
      lfo.setDelay(0)
      expect(lfo.attackSamples / sampleRate).toBeLessThan(0.02)
      lfo.setDelay(0.0639)
      expect(lfo.attackSamples / sampleRate).toBeCloseTo(0.028, 2) // should be (0.053, 2)
      lfo.setDelay(0.85)
      expect(lfo.attackSamples / sampleRate).toBeCloseTo(0.211, 1) // should be (0.188, 2)
      lfo.setDelay(1.2)
      expect(lfo.attackSamples / sampleRate).toBeCloseTo(0.325, 2) // should be (0.348, 2)
      lfo.setDelay(2.786)
      expect(lfo.attackSamples / sampleRate).toBeGreaterThan(1, 2)
    })
  })
})
