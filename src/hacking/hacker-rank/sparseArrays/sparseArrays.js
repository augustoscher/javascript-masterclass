// Hacker Rabk
// Sparse Arrays
// Return the size of mathing string from each query
const getMatchedStringsSize = (query, strings) => {
  const res = strings.filter(str => str === query)
  return res.length
}

const matchingStrings = (strings, queries) => {
  return queries.map(query => getMatchedStringsSize(query, strings))
}

console.log(matchingStrings(['def', 'de', 'fgh'], ['de', '1mn', 'fgh']))