const thisClass = "Arrays";
console.log(`Class of ${thisClass}`);
//Em JS, um array é apenas um objeto que oferece operações para acessar
//e manipular suas propriedades.

const languages = ["Python", "C", "Java", "JavaScript"];
const languages2 = new Array("Ruby", "Self", "Perl");

console.log(languages);
console.log(languages2);
console.log(typeof languages);
console.log(languages instanceof Array);
console.log();

const a = [1, 2, 3, 4];
const b = new Array(10);
console.log(a);
console.log(a.length);
console.log(b);
console.log(b.length);

console.log();
console.log("== deletando elementos === ")
//deletando elementos
const c = [];
c[0] = "A";
c[1] = "B";
c[2] = "C";
console.log(c);
console.log(c.length);
delete c[1];
console.log(c);
console.log(c.length); //permanece com 3 elementos

console.log();
console.log("== atribuição que cria elementos === ")
const d = [];
d[0] = "A";
d[10] = "B";
d[20] = "C";
console.log(d);
console.log(d.length); //fica com 21 elementos