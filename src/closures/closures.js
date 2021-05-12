// Closures are functions inside other functions that have access to their lexical environments.

function generator(a) {
  return function(param) {
    // a variable is visible inside inner function because is the same(scope) lexical environment.
      return a + param;   // a and param are both available inside
  }
}
const add1 = generator(1); // set a = 1 and return inner function
const add5 = generator(5); // set a = 5 and return inner function
const add10 = generator(10); // set a = 10 and return inner function

add1(3); // returns 4 as a = 1 and param = 3
add5(3); // returns 8 as a = 5 and param = 3
add10(3); // returns 13 as a = 10 and param = 3

console.log(add10(50)) //60