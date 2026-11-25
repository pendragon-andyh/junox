import { interpolatedLookup } from '../src/junox/utils.mjs'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const table = new Float64Array([1, 2, 4, 8])

test('interpolatedLookup Boundary tests', () => {
  assert.equal(interpolatedLookup(-1, table), 1, 'When input is negative then return first element')
  assert.equal(interpolatedLookup(10, table), 8, 'When input is > table.length then return last element')
  assert.equal(interpolatedLookup(3, table), 8, 'When input is table.length-1 then return last element')
})

test('interpolatedLookup Interpolation tests', () => {
  assert.equal(interpolatedLookup(0.75, table), 1.75, 'When input is between 2 elements then interpolate (test 1)')
  assert.equal(interpolatedLookup(2.5, table), 6, 'When input is between 2 elements then interpolate (test 2)')
  assert.equal(interpolatedLookup(2, table), 4, 'When input is between 2 elements then interpolate (test 3)')
})