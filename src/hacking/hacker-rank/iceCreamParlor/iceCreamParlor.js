// HackerRank
// Ice Cream Parlor
const iceCreamParlor = (m, arr) => {
  const values = arr.map((item, idx) => {
    return {
      index: idx, value: item 
    }
  })

  const res = []
  for (let i = 0; i < values.length; i++) {
    // Is not quadratic Big O complexity because we initialize second loop with i+1
    for (let j = i+1; j < values.length; j++) {
      if (values[i].value + values[j].value == m) {
        res.push(values[i].index + 1)
        res.push(values[j].index + 1)
      }
    }
  }

  return res
}


const main = () => {
  let money = 4
  let costs = [1, 4, 5, 3, 2]
  let res = iceCreamParlor(money, costs)
  console.log(res)

  money = 4
  costs = [2, 2 ,4, 3]
  res = iceCreamParlor(money, costs)
  console.log(res)
}

main()
