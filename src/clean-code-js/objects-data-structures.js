//========================================
// 1. Use getters and setters
// Using getters and setters to access data on objects could be better than simply looking for a property on an object.
// "Why?" you might ask. Well, here's an unorganized list of reasons why:

// When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
// Makes adding validation simple when doing a set.
// Encapsulates the internal representation.
// Easy to add logging and error handling when getting and setting.
// You can lazy load your object's properties, let's say getting it from a server.

// BAD
function makeBankAccount() {
  // ...
  return {
    balance: 0
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;

// GOOD
function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    getBalance,
    setBalance
  };
}

const account = makeBankAccount();
account.setBalance(100);


//========================================
// 2. Make objects have private members
// This can be accomplished through closures (for ES5 and below).

// BAD
const Employee = function(name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined


// GOOD
function makeEmployee(name) {
  return {
    getName() {
      return name;
    }
  };
}

const employee = makeEmployee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe


//========================================
// 3. Prefer ES2015/ES6 classes over ES5 plain functions
// It's very difficult to get readable class inheritance, construction, and method definitions for classical ES5 classes.
// If you need inheritance (and be aware that you might not), then prefer ES2015/ES6 classes. However, prefer small functions 
// over classes until you find yourself needing larger and more complex objects.

// BAD
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error("Instantiate Animal with `new`");
  }

  this.age = age;
};

Animal.prototype.move = function move() {};

const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error("Instantiate Mammal with `new`");
  }

  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error("Instantiate Human with `new`");
  }

  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};

// GOOD
class Animal {
  constructor(age) {
    this.age = age;
  }

  move() {
  }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() {
  }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }

  speak() {
  }
}

//========================================
// 4. Use method chaining
// This pattern is very useful in JavaScript and you see it in many libraries such as jQuery and Lodash.
// It allows your code to be expressive, and less verbose. For that reason, I say, use method chaining and take a look at how clean your code will be.
// In your class functions, simply return this at the end of every function, and you can chain further class methods onto it.

// BAD
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car("Ford", "F-150", "red");
car.setColor("pink");
car.save();

// GOOD
class Car {

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car("Ford", "F-150", "red").setColor("pink").save();


//========================================
// 5. Prefer composition over inheritance
// As stated famously in Design Patterns by the Gang of Four, you should prefer composition over inheritance where you can.
// There are lots of good reasons to use inheritance and lots of good reasons to use composition.
// The main point for this maxim is that if your mind instinctively goes for inheritance, try to think if composition could model your problem better.
// In some cases it can.

// You might be wondering then, "when should I use inheritance?" It depends on your problem at hand, but this is a 
// decent list of when inheritance makes more sense than composition:

// 1. Your inheritance represents an "is-a" relationship and not a "has-a" relationship (Human->Animal vs. User->UserDetails).
// 2. You can reuse code from the base classes (Humans can move like all animals).
// 3. You want to make global changes to derived classes by changing a base class. (Change the caloric expenditure of all animals when they move).

// BAD
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }
}

// GOOD
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
}
