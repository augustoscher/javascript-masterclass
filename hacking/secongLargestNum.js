const getSecondLargest = nums => {
  //sorting descrescent
  let sorted = nums.sort(function(a, b) {
    return b - a;
  });
  //eliminate duplicadet values and get by the secon index, is the second largest value
  sorted = Array.from(new Set(sorted));
  return sorted[1];
};


console.log(getSecondLargest([2,3,6,6,5]))