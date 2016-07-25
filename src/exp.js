
import pointwise from './pointwise'
import cos from './cos'
import sin from './sin'
import mul from './mul'
import Complex from './Complex'
import Sparse from './Sparse'

const exp = pointwise(Math.exp)

function cexp(x) {
  var ex = exp(x.x);
  if (x.y) {
    return new Complex(mul(cos(x.y), ex), mul(sin(x.y), ex));
  }
  return new Complex(ex);
}

function sexp(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: exp(x.val),
  })
}

/**
 * Pointwise Math.exp(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * exp(1)
 * // returns Math.exp(1)
 * exp([1, 2])
 * // returns [Math.exp(1), Math.exp(2)]
 * exp([[1,2],[1,3]])
 * // returns [ [Math.exp(1), Math.exp(2)], [Math.exp(1), Math.exp(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cexp(m);
    case 'Sparse':
      return sexp(m);
    default:
      return exp(m);
  }
}
