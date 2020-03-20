const thisClass = "Classes";
console.log(`Class of ${thisClass}`);
//classes são um tipo especial de function que atuam como um template
//para a criação de objetos. É formada por constructor, prototype e métodos

class Shape {

  toString() {
    return `area: ${this.calculateArea()}`;
  }

};

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return Math.pow(this.side, 2);
  }

  toString() {
    return `side: ${this.side}, area: ${super.toString()}`;
  }

  static fromArea(area) {
    return new Square(Math.sqrt(area));
  }
};

console.log(typeof Square);
console.log(Square);

console.log();
console.log("=== instancia. métodos prototype e statics, constructor === ");

const s = new Square(4);
console.log(typeof s);
console.log(s);
console.log(s.toString());
console.log(s.calculateArea());

// console.log();
// const s2 = Square.fromArea(16);
// console.log(s2);
// console.log(s2.calculateArea());

console.log();
console.log("=== herança === ");

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  toString() {
    return `radius: ${this.radius}, area: ${super.toString()}`;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  static fromArea(area) {
    return new Circle(Math.sqrt(area / Math.PI));
  }

};

const circle = new Circle(10);
console.log(circle);
console.log(circle.toString());
console.log(circle.calculateArea());
console.log(Circle.fromArea(314.1592653589793));


console.log();
console.log("=== funções contrutoras x classes === ");

function Square2(side) {
  this.side = side;
};

Square2.prototype.toString = function () {
  return `side: ${this.side}`;
};

Square2.prototype.calculateArea = function () {
  return Math.pow(this.side, 2);
};

Square2.fromArea = function (area) {
  return new Square2(Math.sqrt(area));
};

const sq = new Square2(4);
console.log(typeof sq);
console.log(sq);
console.log(sq.toString());
console.log(sq.calculateArea());

console.log();
const sq2 = Square2.fromArea(16);
console.log(sq2);
console.log(sq2.toString());
console.log(sq2.calculateArea());
