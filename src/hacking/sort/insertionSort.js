let ar = [2, 234, 23, 2342, 234, 324]

console.log('before: ', ar);
// performance o(n²) onde n é o numero de elementos

let i = 0
while (i < ar.length) {
  let x = ar[i]
  let j = i - 1
  while(j >= 0 && ar[j] > x) {
    ar[j+1] = ar[j]
    j = j - 1
  }
  ar[j+1] = x
  i = i + 1
}

console.log('after: ', ar);