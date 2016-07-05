
import pointwise from './pointwise'

/**
 * Pointwise Math.cos(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * cos(1)
 * // Equals Math.cos(1)
 * cos([1, 2])
 * // Equals [Math.cos(1), Math.cos(2)]
 * cos([[1,2],[1,3]])
 * // Equals [ [Math.cos(1), Math.cos(2)], [Math.cos(1), Math.cos(3)] ]
 */
export default function (m) {
  return pointwise(Math.cos)(m)
}
