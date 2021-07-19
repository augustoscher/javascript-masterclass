// https://medium.com/the-node-js-collection/node-js-16-available-now-7f5099a97e70


// 1. V8 upgraded to V8 9.0
// ECMAScript RegExp Match Indices, which provide the start and end indices of the captured string.
// The indices array is available via the .indices property on match objects when the regular expression has the /d flag.
const regexpMatchIndices = () => {
  const matchObj = /(Java)(Script)/d.exec('JavaScript'); 
  console.log("Indices: ", matchObj.indices);
  
  console.log("Match: ", matchObj.indices[0]);
  console.log("First Captured Group: ", matchObj.indices[1]);
  console.log("Second Captured Group: ", matchObj.indices[2]);
}

const main = async () => {
  console.log("===== Node 16 =====\n")
  regexpMatchIndices()
}

main();
