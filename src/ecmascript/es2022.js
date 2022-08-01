// https://dev.to/jasmin/whats-new-in-es2022-1de6
// Features of ES2022 - Node 18

// 1. Method .at() of indexable values.
// Datatypes supporting this function.

// String
// Array
// All Typed Array classes: Uint8Array etc.

[1, 2, 3, 4, 5].at(3) // returns 4
[1, 2, 3, 4, 5].at(-2) // returns 4

// -----------------------------------

// 2. RegExp match indices
// Adding a flag /d to a regular expression produces match objects that records the start and end of each group capture.

// There are different ways to match indices
// a) Match indices for numbered group
const regexp = /(a+)(b+)/d

let matchObj = regexp.exec('aaaabb');
console.log(matchObj);

// Due to the regular expression flag /d, matchObj also has a property .indices 
// that records for each numbered group where it was captured in the input string
console.log(matchObj.indices); // [ [ 0, 6 ], [ 0, 4 ], [ 4, 6 ], groups: undefined ]

// b) Match indices for named groups
matchObj = /(?<as>a+)(?<bs>b+)/d.exec('aaaabb');
console.log(matchObj.indices.groups); // { as: [ 0, 4 ], bs: [ 4, 6 ] }

// -----------------------------------

// 3. Object.hasOwn(obj, propKey)
// It is a safe way to check that propKey is the own property of obj object.
// It is similar to Object.prototype.hasOwnProperty but it supports all object types.
const proto = {
  protoProp: 'protoProp',
};

const obj = {
  __proto__: proto,
  objProp: 'objProp',
};

console.log('protoProp' in obj); // true
console.log(Object.hasOwn(obj, 'protoProp')) // false
console.log(Object.hasOwn(proto, 'protoProp')); // true
console.log(Object.hasOwn(proto, 'protoProp')) // true

// -----------------------------------

// 4. error.cause
// Error and it's subclasses now let us specify the reason behind the error.
// This is useful in deeply nested function where we have chained error blocks to quickly find the error.

function readFiles(filePaths) {
  return filePaths.map(
    (filePath) => {
      try {
        // ···
      } catch (error) {
        throw new Error(
          `While processing ${filePath}`,
          {cause: error} // this is new
        );
      }
  });
}

// -----------------------------------

// 5. Top-level await modules
// We can now use await at the top levels of modules and don’t have to enter async functions or methods anymore.

// - Loading modules dynamically
const messages = await import(`./messages-${language}.mjs`);

// - Using a fallback if module loading fails
let lodash;
try {
  lodash = await import('https://primary.example.com/lodash');
} catch {
  lodash = await import('https://secondary.example.com/lodash');
}

// - Using whichever resource loads fastest
const resource = await Promise.any([
  fetch('http://example.com/first.txt')
    .then(response => response.text()),
  fetch('http://example.com/second.txt')
    .then(response => response.text()),
]);

