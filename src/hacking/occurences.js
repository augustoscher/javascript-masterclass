isOnlyDigit = (str) => /^\d+$/g.test(str)

console.log(isOnlyDigit('45z3234'))
console.log(isOnlyDigit('z45z3234'))
console.log(isOnlyDigit('45z3234z'))
console.log(isOnlyDigit('1'))
console.log()

const printOcurrences = (m) => 
  Object.keys(m).forEach((k) => console.log(`${k}: ${m[k]}`))

const getOcurrences = (string) => {
  const str = string
    .split('')
    .map((char) => char.trim())
    .filter(Boolean)

  const occurences = str.reduce((acc, value) => {
    acc[value] = acc[value] ? acc[value] + 1 : 1
    return acc
  }, {})

  return occurences
}

printOcurrences(getOcurrences("o gaaaaato roeu a roupa do rei de roma"))
console.log()

getFirstNonRepetingChar = (str) => {
  const occ = getOcurrences(str);
  const arr = Object.keys(occ).map((k) => ({ k, v: occ[k] })).filter(({ v }) => v === 1)
  console.log(arr.length > 0 ? arr[0].k : 'just repeated chars')
}

getFirstNonRepetingChar('nina')
getFirstNonRepetingChar('hardcorecoder')
getFirstNonRepetingChar('levelup')
getFirstNonRepetingChar('lele')
