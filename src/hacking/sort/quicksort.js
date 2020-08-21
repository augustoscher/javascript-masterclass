
function quickSortF(arr) {
  // Base case
  if (!arr.length) return []

  // This is a ES6 addition, it uses destructuring to pull out the 
  // first value and the rest, similar to how other functional languages
  // such as Haskell, Scala do it. You can then use the variables as 
  // normal below
  const [head, ...tail] = arr,
        // here we are using the arrow functions, and taking full 
        // advantage of the concise syntax, the verbose version of
        // function(e) => { return e < head } is the same thing
        // so we end up with the partition part, two arrays,
        // one smaller than the pivot and one bigger than the 
        // pivot, in this case is the head variable
        left = tail.filter( e => e < head),
        right = tail.filter( e => e >= head)

     // this is the conquer bit of divide-and-conquer
     // recursively run through each left and right array
     // until we hit the if condition which returns an empty
     // array. These results are all connected using concat,
     // and we get our sorted array.
     return quickSortF(left).concat(head, quickSortF(right))           

}

const q7 = quickSortF([11,8,14,3,6,2,7]) 
//[2, 3, 6, 7, 8, 11, 14]
const q8 =  quickSortF([11,8,14,3,6,2,1, 7])
//[1, 2, 3, 6, 7, 8, 11, 14]
const q9 = quickSortF([16,11,9,7,6,5,3, 2])
//[2, 3, 5, 6, 7, 9, 11, 16]

console.log(q7,q8,q9)