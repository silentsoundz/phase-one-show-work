const {add, chunk, reverseArray}=  require('./index.js')


console.assert(add(10, 5) === 15, 'expected add(10, 5) to return 15');

console.assert(add(4) ===  NaN)

console.assert(chunk([1, 2, 1, 2], 2) === [[1,2], [1,2]], 'expected chunk([1,2,1,2],2) to return [[1,2], [1,2]]')