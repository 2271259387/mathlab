
import pointwise from './pointwise'

/**
 * Pointwise not
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * not(1, 2)
 * // Equals 1 ! 2
 * not([1, 2], [2, 2])
 * // Equals [1 ! 2, 2 ! 2]
 * not([[2,1], [1,2]], [[2, 2], [2, 2]]))
 * // Equals [ [2 ! 2, 1 ! 2], [1 ! 2, 2 ! 2] ]
 */
export default function (m) {
  return pointwise(x => !x)(m)
}