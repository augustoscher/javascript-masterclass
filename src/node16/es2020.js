// https://www.freecodecamp.org/news/javascript-new-features-es2020/

// #3: Nullish Coalescing
// Check if a variable is nullish – that is if it is either undefined or null,
// like when it's okay for a variable to have an empty string, or even a false value.
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