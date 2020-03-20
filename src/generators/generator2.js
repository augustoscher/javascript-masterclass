const thisClass = "Generators2";
console.log(`Class of ${thisClass}`);
// isso:

// function createIterable(...array) {
//   return {
//     *[Symbol.iterator]() {
//       let i = 0;
//       return {
//         next() {
//           if (i < array.length) {
//             return {
//               value: array[i++],
//               done: false
//             }
//           } else {
//             return {
//               value: undefined,
//               done: true
//             }
//           }
//         }
//       }
//     }
//   }
// }

//é igual a isso:
function createIterable(...array) {
  return {
    *[Symbol.iterator]() {
      let i = 0;
      while (i < array.length) {
        yield array[i++];
      }
    }
  }
}

const lang = createIterable("Fortran", "Lisp", "Cobol");
for (let l of lang) {
  console.log(l);
}