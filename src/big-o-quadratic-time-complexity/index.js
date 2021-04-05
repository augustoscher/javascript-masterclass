//Big O Quadratic Time Complexity

// Sum all consecutives integers of an array:
const nums = [1,2,3,4,5,6,7,8,9,10];

// O(n) - Rate of growth scales in direct proportion to the input.
const sumHarder = arr => {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
   }
   return sum;
}
 
const result = sumHarder(nums);
console.log('Sum: ', result);

// O(1)	constant	fast
// Regardless of the size of the input, our algorithm will perform the same, or, a constant number of operations.
// Formula: n ( n + 1 ) / 2 - works only with consecutives integers
const sumSmarter = arr => arr.length * (arr.length + 1) / 2;
console.log('Sum: ', sumSmarter(nums));

