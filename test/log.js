
import assert from 'assert'
import should from 'should'
import { log, Complex, Sparse } from '../lib'

describe('log', () => {
  it('num & arr', () => {
    log(1).should.equal(Math.log(1))
    log([1, 2]).should.deepEqual([Math.log(1), Math.log(2)])
    log([[1,2],[1,3]]).should.deepEqual([ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ])
  })

 it('Complex', () => {
    log(new Complex(1)).re.should.approximately(0, 0.01)
    // {x: [ 0.8047, 1.04], y: [ 1.107, 0.7854]}
    log(new Complex([1, 2], [2, 2])).re[0].should.approximately(0.804, 0.01)
    log(new Complex([1, 2], [2, 2])).im[1].should.approximately(0.785, 0.01)
  })

 it('Sparse', () =>{
    log(new Sparse([[1,2],[1,3]])).toFull()
      .should.deepEqual([ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ])
  })
})
