// https://dev.to/jagroop2001/lets-learn-generators-in-javascript-4566?context=digest
function* myFirstGenerator() {
  yield "Hello 🌟";
  yield "Generators are awesome!";
  yield "Goodbye 👋";
}

// Let's use it!
const gen = myFirstGenerator();

console.log(gen.next()); // { value: 'Hello 🌟', done: false }
console.log(gen.next()); // { value: 'Generators are awesome!', done: false }
console.log(gen.next()); // { value: 'Goodbye 👋', done: false }
console.log(gen.next()); // { value: undefined, done: true }