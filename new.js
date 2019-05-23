console.log("=== new === ");

const _new = function (fn, ...params) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, params);
  return obj;
};

const Person = function (name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

//set de prototype atribute of the function object
Person.prototype.getAge = function () {
  return (new Date()).getFullYear() - this.year
}

const p1 = new Person("Linus Torvald", "Helsinki", 1969);
const p2 = new Person("Bill Gates", "Seattle", 1955);

const p3 = _new(Person, "John", "CL", 1991);

console.log(p1);
console.log(p1.getAge());
console.log();
console.log(p2);
console.log(p2.getAge());
console.log(p1.__proto__ === p2.__proto__);

//novo conceito do construtor new.
console.log();
console.log(p3);
console.log(p3.getAge());
console.log(p3.__proto__ === p2.__proto__);