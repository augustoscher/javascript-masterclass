// Hacker Rank
// Between Two Sets

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return the number of integers that are between the sets
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const getTotalX = (a, b) => {
  const lowLimit = a[a.length-1];
  const highLimit = b[0];

  let consideredMultiples = [];

  //get multiples of the highest member in the first array till the lowest value in the second array
  for (let i = lowLimit; i <= highLimit; i += lowLimit){
    consideredMultiples.push(i);
  }
  
  //filter the array based on whether members of first array can go in it
  consideredMultiples = consideredMultiples.filter(multiple => {
    return a.reduce((shouldFilter, val) => {
      if (multiple % val !== 0){
        return false;
      } else if (shouldFilter){
        return true
      }
    }, true);
  });

  //filter the array based on whether its members can go in the second array
  consideredMultiples = consideredMultiples.filter(multiple => {
    return b.reduce((shouldFilter, val) => {
      if (val % multiple !== 0){
        return false;
      } else if (shouldFilter){
        return true
      }
    }, true);
  });

  return consideredMultiples.length;
};


// console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([2, 4], [16, 32, 96]));