export const addNumbers = (...numbers) => {
  return numbers.reduce((previous, current) => {
    return previous + current
  }, 0);
}
