//Big O Quadratic Time Complexity

// Sum all consecutives integers of an array:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// O(n) - Rate of growth scales in direct proportion to the input.
const sumHarder = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.time('sumHarder')
let result = sumHarder(nums)
console.timeEnd('sumHarder')
console.log('Sum: ', result)

// O(1)	constant	fast
// Regardless of the size of the input, our algorithm will perform the same, or, a constant number of operations.
// Formula: n ( n + 1 ) / 2 - works only with consecutives integers
const sumSmarter = (arr) => (arr.length * (arr.length + 1)) / 2
console.time('sumSmarter')
result = sumSmarter(nums)
console.timeEnd('sumSmarter')
console.log('Sum: ', result)

// ? complexity of this?
// it has better performance than sumSmarter
const sumTest = (arr) => {
  return arr.reduce((acc, value) => {
    return (acc += value)
  }, 0)
}

console.time('sumTest')
result = sumTest(nums)
console.timeEnd('sumTest')
console.log('Sum: ', result)
