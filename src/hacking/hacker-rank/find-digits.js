
const convertNumberToArray = n =>
  n
    .toString()
    .split("")
    .map(item => parseInt(item));

// Complete the findDigits function below.
function findDigits(n) {
  const array = convertNumberToArray(n);
  let c = 0;

  for (const i in array) {
    if (array[i] == 0) {
      continue;
    }
    if (n % array[i] == 0) {
      c += 1;
    }
  }
  return c;
}

console.log(findDigits(12));
console.log(findDigits(1012));
