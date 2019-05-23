console.log("=== factory function === ")

const person = {
  name: "Linus Torvus",
  city: "Helsinki",
  year: 1969,
  getAge() {
    return (new Date()).getFullYear() - this.year
  }
};

const person2 = {
  name: "Bill Gates",
  city: "Seattle",
  year: 1955,
  getAge() {
    return (new Date()).getFullYear() - this.year
  }
};

console.log(person);
console.log(person.getAge());
console.log();
console.log(person2);
console.log(person2.getAge());

console.log();
console.log("=== prototype factory function === ")

const personPrototype = {
  getAge() {
    return (new Date()).getFullYear() - this.year
  }
}

const createPerson = function (name, city, year) {
  const person = {
    name,
    city,
    year
  };
  Object.setPrototypeOf(person, personPrototype)
  return person;
};

const person3 = createPerson("Linus Torvald", "Helsinki", 1969);
const person4 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person3);
console.log(person3.getAge());
console.log(person3.__proto__);
console.log();
console.log(person4);
console.log(person4.getAge());
console.log(person4.__proto__);
