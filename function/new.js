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

console.log();
console.log("=== instanceof === ");


//diferença entre typeof e instanceof
//typeof revela o tipo de dado de uma variável.
const _instanceof = function (obj, fn) {
  if (obj === fn.prototype) {
    return true;
  }
  if (obj === null) {
    return false;
  }
  return _instanceof(obj.__proto__, fn);
}
const date = new Date();
console.log(date instanceof Date);//true
console.log(date instanceof Object);//true
console.log(date instanceof Array); //false
console.log();
console.log(_instanceof(date, Date));//true
console.log(_instanceof(date, Object));//true
console.log(_instanceof(date, Array)); //false