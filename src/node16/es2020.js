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


// # 3: Nullish Coalescing
// Check if a variable is nullish – that is if it is either undefined or null,
// like when it's okay for a variable to have an empty string, or even a false value.
console.log(`\n= 3. BIGINT = `)
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