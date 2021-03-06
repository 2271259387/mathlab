/**
 * Create diagonal matrix from vector
 * 
 * @param {Array} d
 * @returns {Array}
 * @example 
 * 
 * diag([1, 2])
 * // [[1, 0], 
 * //  [0, 2]]
 */
export default function diag (d) {
  var i, i1, j, n = d.length, A = Array(n), Ai
  for (i = n - 1; i >= 0; i--) {
    Ai = Array(n)
    i1 = i + 2
    for (j = n - 1; j >= i1; j -= 2) {
      Ai[j] = 0
      Ai[j - 1] = 0
    }
    if (j > i) { Ai[j] = 0; }
    Ai[i] = d[i]
    for (j = i - 1; j >= 1; j -= 2) {
      Ai[j] = 0
      Ai[j - 1] = 0
    }
    if (j === 0) { Ai[0] = 0; }
    A[i] = Ai
  }
  return A
}
