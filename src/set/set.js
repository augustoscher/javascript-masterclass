const thisClass = "Set";
console.log(`Class of ${thisClass}`);
//Set é um objeto que armazena elementos únicos que podem ser de qualquer tipo de dado.

const test = new Set();
console.log(typeof test);
console.log(test instanceof Set);
console.log(test);

const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
console.log(charsets);
console.log(Array.from(charsets));

console.log();
console.log("=== size === ");
//retorna a quantidade 
console.log(charsets.size);

console.log();
console.log("=== add === ");
//adiciona um elemento
charsets.add("UTF-16");
console.log(charsets.size);
console.log(charsets);

console.log();
console.log("=== forEach === ");
//itera sobre 
charsets.forEach(charset => {
  console.log(charset);
});

console.log();
console.log("=== has === ");
//retorna true se elemento existir
console.log(charsets.has("ASCII"));
console.log(charsets.has("UTF-32"));

console.log();
console.log("=== delete === ");
//remove um elemento
console.log(charsets.size);
console.log(charsets.delete("ASCII"));
console.log(charsets.has("ASCII"));
console.log(charsets.size);
console.log(charsets.delete("UTF-32"));
console.log(charsets.size);

console.log();
console.log("=== clear === ");
//remove todos os elementos
charsets.clear();
console.log(charsets);

console.log();
console.log("=== não permite elementos duplicados === ");
let array = [];
array.push(10);
array.push(10);
array.push(10);
console.log(array);
console.log(array.length);

console.log();
let set = new Set();
set.add(10);
set.add(10);
set.add(10);
console.log(set);
console.log(set.size);

console.log();
console.log("=== elimina duplicados do array === ");

let set1 = new Set(array);
console.log(array);
console.log(set1);
array = Array.from(set1);
console.log(array);

console.log();
let items = [15, 15, 15, 15, 20];
items = Array.from(new Set(items));
console.log(items);



