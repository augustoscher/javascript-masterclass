
//returns reversed num
//num: 120 -> r = 21
//num: 54 -> 45
const reversedNum = num =>
  parseFloat(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(num);

//returns array filled with given range
//start: 20
//end: 23
//r = [20, 21, 21, 23]
const fillRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
};

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  const sequence = fillRange(i, j);

  const diffs = sequence.map(item => {
    const reversed = reversedNum(item);
    return Math.abs(item - reversed);
  });

  let days = 0;
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] % k == 0) {
      days++;
    }
  }

  return days;
}

console.log(beautifulDays(20, 23, 6));
