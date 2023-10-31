const arr = [1, [2, [3, [4, 5]]], 6, [[7,10,110], 13],14];

function flatten(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6, 7, 10, 110, 13, 14]