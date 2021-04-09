// O(1) — Constant Time:

// Constant Time Complexity describes an algorithm that will
// always execute in the same time (or space) regardless of the size 
// of the input data set. In JavaScript, this can be as simple as
//  accessing a specific index within an array:

// It doesn’t matter whether the array has 5 or 500 indices, looking up a
// specific location of the array would take the same amount of time, therefore
// the function has a constant time look-up.
const array = [1, 2, 3, 4, 5];
array[0] // This is a constant time look-up

const removeLastElements = (array, elements = 1) => {
  
  while (elements > 0) {
    array.pop();
  }
}; //This will also have a constant time look-up since the function 
   //is only looking at a specific reference point within the array.