//=> Function arguments - (at most 3)

// I think that is a good practice let functions with few arguments (at most two). 
// Functions with many arguments can be confusing. Using object as an argument, we can name each argument without worrying about order.
// I think this keeps functions clearer. 

// BAD
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);

// GOOD
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});

//========================================
//=> Functions should do one thing

// BAD
//Check if client is active and send emails
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// GOOD
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

//========================================
//=> Set default objects with Object.assign

// BAD
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// GOOD
const menuConfig = {
  title: "Order",
  // User did not include 'body' key
  buttonText: "Send",
  cancellable: true
};

function createMenu(config) {
  let finalConfig = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );
  return finalConfig
  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);

//========================================
//=> Don't use flags as function parameters
// Flags tell your user that this function does more than one thing. Functions should do one thing.
// Split out your functions if they are following different code paths based on a boolean.

// BAD
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// GOOD
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}

//========================================
//=> Avoiding side effects - pt1
// The main point is to avoid common pitfalls like sharing state between objects without any structure,
// using mutable data types that can be written to by anything, and not centralizing where your side effects occur. 

// BAD
let name = "Augusto Scher";
function splitIntoFirstAndLastName() {
  name = name.split(" ");
}
splitIntoFirstAndLastName();
console.log(name); // ['Augusto', 'Scher'];

// GOOD
function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const name = "Augusto Scher";
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Augusto Scher';
console.log(newName); // ['Augusto', 'Scher'];


//=> Avoiding side effects - pt2
// Objects and arrays are two kinds of mutable values so it's important to handle them carefully when they're passed as parameters to a function.
// A JavaScript function can change an object's properties or alter the contents of an array which could easily cause bugs elsewhere

// BAD
const addItemToCart = (cart, item) => {
  cart.push({ item: item, date: new Date() })
}

// GOOD 
// clones array, add new item and returns new array
const addItemToCart = (cart, item) => {
  return [...cart, { item: item, date: new Date() }]
}

//========================================
//=> Don't write to global functions
// Let's think about an example: what if you wanted to extend JavaScript's native Array method to have a diff method that could show the 
// difference between two arrays?  You could write your new function to the Array.prototype, but it could clash with another library that tried to do the same thing.
// What if that other library was just using diff to find the difference between the first and last elements of an array?

// BAD
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};

// GOOD
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}

//========================================
// Favor functional programming over imperative programming
// JavaScript isn't a functional language in the way that Haskell is, but it has a functional flavor to it.
// Functional languages can be cleaner and easier to test. Favor this style of programming when you can.

const programmerOutput = [
  {
    name: "Uncle Bobby",
    linesOfCode: 500
  },
  {
    name: "Suzie Q",
    linesOfCode: 1500
  },
  {
    name: "Jimmy Gosling",
    linesOfCode: 150
  },
  {
    name: "Gracie Hopper",
    linesOfCode: 1000
  }
];

// BAD
let totalOutput = 0;
for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}

// GOOD
const totalOutput = programmerOutput.reduce(
  (totalLines, output) => totalLines + output.linesOfCode,
  0
);

// Encapsulate conditionals

// BAD
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}

// GOOD
const shouldShowSpinner = (fsm, listNode) => {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}

//========================================
// Avoid conditionals
// This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything without an if statement?"
// The answer is that you can use polymorphism to achieve the same task in many cases.
// The second question is usually, "well that's great but why would I want to do that?" The answer is a previous clean code concept we learned: a function should only do one thing. 
// When you have classes and functions that have if statements, you are telling your user that your function does more than one thing. Remember, just do one thing.

// BAD
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

// GOOD
class Airplane {}

class Boeing777 extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}


//========================================
// Avoid type checking - pt1
// JavaScript is untyped, which means your functions can take any type of argument. 
// Sometimes you are bitten by this freedom and it becomes tempting to do type-checking in your functions.
// There are many ways to avoid having to do this. The first thing to consider is consistent APIs.

// BAD
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location("texas"));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location("texas"));
  }
}

// GOOD
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location("texas"));
}