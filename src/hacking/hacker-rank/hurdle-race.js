const hurdleRace = (k, height) => {
  const max = Math.max(...height);
  if (k > max) {
    return 0;
  }
  return max - k;
};

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
