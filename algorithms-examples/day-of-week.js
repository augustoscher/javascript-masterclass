// Given:
// -Starting day
// -Number of days to sum considering starting day
// -Discover in what day in the week it will be, by (starting day + number of days)
function solution(S, K) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const quotient = Math.ceil(K / days.length);

  let result = []
  for (let i = 0; i < quotient ; i++) {
     result = result.concat(days)
  }

  const idx = days.findIndex(item => item === S) + K;
  return result[idx];
}

console.log(solution('Wed', 500));