import { interpolatedLookup } from './utils.js'

export default (t) => {
  t.test('interpolatedLookup tests', () => {
    const table = new Float64Array([1, 2, 4, 8])

    t.test('interpolatedLookup boundary tests', () => {
      t.equal(interpolatedLookup(-1, table), 1, 'When input is negative then return first element')
      t.equal(interpolatedLookup(10, table), 8, 'When input is > table.length then return last element')
      t.equal(interpolatedLookup(3, table), 8, 'When input is table.length-1 then return last element')
    })

    t.test('interpolatedLookup interpolation tests', () => {
      t.equal(interpolatedLookup(0.75, table), 1.75, 'When input is between 2 elements then interpolate (test 1)')
      t.equal(interpolatedLookup(2.5, table), 6, 'When input is between 2 elements then interpolate (test 2)')
      t.equal(interpolatedLookup(2, table), 4, 'When input is between 2 elements then interpolate (test 3)')
    })
  })
}
