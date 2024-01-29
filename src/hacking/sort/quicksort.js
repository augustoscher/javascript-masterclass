// https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

function quickSortF(arr) {
  // Base case
  if (!arr.length) return []

  // This is a ES6 addition, it uses destructuring to pull out the 
  // first value and the rest, similar to how other functional languages
  // such as Haskell, Scala do it. You can then use the variables as 
  // normal below
  const [head, ...tail] = arr,

  // here we are using the arrow functions, and taking full 
  // advantage of the concise syntax, the verbose version of
  // function(e) => { return e < head } is the same thing
  // so we end up with the partition part, two arrays,
  // one smaller than the pivot and one bigger than the 
  // pivot, in this case is the head variable
  left = tail.filter(e => e < head),
  right = tail.filter(e => e >= head)

  // this is the conquer bit of divide-and-conquer
  // recursively run through each left and right array
  // until we hit the if condition which returns an empty
  // array. These results are all connected using concat,
  // and we get our sorted array.
  return quickSortF(left).concat(head, quickSortF(right))
}

console.time('quickSort');
console.log(quickSort([3, 7, 4, 9, 5, 2, 6, 1]));
console.timeEnd('quickSort');

console.time('quickSortF');
console.log(quickSortF([3, 7, 4, 9, 5, 2, 6, 1]));
console.timeEnd('quickSortF');

console.time('sort'); //better
console.log([3, 7, 4, 9, 5, 2, 6, 1].sort());
console.timeEnd('sort');


// const q7 = quickSortF([11,8,14,3,6,2,7]) 
// //[2, 3, 6, 7, 8, 11, 14]
// const q8 =  quickSortF([11,8,14,3,6,2,1, 7])
// //[1, 2, 3, 6, 7, 8, 11, 14]
// const q9 = quickSortF([16,11,9,7,6,5,3, 2])
// //[2, 3, 5, 6, 7, 9, 11, 16]

// console.log(q7,q8,q9)