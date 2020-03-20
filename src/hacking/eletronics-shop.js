//b = 60
//keyboards = [40, 50, 60]
//drives = [5, 8, 12]
// find and print the amount of money Monica will spend.
//result shoul be 58
const getMoneySpent = (keyboards, drives, b) => {
  let maxSpent = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j];
      if (sum <= b && sum > maxSpent) {
        maxSpent = sum;
      }
    }
  }
  return maxSpent;
};

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([5], [4], 5));
