// https://www.freecodecamp.org/news/javascript-new-features-es2020/
// https://medium.com/@analuizabastos/o-que-tem-de-novo-no-es2020-es11-a960bcb72351

// ECMASCRIPT 2020 (ES11)

// # 1: BigInt
// BigInt, one of the most anticipated features in JavaScript, is finally here.
// It actually allows developers to have much greater integer representation in their JS code for data processing for data handling
// At the moment the maximum number you can store as an integer in JavaScript is pow(2, 53) - 1 . But BigInt actually allows you to go even beyond that.  
console.log("= 1. BIGINT = ")
let oldNumber = Number.MAX_SAFE_INTEGER;
++oldNumber; //9007199254740992
++oldNumber; //still 9007199254740992
++oldNumber; //still 9007199254740992
console.log(oldNumber); //9007199254740992

//BigInt definition
let newNumber = 9007199254740992n;
++newNumber;
++newNumber;
++newNumber;
console.log(newNumber); //9007199254740995n


// # 2: Dynamic Import
// Dynamic imports in JavaScript give you the option to import JS files dynamically as modules in your application natively.
// This is just like how you do it with Webpack and Babel at the moment.
// This feature will help you ship on-demand-request code, better known as code splitting, without the overhead of webpack or other module bundlers.
// You can also conditionally load code in an if-else block if you like.
// The good thing is that you actually import a module, and so it never pollutes the global namespace.
console.log(`\n= 2. DYNAMIC IMPORT = `)
if (1==1) {
  const module = await import('./numbers.js')
  const res = module.addNumbers(2, 3 ,5);
  console.log(res);
}


// # 3: Nullish Coalescing
// Check if a variable is nullish – that is if it is either undefined or null,
// like when it's okay for a variable to have an empty string, or even a false value.
console.log(`\n= 3. NULISH COALESCING OPERATOR (??) = `)
console.log(undefined ?? 'some truthy value');
console.log(null ?? 'some truthy value');
console.log(false ?? 'some truthy value');
console.log(NaN ?? 'some truthy value');
console.log();

// compare to ||
console.log(undefined || 'some truthy value');
console.log(null || 'some truthy value');
console.log(false || 'some truthy value');
console.log(NaN || 'some truthy value');


// # 4: Optional Chaining
// Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not.
// If it exists, great! If not, undefined will be returned.
// This not only works on object properties, but also on function calls and arrays. Super convenient! Here's an example:
console.log(`\n= 4. OPTIONAL CHAINING OPERATOR (?) = `)
const person = { name: 'Augusto', stats: { weigth: 90, age: 30 }}
console.log(person?.stats?.age)
console.log(person?.stats?.heigth) //not present will return undefined


// # 5: Promise.allSettled
// The Promise.allSettled method accepts an array of Promises and only resolves when all of them are settled – either resolved or rejected.
// This was not available natively before, even though some close implementations like race and all were available.
// This brings "Just run all promises – I don't care about the results" natively to JavaScript.
console.log(`\n= 5. Promise.allSettled = `)
const myPromisesArray = [
  Promise.resolve(100),
  Promise.reject(null),
  Promise.reject(new Error('Oh no')),
];
await Promise.allSettled(myPromisesArray).then(res => {
  console.log('All promises settled ', res)
});


// # 6: String#matchAll
// matchAll is a new method added to the String prototype which is related to Regular Expressions.
// This returns an iterator which returns all matched groups one after another.
// Let's have a look at a quick example:
console.log(`\n= 6. String#matchAll = `)
const regexp = /[a-c]/g;
const str = 'abc';
const iterator = str.matchAll(regexp);
Array.from(iterator, result => console.log(result)); //prints all results


// # 7: globalThis
// If you wrote some cross-platform JS code which could run on Node, in the browser environment,
// and also inside web-workers, you'd have a hard time getting hold of the global object.

// This is because it is window for browsers, global for Node, and self for web workers.
// If there are more runtimes, the global object will be different for them as well.

// So you would have had to have your own implementation of detecting runtime and then using the correct global – that is, until now.
// ES2020 brings us globalThis which always refers to the global object, no matter where you are executing your code:
console.log(`\n= 7. globalThis = `)
console.log(globalThis.setTimeout === global.setTimeout)