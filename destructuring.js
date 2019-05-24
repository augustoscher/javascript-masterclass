const thisClass = "Destructuring";
console.log(`Class of ${thisClass}`);
//é possível extrair valores de um array criando variáveis em ordem de acordo
//com a posição do elemento.
//é possível definir valores padrão para cada uma das variáveis.
//é possível definir nomes diferentes para as variáveis.

console.log("=== sem destructuring === ");

const language = "C;Dennis Ritchie;1972".split(";");
let name = language[0];
let author = language[1];
let year = language[2];
console.log(name, author, year);

console.log();
console.log("=== destructuring === ");
const [n, a, y] = "JavaScript;Brandon Eich;1972".split(";");
console.log(n, a, y);

console.log();
console.log("=== destructuring 2 === ");
const [, a2, y2] = "JavaScript;Brandon Eich;1972".split(";");
console.log(a2, y2);

console.log();
console.log("=== destructuring 3 === ");
const [n3, , y3] = "JavaScript;Brandon Eich;1972".split(";");
console.log(n3, y3);

console.log();
console.log("=== destructuring 4 === ");
const [n4, a4] = "JavaScript;Brandon Eich;1972".split(";");
console.log(n4, a4);

console.log();
console.log("=== destructuring default values === ");
const l = "C;Dennis Ritchie;1972".split(";");
const [n5 = "==", a5 = "==", y5 = "=="] = "JavaScript;Brandon Eich".split(";");
console.log(n5, a5, y5);

console.log();
console.log("=== destructuring with objects === ");

const languageObj = {
  name_: "C",
  author_: "Dennis Ritchie",
  year_: 1972
};
const { name_, author_, year_ } = languageObj;
console.log(name_, author_, year_);


// console.log();
// console.log("=== destructuring with objects and diferent names === ");

// const languageObj2 = {
//   name_: "C",
//   author_: "Dennis Ritchie",
//   year_: 1972
// };
// const { name_: n6, author_: a6, year_: y6 } = languageObj2;
// console.log(n6, a6, y6);

console.log();
console.log("=== destructuring with objects and diferent names === ");
console.log("=== destructuring with objects aninhados === ");

const languageObj3 = {
  name_: "C",
  author_: "Dennis Ritchie",
  year_: 1972,
  company: {
    name: "Bell Labs"
  }
};
const { name_: n6, author_: a6, year_: y6, company: { name: c6 } } = languageObj3;
console.log(n6, a6, y6, c6);


console.log();
console.log("=== destructuring with functions params === ");
const sum = ([a, b]) => a + b;
console.log(sum([2, 5]));
//or
const sub = ({ a, b }) => a - b;
console.log(sub({ a: 5, b: 2 }));

