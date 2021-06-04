import { interpolatedLookup } from '../src/junox/utils.mjs'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

const table = new Float64Array([1, 2, 4, 8])

test('interpolatedLookup Boundary tests', () => {
  assert.is(interpolatedLookup(-1, table), 1, 'When input is negative then return first element')
  assert.is(interpolatedLookup(10, table), 8, 'When input is > table.length then return last element')
  assert.is(interpolatedLookup(3, table), 8, 'When input is table.length-1 then return last element')
})

test('interpolatedLookup Interpolation tests', () => {
  assert.is(interpolatedLookup(0.75, table), 1.75, 'When input is between 2 elements then interpolate (test 1)')
  assert.is(interpolatedLookup(2.5, table), 6, 'When input is between 2 elements then interpolate (test 2)')
  assert.is(interpolatedLookup(2, table), 4, 'When input is between 2 elements then interpolate (test 3)')
})

test.run()