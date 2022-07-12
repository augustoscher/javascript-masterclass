// https://www.patterns.dev/posts/singleton-pattern/


// Since objects are passed by reference, both redButton.js and blueButton.js are importing a reference to the same counter object.
// Modifying the value of count in either of these files will modify the value on the counter, which is visible in both files.

let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };

