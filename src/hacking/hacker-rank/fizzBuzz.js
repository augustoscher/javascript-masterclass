
//returns array filled with given range
//start: 20
//end: 23
//r = [20, 21, 21, 23]
const fillRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
};

const isMultipleOf3 = (value) => value % 3 === 0;
const isMultipleOf5 = (value) => value % 5 === 0;

const fizzBuzz = (i) => {
  const sequence = fillRange(1, i);

  sequence.forEach(number => {
    if (isMultipleOf3(number) && isMultipleOf5(number)) {
      console.log("FizzBuzz");
    } else if (isMultipleOf3(number)) {
      console.log("Fizz");
    } else if (isMultipleOf5(number)) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  })
};

fizzBuzz(15)