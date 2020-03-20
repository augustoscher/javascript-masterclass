console.log(`Symbol`);
//tipo de dado primitivo, único e imutável, atuando como chave unica.
//nasceu no ES6.

console.log();
let a = Symbol("a");
let b = Symbol("b");
let c = Symbol("c");
let d = Symbol("a");

console.log(Symbol("a") == Symbol("a"));
console.log(Symbol("a") === Symbol("a"));
console.log(a == d);
console.log(a === d);

console.log();
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.match
// Symbol.replace
// Symbol.search
// Symbol.species
// Symbol.split
// Symbol.toPrimitive
// Symbol.toStringTag
// Symbol.unscopables

let regexp = /JavaScript/;
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp));
