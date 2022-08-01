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


// 6. New members of classes
// Public properties can be created via:


// a) Instance public fields
class InstPublicClass {
  // Instance public field
  instancePublicField = 0; // (A)

  constructor(value) {
    // We don’t need to mention .property elsewhere!
    this.property = value; // (B)
  }
}

const inst = new InstPublicClass('constrArg');
inst.instancePublicField = 'xunda'
console.log(inst) // { instancePublicField: 'xunda', property: 'constrArg' }


// b) Static public fields
const computedFieldKey = Symbol('computedFieldKey');
class StaticPublicFieldClass {
  static identifierFieldKey = 1;
  static 'quoted field key' = 2;
  static [computedFieldKey] = 3;
}
console.log(StaticPublicFieldClass.identifierFieldKey) // 1
console.log(StaticPublicFieldClass['quoted field key']) // 2
console.log(StaticPublicFieldClass[computedFieldKey]) // 3

// Private slots are new and can be created via:


// a) Instance private fields
class InstPrivateClass {
  #privateField1 = 'private field 1'; // (A)
  #privateField2; // (B) required!

  constructor(value) {
    this.#privateField2 = value; // (C)
  }

  // Private fields are not accessible outside the class body.
  checkPrivateValues() {
    console.log(this.#privateField1); // 'private field 1'
    console.log(this.#privateField2); // 'constructor argument'
  }
}

const privObj = new InstPrivateClass('constructor argument');
privObj.checkPrivateValues();
console.log(privObj) // {}
console.log("priv", Object.keys(privObj).length === 0) // priv, true


// b) Instance and static private fields
class InstPrivateClass {
  #privateField1 = 'private field 1'; // (A)
  #privateField2; // (B) required!

  static #staticPrivateField = 'hello';

  constructor(value) {
    this.#privateField2 = value; // (C)
  }

  // Private fields are not accessible outside the class body.
  checkPrivateValues() {
    console.log(this.#privateField1); // 'private field 1'
    console.log(this.#privateField2); // 'constructor argument'
  }

  static #twice() {
    return this.#staticPrivateField + " " + this.#staticPrivateField;
  }

  static getResultTwice() {
    return this.#twice()
  }
}

const inst = new InstPrivateClass('constructor argument');
inst.checkPrivateValues();

console.log("inst", Object.keys(inst).length === 0) // "inst", true
console.log(InstPrivateClass.getResultTwice()); // hello hello


// c) Private methods and accessors
class MyClass {
  #privateMethod() {}

  static check() {
    const inst = new MyClass();

    console.log(#privateMethod in inst) // true
    console.log(#privateMethod in MyClass.prototype) // false
    console.log(#privateMethod in MyClass) // false
  }
}

MyClass.check();


// d) Static initialisation blocks in classes. 
// For static data we have Static fields and Static Blocks that are executed when the class is created.
class Translator {
  static translations = {
    yes: 'ja',
    no: 'nein',
    maybe: 'vielleicht',
  };
  static englishWords = [];
  static germanWords = [];
  static { // (A)
    for (const [english, german] of Object.entries(this.translations)) {
      this.englishWords.push(english);
      this.germanWords.push(german);
    }
  }
}

console.log(Translator.englishWords) // ["yes", "no", "maybe"]
console.log(Translator.germanWords) // ["ja", "nein", "vielleicht"]


// e) Private slot checks
// This functionality helps us to check that the object has the given private slot in it.
class C1 {
  #priv() {}

  static check(obj) {
    return #priv in obj;
  }
}

console.log(C1.check(new C1())) // true