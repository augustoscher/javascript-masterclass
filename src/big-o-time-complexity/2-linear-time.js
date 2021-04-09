// O(N)—Linear Time:

// Linear Time Complexity describes an algorithm or program who’s 
// complexity will grow in direct proportion to the size of the input data.
// As a rule of thumb, it is best to try and keep your functions running 
// below or within this range of time-complexity, but obviously it won’t always be possible.

const numberRange = (array) => {
  for (let i = 1; i < array.length; i++) {
    console.log(array[i]);
  }
}; //This will have a linear time look-up since the function is
   //looking at a every index in the array once.

// In this example, the look-up time is directly related to the size of our input
// because we will be going through each item within the array. In other words, the larger
// the input, the greater the amount of time it takes to perform the function. Of course,
// if the array only had 1 index (i.e. array.length === 1), then the function would have a
// constant time look-up.

