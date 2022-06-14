// =========== CONST 

const test = {
  name: 'Augusto',
  age: 30,
}

Object.freeze(test)
test.name = "Test" // doesn't have any effect
console.log(test.name) // Augusto