console.log(`this`);
console.log();

const rectangle = {
  x: 10,
  y: 2,
  calculateArea: function () {
    return this.x * this.y;
  }
};

const rectangle2 = {
  x: 10,
  y: 2,
  calculateArea() { //es6
    return this.x * this.y;
  }
};

const calculateArea = function () {
  return this.x * this.y;
}

const rectangle3 = {
  x: 11,
  y: 3,
  calculateArea
};

console.log(rectangle.calculateArea());
console.log(rectangle2.calculateArea());
console.log(rectangle3.calculateArea());