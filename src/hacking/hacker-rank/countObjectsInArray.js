//Return a count of the total number of objects 'o' satisfying o.x == o.y.
const getCount = (objects) => {
  const res = objects.filter(item => item.x == item.y);
  return res.length;
}

const main = () => {
  const o = [
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 3, y: 1},
    {x: 4, y: 1},
    {x: 5, y: 1},
    {x: 6, y: 6},
  ]
  console.log(getCount(o))
}

main()