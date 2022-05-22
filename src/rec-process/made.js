
class NumberGenerator {

  constructor(numbers) {
    this.numbersArray = numbers.split(", ");
  }

  mode() {
    const mapping = {}

    this.numbersArray.forEach(item => {
      mapping[item] = mapping[item] ? mapping[item] + 1 : 1
    })

    const arr = Object.keys(mapping).map(item => ({
      "key": item,
      "value": mapping[item],
    }));

    const max = arr.reduce((elem, next) => {
      return elem.value > next.value ? elem : next
    }, 0);

    return max.key
  }
}

const myNumberGenerator1 = new NumberGenerator("8, 1, 2, 5, 6, 8, 9, 5, 6, 17, 22, 55, 5")
const myNumberGenerator2 = new NumberGenerator("1, 4, 10, 11, 10, 12, 16, 18, 22, 24, 122")
const myNumberGenerator3 = new NumberGenerator("1, 500, 400, 500, 12, 1, 1, 122, 122, 122, 122")
const myNumberGenerator4 = new NumberGenerator("1, 50, 50, 50, 1")

console.log(myNumberGenerator1.mode()) // 5
console.log(myNumberGenerator2.mode()) // 10
console.log(myNumberGenerator3.mode()) // 10
console.log(myNumberGenerator4.mode()) // 50