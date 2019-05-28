const thisClass = "WeakSet";
console.log(`Class of ${thisClass}`);
//WeakSet é um objeto similar ao Set que permite apenas valores do tipo Object 
//e mantém as referências de forma fraca, sendo volátil e não iterável.

const test = new WeakSet();
console.log(typeof test);
console.log(test instanceof WeakSet);
console.log(test);
console.log(Array.from(test));

// TypeError: Invalid value used in weak set
// let charsets = new WeakSet(["ASCII", "ISO-8859-1", "UTF-8"]);

console.log();
console.log("=== add === ");
//adiciona um elemento
const obj1 = {};
const obj2 = {};
const obj3 = {};

let ws1 = new WeakSet();
ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);

console.log();
console.log("=== has === ");
//retorna true se elemento existir
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log(ws1.has(obj3));

console.log();
console.log("=== delete === ");
//remove um elemento
console.log(ws1.delete(obj2));
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));

console.log();
console.log("=== Pra que serve o WeakSet === ");
//Server para criar coleções de elementos onde não precisamos nos preocupar com memory leak.
//Quando não existir mais referência para os objetos do Set, eles serão automaticamente removidos
//da memória através do garbage collector.

const circles = new WeakSet();

function Circle(radius) {
  circles.add(this);
  this.radius = radius;
}

Circle.prototype.calculateArea = function () {
  if (!circles.has(this)) {
    throw "Invalid Object";
  }
  return Math.PI * Math.pow(this.radius, 2);
}

const cir1 = new Circle(10);
const cir2 = {
  radius: 5
};

console.log(cir1.calculateArea());
console.log(cir1.calculateArea.call(cir2));