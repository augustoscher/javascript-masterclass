// ====================NORMALSORT==============================
console.log(' = LOOPSORT = ');
let arr = [3, 7, 4, 9, 5, 2, 6, 1];
// let arr = [5, 6, 7, 8, 91, 100, 101, 200]
console.log('!sorted: ', arr);

let l1 = 0;
let l2 = 0;

for(let i = 0; i < arr.length; i++){
  l1 = l1 + 1;

  for(let j = i; j < arr.length; j++) { //j sempre começa de i
    if (arr[i] > arr[j]) { //3 > 2 entra
      let temp = arr[i]; //bkp do valor que é maior e será substituido pelo valor menor, no caso 3
      arr[i] = arr[j]; //joga o valor 2 na posição do valor 3
      arr[j] = temp; //joga o valor do bkp (3) na antiga posicao do valor 2
    }

    l2 = l2 + 1;
  }
}

console.log('sorted: ', arr);
console.log('loops 1: ', l1);
console.log('loops 2: ', l2);
console.log();

// ====================INSERTSORT==============================

console.log('= INSERTSORT = ');
arr = [3, 7, 4, 9, 5, 2, 6, 1];
// arr = [5, 6, 7, 8, 91, 100, 101, 200]
l1 = 0;
l2 = 0;

console.log('!sorted: ', arr);
let i = 0
while (i < arr.length) {
  let x = arr[i]
  let j = i - 1
  while(j >= 0 && arr[j] > x) { //não faz nenhum loop se o array já está ordenado
    arr[j+1] = arr[j]
    j = j - 1
    l2 = l2 + 1
  }
  arr[j+1] = x
  i = i + 1

  l1 = l1 + 1
}

console.log('sorted: ', arr);
console.log('loops 1: ', l1);
console.log('loops 2: ', l2);
