
class Car {
  name(name) {
    this.name = name;
    return this;
  }

  brand(brand) {
    this.brand = brand;
    return this;
  }

  year(year) {
    this.year = year;
    return this;
  }

  toString() {
    return `${this.brand} - ${this.name} - ${this.year}`
  }
};

const porsche = new Car().name('Cayenne').brand('Porsche').year(2021);
console.log(porsche.toString());
