//=> Function arguments - (at most 2)

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

