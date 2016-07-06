
import pointwise from './pointwise'

/**
 * Pointwise Math.log(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * log(1)
 * // Equals Math.log(1)
 * log([1, 2])
 * // Equals [Math.log(1), Math.log(2)]
 * log([[1,2],[1,3]])
 * // Equals [ [Math.log(1), Math.log(2)], [Math.log(1), Math.log(3)] ]
 */
export default function (m) {
  return pointwise(Math.log)(m)
}