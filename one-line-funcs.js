// One-Line usefull functions in js
// Some refs: https://javascript.plainenglish.io/27-essential-one-line-javascript-functions-used-by-developers-daily-2cda9826700e

// 1. FillRange
// Returns array filled with given start and end positions
const fillRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_item, idx) => idx + start)

fillRange(20, 22) // [20, 21, 22]


// 2. randomNumberInRange
// Returns a random integer between given min and max
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNumberInRange(2, 10) // 4


// 3. rgbToHex
// Converting the RGB to hex code
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255); // #0033ff


