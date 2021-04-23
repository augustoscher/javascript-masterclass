console.log(`Symbol`);
//tipo de dado primitivo, único e imutável, atuando como chave unica.
//nasceu no ES6.

console.log();
let a = Symbol("a");
let b = Symbol("b");
let c = Symbol("c");
let d = Symbol("a");

console.log("Comparing two instances with same value:")
console.log(Symbol("a") == Symbol("a"));
console.log(Symbol("a") === Symbol("a"));

console.log();
console.log("a == d: ", a == d);
console.log("a === d: ", a === d);
console.log("a === a: ", a === a)

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
console.log("Symbol.match: ", "/JavaScript/".startsWith(regexp));

console.log()
console.log("constants")

const constants = {
  topics: Symbol("TOPICOS"),
  diarios: Symbol("DIARIOS"),
  jurisprudencia: Symbol("JURISPRUDENCIA"),
}

const isDiarioArtifact = value => constants.diarios === value

// console.log(constants.diarios === "DIARIOS")
console.log(isDiarioArtifact("DIARIOS")) //false

// console.log(constants.diarios === Symbol("DIARIOS"))
console.log(isDiarioArtifact(Symbol("DIARIOS"))) //false

// console.log(constants.diarios === constants.diarios)
console.log(isDiarioArtifact(constants.diarios)) //true
