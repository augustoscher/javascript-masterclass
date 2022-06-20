// ECMAScript 2015 (ES6)
// https://github.com/willianjusten/es6-curso
// http://es6-features.org/#Constants


// =========== CONST 

const test = {
  name: 'Augusto',
  age: 30,
}

Object.freeze(test)
test.name = "Test" // doesn't have any effect
console.log(test.name) // Augusto