// one-liner usefull functions in js

// FillRange
// Returns array filled with given start and end positions
const fillRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_item, idx) => idx + start)

console.log(fillRange(20, 22)) // [20, 21, 22]
