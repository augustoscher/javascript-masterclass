const pickingNumbers = a => {
  a.sort();
  let len = a.length;
  let max = 0;

  for (let i = len - 1; i >= 0; i--) {
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (a[i] - a[j] < 2) {
        count++;
      }
    }
    max = count > max ? count : max;
  }

  return max;
};

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
