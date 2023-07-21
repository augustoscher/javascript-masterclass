const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false; // is divisible by another number
  }
  return num > 1;
}

// console.log(isPrime(37))


// return all primes lower then given number
const isPrimeArray = (num) => {
  const array = new Array(num).fill(true)

  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
   if (array[i]) {
    let j = Math.pow(i, 2)
    while(j <= num) {
      array[j] = false
      j += i
    }
   }
  }

  const indixes = array
    .map((value, index) => value ? index : -1)
    .filter((value) => value > 2)

  return indixes
}

console.log(isPrimeArray(38)) //[3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
