const factorial = n => {
  console.log(`Factorial: ${n}`);
  if (n < 0) {
    return -1
  }
  if (n == 0) {
    return 1
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

const extraLongFactorials = (userInt) => {
  if (userInt === 0) return "1";

  if (userInt < 0) return "-1";

  if (!userInt) return "";

  var i, nextNumber, carret, result = userInt.toString().split("").reverse().map(Number);

  while (--userInt) {
    i = carret = 0;

    while ((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * userInt + carret;
      result[i - 1] = carret % 10;
      carret = parseInt(carret / 10);
    }
  }
  return result.reverse().join("");
}

console.log()
console.log(extraLongFactorials(25));