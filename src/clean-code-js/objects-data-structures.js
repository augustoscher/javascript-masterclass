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