const o1 = { name: "Batman", age: 34, city: "Gotham" };
const o2 = { name: "Spider Man", age: 18, city: "New York" }
const o3 = { name: "Thor", age: 25, city: "Asgard" }

// to see name of variable of the object:
console.log(' === to see name of variable of the object:')
console.log({ o1, o2, o3})
console.log();

// table values
console.log(' === table on console log:')
console.table([o1, o2, o3]);
console.log();

// know where functions is called
console.log(' === know where functions is called:')
const deleteMe = () => console.trace('deleted...');
deleteMe();
console.log();

//template literals
console.log(' === Template literals:')
function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'new';
  return `${str[0]}${ageStr} at ${age} years.`
}

const bio = horseAge`This horse is ${5}`;
console.log(bio);
console.log();

//spread syntax - merge objects
console.log(' === Spread syntax:');
const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60 };

const p = { ... pikachu, ... stats };
const p2 = { ... pikachu, hp: stats.hp };
console.log(p);
console.log(p2);
console.log()

//spread syntax array
console.log(' === Spread syntax - Arrays:');
let pokemons = ['Arbok', 'Raichu', 'Sandshrew'];

// bad:
// pokemons.push('Weedle');
// pokemons.push('Metapod');
// pokemons.push('Bulbasaur');

// use spread instead

// push
pokemons = [...pokemons, 'Weedle', 'Metapod', 'Bulbasaur'];
console.log(pokemons);

// unshift
pokemons = ['Arbok', 'Raichu', 'Sandshrew'];
pokemons = ['Weedle', 'Metapod', 'Bulbasaur', ...pokemons];
console.log(pokemons);
console.log();

// loops - use array methods instead for loop
console.log(' === Loops:');

const orders = [500, 23, 3442, 434, 23];

// reduce
const total = orders.reduce((p, n) => {
  return p + n
}, 0);
console.log('total: ', total);

//Map
const withTaxes = orders.map((value) => value * 1.1);
console.log('withTaxes array: ', withTaxes);

//Filter
const highValue = orders.filter((value) => value > 100);
console.log('high: ', highValue);
console.log();

// Async/Await
console.log(' === Async/Await:');

const random = () => {
  return Promise.resolve(Math.random());
};

const sumRandoAsyncNums = async () => {
  const f = await random();
  const s = await random();
  const t = await random();
  console.log(`Sum: ${f + s + t}`);
};

sumRandoAsyncNums();
