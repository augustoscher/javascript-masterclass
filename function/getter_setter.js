console.log(`getter and setter `);

const rectangle = {
  x: 10,
  y: 2,

  get area() {
    return this.calculateArea();
  },

  calculateArea() { //es6
    return this.x * this.y;
  }
};

console.log(rectangle.area);
console.log();

const rectangle2 = {
  set x(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log("Invalid value for x.");
    }
  },

  set y(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log("Invalid value for y.");
    }
  },

  get area() {
    return this.calculateArea();
  },

  calculateArea() { //es6
    if (this._x > 0 && this._y > 0) {
      return this._x * this._y;
    }
    return 0;
  }
};

rectangle2.x = 2;
rectangle2.y = 0;
console.log(rectangle2.area);


console.log();
console.log(`getter and setter através de define property `);
const rectangle3 = {};

Object.defineProperty(rectangle3, "x", {
  set(x) {
    this._x = x;
  }
});

Object.defineProperty(rectangle3, "y", {
  set(y) {
    this._y = y;
  }
});

Object.defineProperty(rectangle3, "area", {
  get() {
    return this._x * this._y;
  }
});

rectangle3.x = 2;
rectangle3.y = 8;
console.log(rectangle3.area);
