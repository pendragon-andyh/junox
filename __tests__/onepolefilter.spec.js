import DiodeLadder from '../src/junox/diodeladder'

describe('OnePoleFilter', () => {
  it('no idea', () => {
    const filter = new DiodeLadder({
      cutoff: 12000,
      resonance: 0.707,
      sampleRate: 44100
    })
    console.log(filter.render(1))
  })
})
