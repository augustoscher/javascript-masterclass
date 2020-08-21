let i = 0

function quickSortF(arr) {
  // Base case
  if (!arr.length) return []
  console.log('times: ', ++i)

  const [head, ...tail] = arr, left = tail.filter( e => e < head), right = tail.filter( e => e >= head)

  console.log('head: ', head);

  return quickSortF(left).concat(head, quickSortF(right))        
}

const q7 = quickSortF([11,8,14,3,6,2,7]) 
//[2, 3, 6, 7, 8, 11, 14]
const q8 =  quickSortF([11,8,14,3,6,2,1, 7])
//[1, 2, 3, 6, 7, 8, 11, 14]
const q9 = quickSortF([16,11,9,7,6,5,3, 2])
//[2, 3, 5, 6, 7, 9, 11, 16]

console.log(q7,q8,q9)