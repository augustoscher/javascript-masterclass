//1 - Data Types: Primitives and Objects
//- Primitives: Imutáveis.
//- Existem 6 tipos imutáveis.
console.log(typeof 10);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof Symbol("iterator"));
console.log(typeof null);
console.log(typeof undefined);

//wrappers of primitives
console.log();
console.log((10).toFixed(2));
console.log(("JavaScript").replace('a','4'));
console.log((true).toString());

//- Objects
console.log();
let fn = function sum(a,b) {return a+b};
console.log(typeof fn);

let obj = {name: 'Linus Torvald'};
console.log(typeof obj);

//tipo de array é object 
let ar = [1,3,4,5,67,78,234];
console.log(typeof ar);

let re = /[a-zA-Z_$]/;
console.log(typeof re);

let dt = new Date();
console.log(typeof dt);
console.log(dt)