// One-Line usefull functions in js

// 1. FillRange
// Returns array filled with given start and end positions
const fillRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_item, idx) => idx + start)

    console.log(fillRange(20, 22)) // [20, 21, 22]


// 2. randomNumberInRange
// Returns a random integer between given min and max
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumberInRange(2, 10)) // 4
