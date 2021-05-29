// https://blog.bitsrc.io/keep-it-simple-with-the-strategy-design-pattern-c36a14c985e9
// When to Use the Strategy Pattern
// 1. When you need to use several algorithms with different variations. You need create a concrete class to implement your algorithm (which can consist of a or some functions).
// 2. When there are conditional statements around several related algorithms.
// 3. When most of your classes have related behaviours.

class HeapSort {
  sort(array) {
    console.log("HeapSort algorithm")
    // implementation here
  }
}
// linear search sorting algorithm implementing its alogrithm in the `sort` method
class LinearSearch {
  sort(array) {
    console.log("LinearSearch algorithm")
      // implementation here
  }
}
class SortingProgram {
  constructor(array) {
    this.array = array
  }

  runSort(sortingStrategy) {
      return sortingStrategy.sort(this.array)
  }
}

// instantiate the `SortingProgram` with an array of numbers
const sortProgram = new SortingProgram([9,2,5,3,8,4,1,8,0,3])
// sort using heap sort
sortProgram.runSort(new HeapSort())
// sort using linear search
sortProgram.runSort(new LinearSearch())