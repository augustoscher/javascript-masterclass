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
