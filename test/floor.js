
import assert from 'assert'
import should from 'should'
import { floor } from '../lib'

describe('floor', () => {
  it('', () => {
    floor(1).should.equal(Math.floor(1))
    floor([1, 2]).should.deepEqual([Math.floor(1), Math.floor(2)])
    floor([[1,2],[1,3]]).should.deepEqual([ [Math.floor(1), Math.floor(2)], [Math.floor(1), Math.floor(3)] ])
  })
})
