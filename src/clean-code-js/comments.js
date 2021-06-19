//1. Only comment things that have business logic complexity.
// Comments are an apology, not a requirement. Good code mostly documents itself.

// BAD
function hashIt(data) {
  // The hash
  let hash = 0;

  // Length of string
  const length = data.length;

  // Loop through every character in data
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = data.charCodeAt(i);
    // Make the hash
    hash = (hash << 5) - hash + char;
    // Convert to 32-bit integer
    hash &= hash;
  }
}

// GOOD
function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;
  }
}


// 2. Don't leave commented out code in your codebase
// Version control exists for a reason. Leave old code in your history.

// BAD
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();

// GOOD
doStuff();


// 3. Don't have journal comments
// Remember, use version control! There's no need for dead code, commented code, and especially journal comments. Use git log to get history!

// BAD
/**
 * 2016-12-20: Removed monads, didn't understand them (RM)
 * 2016-10-01: Improved using special monads (JP)
 * 2016-02-03: Removed type-checking (LI)
 * 2015-03-14: Added combine with type-checking (JR)
 */
 function combine(a, b) {
  return a + b;
}

// GOOD
function combine(a, b) {
  return a + b;
}


// 4. Avoid positional markers
// They usually just add noise. Let the functions and variable names along with the
// proper indentation and formatting give the visual structure to your code.

// BAD
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: "foo",
  nav: "bar"
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
  // ...
};

// GOOD
$scope.model = {
  menu: "foo",
  nav: "bar"
};

const actions = function() {
  // ...
};
