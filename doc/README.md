# Mathlab

## Table of Contents

1. [Complex numbers](#complex-numbers)
1. [Sparse matrix](#sparse-matrix)
1. [Math Object functions](#math-object-functions)
1. [Arithmetic operations](#arithmetic-operations)
1. [Utility functions](#utility-functions)
1. [Linear algebra](#linear-algebra)
1. [Fast Fourier Transforms](#fast-fourier-transforms)
1. [Coordinate matrices]
1. [Solving PDEs]
1. [Solving ODEs]
1. [Cubic splines]
1. [Quadratic Programming]
1. [Unconstrained optimization]
1. [Linear programming]
1. [Seedrandom]


## Complex numbers

> Complex

Besides normal Array presenting vectors and matrix,
mathlab also support Complex number/vectors/matrix and Sparse matrix manipulation.

Complex number/vectors/matrix
	
example:
```js
import { Complex, abs, add } from 'mathlab'

// definition
const z = new Complex(3, 4) // {re:3, im:4}

// operation
abs(z) // {re:5, im:0}
add(z, new Complex(1, 2)) // {re:4, im:6}

// complex vector and matrix
const z1 = new Complex([3,4], [4,3])
abs(z1) //{re:5, im:5}
```

## Sparse matrix

> Sparse

example:
```js
import {Sparse, abs} from 'mathlab'

// transform normal matrix to sparse
const s = new Sparse([[-1,-2,0],
											[0,-3,0],
											[-2,0,-5]])
// {
// 	col: [0,2,4,5],
// 	row: [0,2,0,1,2],
// 	val: [-1,-2,-2,-3,-5]
// }


// manipulation
const sAbs = abs(s)
// {
// 	col: [0,2,4,5],
// 	row: [0,2,0,1,2],
// 	val: [1,2,2,3,5]
// }

// transform sparse matrix to full matrix
sAbs.toFull()
// [[-1,-2,0],
//  [0,-3,0],
//  [-2,0,-5]]
```

## Math Object functions

> abs | acos | asin | atan | ceil | cos | exp | floor | log | round | sin | sqrt | tan

The *Math* object functions have been adapted to work on Arrays , Complex and Sparse Objects

#### Sample usage

**abs**: Pointwise [Math.abs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) [*(source)*](https://github.com/timqian/mathlab/blob/master/src/abs.js)
- params: `Number | Array | Complex | Sparse`
- returns: `Number | Array | Complex | Sparse`
- example:
	```js
	import {abs, Complex, Sparse} from './mathlab'

	abs(-1)  // 1
	abs([-1, 2])  // [1, 2]
	abs(new Complex(3, 4))  // {x: 5, y: 0}
	abs(new Sparse([[1,2,0],[0,0,-1],[1,0,0]])) // {row: col: val:}
	```

## Arithmetic operations

> add | sub | mul | div | neg | isFinite | isNaN

The standard arithmetic operations have been vectorized:
```js
import { add, Complex } from 'mathlab'

add(1, 2) // 3
add([1,2], 2,2) // [3,4]
add(new Complex([1,2], [2,2]), new Complex([1,1],[1,1]))
// {
// 	re: [2, 3],
// 	im: [3,3]
// }
```

## Utility functions

> dim | same | rep | diag | identity | random | linspace

- dim: returns the dimensions of an Array
	```js
	dim(1) // []
	dim([1,2]) // [2]
	dim(new Complex([1,2], [1,2])) // [2]
	dim([[1,2],[2,2],[3,3]]) // [3,2]
	```


## Linear algebra

> dot | solve | det | inv | norm2 | tensor | eig

- dot: returns dot product
	```js
	dot([1, 2], 4) // [4, 8]
	dot([[1, 1], [2, 1]], [1, 2]) // [3, 4]
	dot(new Complex([1, 2], [2, 2]), new Complex([2,2], [2,2])) // -2
	```

## Fast Fourier Transforms

> fft | ifft

```js

```

## Function list
   |         |         |              |           |            |           |                |
---|     --- | ------ |     ---------- | --------- | ----------- | --------- | ----------- |
[abs](#abs)   |    bnot   |     diag   |     floor   |     leq   |       negtranspose   |  pow   |         setBlock   |
acos   |   bor   |      dim   |      geq   |       linspace   |  neq   |           random   |      sin   |
add   |    bxor   |     div   |      getBlock   |  log   |       norm2   |         reciprocal   |  sqrt   |
and   |    ceil   |     dot   |      getDiag   |   lshift   |    norm2Squared   |  rep   |         sub   |
asin   |   clone   |    eig   |      gt   |        lt   |        not   |           round   |       tan   |
atan2   |  Complex   |  epsilon   |  identity   |  mod   |       or   |            rrshift   |     tensor   |
atan   |   cos   |      eq   |       index   |     mul   |       pointwise2   |    rshift   |      transpose   |
band   |   det   |      exp   |      inv   |       neg   |       pointwise   |     same   |

