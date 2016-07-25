import pointwise from './pointwise'

const band = pointwise((x, y) => x & y);

function cband(x, y) {
  throw new Error('mathlab.band: no band for complex number')
}

function sband(x, y) {
  throw new Error('mathlab.band: band for sparse matrix not exist')
}

/**
 * Pointwise band
 * 
 * @export
 * @param {Number|Array} m1
 * @param {Number|Array} m2
 * @returns {Number|Array}
 * @example 
 * 
 * band(1, 2)
 * // returns 1 & 2
 * band([1, 2], [2, 2])
 * // returns [1 & 2, 2 & 2]
 * band([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // returns [ [2 & 2, 1 & 2], [1 & 2, 2 & 2] ]
 */
export default function (m1, m2) {
  switch (m1.constructor.name) {
    case 'Complex':
      return cband(m1, m2);
    case 'Sparse':
      return sband(m1, m2);
    default:
      return band(m1, m2);
  }
}