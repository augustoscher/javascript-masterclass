// HackerRank
// Jumping on the Clouds: Revisited
const jumpingOnClouds = (c, k) => {
  const clouds = c.map((item, idx) => {
    return {
      index: idx, value: item 
    }
  })

  let energy = 100;
  let jumpIndex = 0

  do {

    if (clouds[jumpIndex].value == 1) {
      energy = energy - 3
    } else {
      energy = energy - 1
    }

    jumpIndex = jumpIndex + k
    if (jumpIndex >= c.length) jumpIndex = jumpIndex - c.length

  } while (clouds[jumpIndex].index != 0)

  return energy
}

const main = () => {
  let c = [0, 0, 1, 0, 0, 1, 1, 0];
  let k = 2

  let energy = jumpingOnClouds(c, k)
  console.log(energy);

  c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0]
  k = 3

  energy = jumpingOnClouds(c, k)
  console.log(energy);
}

main()
