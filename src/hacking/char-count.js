

const secondApproach = str => {
  const arr = str.split(" ");
  return arr.map(item => item.length).reduce((p, n) => {
    return p + n
  }, 0);
}

const firstApproach = str => {
  const s = str.replace(/\s/g,'')
  return s.length
}

const s = "Fugiat sint elit id aliqua deserunt magna."
// console.log(s.length)
console.log(firstApproach(s));
console.log(secondApproach(s));