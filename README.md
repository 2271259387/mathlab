# [mathlab](http://timqian.com/mathlab)

Lodash like math lab in javascript, focusing on matrix manipulation.

## Goals
- **Modulize**: only import the function you need.
- **Easy to use**: no extra concepts to grasp before using
- **Functional**: no side effact

## Install
```
$ npm install mathlab --save
```

## Sample usage
```js
/** import function */
// import { diag } from 'mathlab'      /** or */
// import diag from 'mathlab/lib/diag' /** or */
var diag = require('mathlab').diag

diag([1,2])
// [[1, 0], 
//  [0, 2]]
```

## Function list

- [x] [`abs()`](http://www.timqian.com/mathlab/function/index.html#static-function-abs)	Absolute value
- [x] [`acos()`](http://www.timqian.com/mathlab/function/index.html#static-function-acos)	Arc-cosine
- [ ] [`add()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise sum x+y
- [ ] [`addeq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise sum x+=y
- [ ] [`all()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	All the components of x are true
- [ ] [`and()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x && y
- [ ] [`andeq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x &= y
- [ ] [`any()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	One or more of the components of x are true
- [x] [`asin()`](http://www.timqian.com/mathlab/function/index.html#static-function-asin)	Arc-sine
- [x] [`atan()`](http://www.timqian.com/mathlab/function/index.html#static-function-atan)	Arc-tangeant
- [x] [`atan2()`](http://www.timqian.com/mathlab/function/index.html#static-function-atan2)	Arc-tangeant (two parameters)
- [ ] [`band()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x & y
- [ ] [`bench()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Benchmarking routine
- [ ] [`bnot()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Binary negation ~x
- [ ] [`bor()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Binary or x|y
- [ ] [`bxor()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Binary xor x^y
- [ ] [`ccsDim()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Dimensions of sparse matrix
- [ ] [`ccsDot()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Sparse matrix-matrix product
- [ ] [`ccsFull()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Convert sparse to full
- [ ] [`ccsGather()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Gather entries of sparse matrix
- [ ] [`ccsGetBlock()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Get rows/columns of sparse matrix
- [ ] [`ccsLUP()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Compute LUP decomposition of sparse matrix
- [ ] [`ccsLUPSolve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve Ax=b using LUP decomp
- [ ] [`ccsScatter()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Scatter entries of sparse matrix
- [ ] [`ccsSparse()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Convert from full to sparse
- [ ] [`ccsTSolve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve upper/lower triangular system
- [ ] [`ccs<op>()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Supported ops include: add/div/mul/geq/etc...
- [ ] [`cLU()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Coordinate matrix LU decomposition
- [ ] [`cLUsolve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Coordinate matrix LU solve
- [ ] [`cdelsq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Coordinate matrix Laplacian
- [ ] [`cdotMV()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Coordinate matrix-vector product
- [x] [`ceil()`](http://www.timqian.com/mathlab/function/index.html#static-function-ceil)	Pointwise Math.ceil(x)
- [ ] [`cgrid()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Coordinate grid for cdelsq
- [ ] [`clone()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Deep copy of Array
- [x] [`cos()`](http://www.timqian.com/mathlab/function/index.html#static-function-cos)	Pointwise Math.cos(x)
- [x] [`det()`](http://www.timqian.com/mathlab/function/index.html#static-function-det)	Determinant
- [x] [`diag()`](http://www.timqian.com/mathlab/function/index.html#static-function-diag)	Create diagonal matrix
- [x] [`dim()`](http://www.timqian.com/mathlab/function/index.html#static-function-dim)	Get Array dimensions
- [ ] [`div()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x/y
- [ ] [`diveq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x/=y
- [ ] [`dopri()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Numerical integration of ODE using Dormand-Prince RK method. Returns an object Dopri.
- [ ] [`Dopri.at()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Evaluate the ODE solution at a point
- [ ] [`dot()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Matrix-Matrix, Matrix-Vector and Vector-Matrix product
- [ ] [`eig()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Eigenvalues and eigenvectors
- [ ] [`epsilon()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	2.220446049250313e-16
- [ ] [`eq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise comparison x === y
- [x] [`exp()`](http://www.timqian.com/mathlab/function/index.html#static-function-exp)	Pointwise Math.exp(x)
- [x] [`floor()`](http://www.timqian.com/mathlab/function/index.html#static-function-floor)	Poinwise Math.floor(x)
- [ ] [`geq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>=y
- [ ] [`getBlock()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Extract a block from a matrix
- [x] [`getDiag()`](http://www.timqian.com/mathlab/function/index.html#static-function-getDiag)	Get the diagonal of a matrix
- [ ] [`gt()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>y
- [x] [`identity()`](http://www.timqian.com/mathlab/function/index.html#static-function-identity)	Identity matrix
- [ ] [`imageURL()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Encode a matrix as an image URL
- [x] [`inv()`](http://www.timqian.com/mathlab/function/index.html#static-function-inv)	Matrix inverse
- [ ] [`isFinite()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise isFinite(x)
- [ ] [`isNaN()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise isNaN(x)
- [ ] [`largeArray()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Don't prettyPrint Arrays larger than this
- [ ] [`leq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x<=y
- [x] [`linspace()`](http://www.timqian.com/mathlab/function/index.html#static-function-linspace)	Generate evenly spaced values
- [x] [`log()`](http://www.timqian.com/mathlab/function/index.html#static-function-log)	Pointwise Math.log(x)
- [ ] [`lshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x<<y
- [ ] [`lshifteq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x<<=y
- [ ] [`lt()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x<y
- [ ] [`LU()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Dense LU decomposition
- [ ] [`LUsolve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Dense LU solve
- [ ] [`mapreduce()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Make a pointwise map-reduce function
- [ ] [`mod()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x%y
- [ ] [`modeq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x%=y
- [ ] [`mul()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x*y
- [ ] [`neg()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise -x
- [ ] [`neq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x!==y
- [ ] [`norm2()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Square root of the sum of the square of the entries of x
- [ ] [`norm2Squared()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Sum of squares of entries of x
- [ ] [`norminf()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Largest modulus entry of x
- [ ] [`not()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise logical negation !x
- [ ] [`or()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise logical or x||y
- [ ] [`oreq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x|=y
- [ ] [`parseCSV()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Parse a CSV file into an Array
- [ ] [`parseDate()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise parseDate(x)
- [ ] [`parseFloat()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise parseFloat(x)
- [ ] [`pointwise()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create a pointwise function
- [x] [`pow()`](http://www.timqian.com/mathlab/function/index.html#static-function-pow)	Pointwise Math.pow(x)
- [ ] [`precision()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Number of digits to prettyPrint
- [ ] [`prettyPrint()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pretty-prints x
- [ ] [`random()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create an Array of random numbers
- [ ] [`rep()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create an Array by duplicating values
- [ ] [`round()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise Math.round(x)
- [ ] [`rrshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>>>y
- [ ] [`rrshifteq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>>>=y
- [ ] [`rshift()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>>y
- [ ] [`rshifteq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x>>=y
- [ ] [`same()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	x and y are entrywise identical
- [ ] [`seedrandom()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	The seedrandom module
- [ ] [`setBlock()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set a block of a matrix
- [ ] [`sin()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise Math.sin(x)
- [ ] [`solve()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve Ax=b
- [ ] [`solveLP()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve a linear programming problem
- [ ] [`solveQP()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Solve a quadratic programming problem
- [ ] [`spline()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create a Spline object
- [ ] [`Spline.at()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Evaluate the Spline at a point
- [ ] [`Spline.diff()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Differentiate the Spline
- [ ] [`Spline.roots()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Find all the roots of the Spline
- [x] [`sqrt()`](http://www.timqian.com/mathlab/function/index.html#static-function-sqrt)	Pointwise Math.sqrt(x)
- [ ] [`sub()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x-y
- [ ] [`subeq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x-=y
- [ ] [`sum()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Sum all the entries of x
- [ ] [`svd()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Singular value decomposition
- [ ] [`t()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Create a tensor type T (may be complex-valued)
- [ ] [`T.<numericfun>()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Supported <numericfun> are: abs, add, cos, diag, div, dot, exp, getBlock, getDiag, inv, log, mul, neg, norm2, setBlock, sin, sub, transpose
- [ ] [`T.conj()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise complex conjugate
- [ ] [`T.fft()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Fast Fourier transform
- [ ] [`T.get()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Read an entry
- [ ] [`T.getRow()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Get a row
- [ ] [`T.getRows()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Get a range of rows
- [ ] [`T.ifft()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Inverse FFT
- [ ] [`T.reciprocal()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise 1/z
- [ ] [`T.set()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set an entry
- [ ] [`T.setRow()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set a row
- [ ] [`T.setRows()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Set a range of rows
- [ ] [`T.transjugate()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	The conjugate-transpose of a matrix
- [x] [`tan()`](http://www.timqian.com/mathlab/function/index.html#static-function-tan)	Pointwise Math.tan(x)
- [ ] [`tensor()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Tensor product ret[i][j] = x[i]*y[j]
- [ ] [`toCSV()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Make a CSV file
- [x] [`transpose()`](http://www.timqian.com/mathlab/function/index.html#static-function-transpose)	Matrix transpose
- [ ] [`uncmin()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Unconstrained optimization
- [ ] [`version()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Version string for the numeric library
- [ ] [`xor()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x^y
- [ ] [`xoreq()`](http://www.timqian.com/mathlab/function/index.html#static-function-)	Pointwise x^=y
