// Complete the birthday function below.
//s: squares = [2, 2, 1, 3, 2, 4, 4]
//d: day = 4
//m: month = 2

const sumArray = a => {
  return a.reduce((prev, current) => {
    return (prev += current);
  }, 0);
}

const birthday = (s, d, m) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {

    //get sub array from idx to idx + n elements
    const arr = s.slice(i, i + m);

    //sum the sub array and compares with d property
    const sum = sumArray(arr);
    if (sum == d && arr.length == m) {
      result++;
    }
  }
  return result;
};

module.exports = birthday;

console.log(birthday([2, 2, 1, 3, 2, 4, 4], 4, 2));
console.log(birthday([4], 4, 1));
