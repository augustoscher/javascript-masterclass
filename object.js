console.log(`=== Objects === `);
//é uma coleção dinâmica de propriedades definidas por chaves, que podem ser do tipo
//string ou symbol, e valores que podem ser de qualquer tipo de dado.

//maneiras de criar objetos:
console.log("1- notação literal");
let obj = {};
console.log(typeof obj);
console.log(obj);
console.log();

console.log("2- função construtora");
obj = new Object();
console.log(typeof obj);
console.log(obj);
console.log();

console.log("3- metodo create da Object API");
obj = Object.create(null);
console.log(typeof obj);
console.log(obj);
console.log();

console.log("==========================");
console.log("1- notação literal");
const book = {
    title: "Clean Code",
    author: "Rober Martin",
    language: "English",
    avaiable: true
};
console.log(book);
console.log();

//es6 - não precisa especificar qual o valor do atributo;
title = "Fortaleza Digital";
author = "Dan Brown";
language = "English";
avaiable = true;

const book2 = {
    title,
    author,
    language,
    avaiable
};
console.log(book2);
console.log();

console.log("es6 - computar atributos em tempo de execução");
const k1 = "title";
const k2 = "author";
const k3 = "pages";
const k4 = "language";
const k5 = "avaible";

const book3 = {
    [k1]: "Seis Anos Depois",
    [k2]: "Harlan Coben",
    [k3]: 564,
    [k4]: "English",
    [k5]: true
};
console.log(book3);
console.log();

console.log("==========================");
console.log("2- referencias");
const book4 = {};
book4.title = "Clean Code";
book4.author = "Rober Martin";
book4.language = "English";
book4.avaiable = true;
console.log(book4);
console.log();

const book5 = new Object();
book5.title = "Clean Code";
book5.author = "Rober Martin";
book5.language = "English";
book5.avaiable = true;
console.log(book5);
console.log();

const book6 = Object.create(null);
book6.title = "Clean Code";
book6.author = "Rober Martin";
book6.language = "English";
book6.avaiable = true;
console.log(book6);
console.log();

console.log("==========================");
console.log("3- computar atributos em tempo de execução por referencia");
const book7 = {};
book7[k1] = "Seis Anos Depois";
book7[k2] = "Harlan Coben";
book7[k3] = 564;
book7[k4] = "English";
book7[k5] = true;
console.log(book7);
console.log();

const book8 = new Object();
book8[k1] = "Seis Anos Depois";
book8[k2] = "Harlan Coben";
book8[k3] = 564;
book8[k4] = "English";
book8[k5] = true;
console.log(book8);
console.log();

console.log(book8.title);
console.log(book8.author);
console.log(book8.pages);

console.log("==========================");
console.log("4- For in");
for (let key in book8) {
    console.log(key);
    console.log(book8[key]);
    console.log();
}

console.log("5- Copy values with For in");
let book9 = {};
for (let key in book8) {
    book9[key] = book8[key];
}
console.log(book9);
console.log();

let book10 = {};
book10 = book9;

book10.author = "teste";
console.log("book9:");
console.log(book9);
console.log("book10:");
console.log(book10);