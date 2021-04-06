// HackerRank
// Save the Prisoner!

// params:
// int n: the number of prisoners
// int m: the number of sweets
// int s: the chair number to begin passing out sweets from

// return
// int: the chair number of the prisoner to warn
const saveThePrisoner = (prisioners, sweets, starting) => {
  // First: rest of division is the prisioner that received the last cookie when start in 1.
  // 19 % 7 = 5

  // Second:
  // res + (starting -1) to shift when starts in other index

  const rest = sweets % prisioners
  if (rest == 0 && starting == 1) {
    return prisioners
  }

  const lastPrisioner = (rest + starting - 1) % prisioners
  if (lastPrisioner == 0) {
    return prisioners
  }

  return lastPrisioner
}

console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); //6
console.log(saveThePrisoner(987208066, 992914997, 534359308)) //540066238
