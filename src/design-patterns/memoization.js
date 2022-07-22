
function memoize(targetFunction) {
  let value = null;

  return function () {
    if (value) {
      console.log(`cached: ${value}`)
      return value
    }

    value = targetFunction();
    console.log(`doing the job: ${value}`)

    return value;
  }
}

const sum = () =>  5 + 5;

const memoizedSum = memoize(sum)

memoizedSum()
memoizedSum()
memoizedSum()
memoizedSum()
memoizedSum()
