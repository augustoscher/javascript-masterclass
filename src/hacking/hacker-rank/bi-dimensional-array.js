const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const positions = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: 0 },
  { x: 1, y: 0 }
];

const mountMatrix = arr => {
  for (let i in arr) {
    const {x, y} = positions[i];
    m[x][y] = arr[i]
  }
  m.forEach(arr => console.log(arr))
}

const rotate = times => {
  const nums = [1, 2, 3, 6, 9, 8, 7, 4];
  let orderedNums = [];

  for (let i = 0; i < times; i++) {
    orderedNums = [] //limpar os numeros rotacionados a cada exec
    nums.unshift(nums.pop()); //pega o ultimo numero, remove com o pop, coloca ele em primeiro do array com o unshift
    for (let j = 0; j <= 7; j++) {
      orderedNums.push(nums[j]);
    }
  }

  mountMatrix(orderedNums);
};

rotate(2);
