
import pointwise from './pointwise'
import Sparse from './Sparse'

const ceil = pointwise(Math.ceil)

function cceil(x) {
  throw new Error('mathlab.ceil: no ceil for complex number')
}

function sceil(x) {
  return new Sparse({
    col: x.col.slice(), // copy the array
    row: x.row.slice(),
    val: ceil(x.val),
  })
}

/**
 * Pointwise Math.ceil(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ceil(1)
 * // returns Math.ceil(1)
 * ceil([1, 2])
 * // returns [Math.ceil(1), Math.ceil(2)]
 * ceil([[1,2],[1,3]])
 * // returns [ [Math.ceil(1), Math.ceil(2)], [Math.ceil(1), Math.ceil(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return cceil(m);
    case 'Sparse':
      return sceil(m);
    default:
      return ceil(m);
  }
}
