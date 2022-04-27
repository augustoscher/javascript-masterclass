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


// 4. randomHex
// Generating randomHex color
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
randomHex() // #a3c040


// 5. dayDiff
// Find the number of gap days between two dates
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDiff(new Date("2020-10-21"), new Date("2021-10-22")) // 366


// 6. isWeekDay
// Check if it's a week day
const isWeekday = (date) => date.getDay() % 6 !== 0;
isWeekday(new Date(2021, 0, 11)); //true (is monday)


// 7. stripHtml
// remove html tags
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
stripHtml('<h1>Hello <strong>World</strong>!!!</h1>'); // Hello World!!!


// 8. reverseStr
const reverseStr = (str) => str.split("").reverse().join("")
reverseStr('rehcs otsugua');


// 9. shuffleArray
// Shuffle array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
shuffleArray([1, 2, 3, 4]); // [4, 3, 1, 2]


