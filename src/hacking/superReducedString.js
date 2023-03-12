// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

// Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return
let s = 'abba'
let i = 0
while (i < s.length - 1) {
  if (s[i] === s[i + 1]) {
    s = s.substring(0, i) + s.substring(i + 2)
    i = 0
  } else {
    i += 1
  }
}

if (s.length > 0) {
  console.log(s)
} else {
  console.log('Empty String')
}
