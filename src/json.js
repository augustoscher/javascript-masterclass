console.log(`=== Json === `);
//1- tipos de dados
//2- number
//3- string
//4- boolean
//5- object
//6- array
//7- null
console.log()
console.log(`=== JSON.stringfy === `);
console.log(JSON.stringify(10));
console.log(JSON.stringify("JavaScript"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify({ name: "Self", paradigm: "OO" }));
console.log(JSON.stringify([1, 2, 3, 4, 5]));
console.log(JSON.stringify(null));

console.log()
console.log(`=== JSON.parse === `);
let v = JSON.parse('10');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('"JavaScript"');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('false');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('true');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('{ "name": "Self", "paradigm": "OO" }');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('[1,2,3,4]');
console.log(typeof v);
console.log(v);
console.log();

v = JSON.parse('null');
console.log(typeof v);
console.log(v);
console.log();

console.log()
console.log(`=== Comparing === `);
const book1 = {
  name: "Refactoring",
  author: "Martin Fowler"
};
const book2 = {
  name: "Refactoring",
  author: "Martin Fowler"
};
console.log(book1 === book2); //false
console.log(JSON.stringify(book1) === JSON.stringify(book2)); //true

console.log()
console.log(`=== Cloning === `);
const book3 = book2;
console.log(book2 === book3); //true

//clona o objeto
const book4 = JSON.parse(JSON.stringify(book2));
console.log(book2 === book4); //false pois ele clonou o objeto, não ficou apontando para a mesma referencia.

