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
