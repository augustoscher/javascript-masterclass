const thisClass = "Map";
console.log(`Class of ${thisClass}`);
//Map é um objeto que armazena um conjunto de chave/valor que podem ser
//de qualquer tipo de dado.

const test = new Map();
console.log(typeof test);
console.log(test instanceof Map);

console.log();
let timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);
console.log(timeUnits);
console.log(Array.from(timeUnits));

console.log();
console.log("=== size === ");
//retorna a quantidade de um map
console.log(timeUnits.size);

console.log();
console.log("=== set === ");
//adiciona um par de chave/valor
timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
timeUnits.set("day", 86400);
console.log(timeUnits);
console.log(timeUnits.size);

console.log();
console.log("=== forEach === ");
//itera sobre o mapa
// timeUnits.forEach(function (value, key) {
//   console.log(key, value)
// });

timeUnits.forEach((value, key) => {
  console.log(key, value);
})

console.log();
console.log("=== has === ");
//retorna true se a chave existir
console.log(timeUnits.has("hour"));
console.log(timeUnits.has("year"));

console.log();
console.log("=== get === ");
//retorna o valor de uma determinada chave
console.log(timeUnits.get("second"));
console.log(timeUnits.get("minute"));
console.log(timeUnits.get("hour"));
console.log(timeUnits.get("day"));
console.log(timeUnits.get("year"));

console.log();
console.log("=== delete === ");
//remove um par de chave/valor. retorna boolean informando se a chave foi deletada ou nao.
console.log(timeUnits.size);
console.log(timeUnits.delete("hour"));
console.log(timeUnits.size);
console.log(timeUnits.delete("year"));

console.log();
console.log("=== clear === ");
//remove todos os elementos
console.log(timeUnits);
console.log(timeUnits.size);
timeUnits.clear();
console.log(timeUnits);
console.log(timeUnits.size);

console.log();
console.log("=== diferença entre map e object === ");
console.log("= object = ")
const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

//saíra tudo string, pois as chaves em qualquer object, serão sempre string ou symbol.
//As chaves são convertidas para string, mesmo que foi atribuído outro tipo qualquer.
//Por isso, esse objeto possui somente duas propriedades, pois a segunda e a quarta
//atribuição, sobrescrevem a primeira e terceira respectivamente.
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);
console.log(obj);

const obj2 = {};
//retorna true por que propriedade existe no prototype
console.log("toString" in obj2);
console.log("valueOf" in obj2);


console.log();
console.log("= map = ")
//as chaves do map respeitam o tipo determinado.
const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

map.forEach((value, key) => {
  console.log(typeof key);
  console.log(key, value);
})

const map2 = new Map();
//não existe herança em map.
console.log(map2.get("toString"));
console.log(map2.get("valueOf"));
