console.log("arrow functions");
//ES6
//Abordagem mais simples e direta para escrever functions.
console.log("=== modo tradicional === ");
const sum = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const calc = function (fn) {
  return function (a, b) {
    return fn(a, b);
  };
};
console.log(calc(sum)(2, 2));
console.log(calc(sub)(2, 2));

console.log();
console.log("=== arrow function === ");

//tira a palavra function
//coloca parametros caso houverem
//coloca => para indicar arrow function

const sum2 = (a, b) => {
  return a + b;
};

const sub2 = (a, b) => {
  return a - b;
};

const calc2 = (fn) => {
  return (a, b) => {
    return fn(a, b);
  };
};

const fn = () => {
  return "teste"
}

console.log(calc2(sum2)(2, 2));
console.log(calc2(sub2)(2, 2));
console.log(fn());

console.log();
console.log("=== arrow function sem chaves === ");
//quando não coloca chaves nas arrow functions, automaticamente existe um return.

const sum3 = (a, b) => a + b;
const sub3 = (a, b) => a - b;
const calc3 = (fn) => (a, b) => fn(a, b); //aqui ja fica muito ilegível
const fn2 = () => "teste2"
console.log(calc3(sum3)(2, 2));
console.log(calc3(sub3)(2, 2));
console.log(fn2());

console.log();
console.log("=== arrow function sem parentese === ");
//quando tem dois ou mais parametros, precisa do parantese.
//Caso contrário, o parentese não é obrigatório.

//sintaxe é const nomeFuncao = (parametroA, parametroB) => {}
//ou
//sintaxe é const nomeFuncao = parametro => corpo da funcao com return implicito
const fn3 = param => {
  return "teste " + param;
}
const fn4 = param => "teste " + param;
console.log(fn3("sou um param"));
console.log(fn4("sou um param"));

console.log();
console.log("=== arrow function não possui this === ");

const person = {
  name: "James Gosling",
  city: "Alberta",
  year: 1955,
  getAge: () => {
    //this é injetado pelo objeto pelo qual a função foi chamada.
    //porém em arrow function, esse comportamento não acontece;
    //nesse caso, retorna um NaN pois this.year é undefined.
    //não é recomendado usar arrow functions como métodos.
    return (new Date()).getFullYear() - this.year
  }
};
console.log(person);
console.log(person.getAge());

console.log();
console.log("=== arrow function não possui arguments === ");
const sumA = function () {
  let total = 0;
  for (let arg in arguments) {
    total += arguments[arg];
  }
  return total;
};
console.log(sumA(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log();

const sumB = () => {
  let total = 0;
  for (let arg in arguments) {
    total += arguments[arg];
  }
  return total;
};
console.log(sumB(1, 2, 3, 4, 5, 6, 7, 8, 9)); //da pau. tenta usar arguments do contexto de execução do node.
console.log();

//com rest params funciona
const sumC = (...numns) => {
  let total = 0;
  for (let n of numns) {
    total += n;
  }
  return total;
};
console.log(sumC(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log();
console.log("=== arrow function retornando objeto === ");

const createPerson = function (name, city, year) {
  return {
    name,
    city,
    year
  };
};

let p = createPerson("Alan Kay", "Springfield", 1940);
console.log(p);

//desta forma, o interpretador entende as chaves como um bloco. 
//Ele acha que será realizado um return dentro das chaves. Por isso, isso retorna undefined.
const createPerson2 = (name, city, year) => { name, city, year };
p = createPerson2("John", "Mayer", 1970);
console.log(p);

//a solução é usar parentese para retornar objetos de dentro de uma arrow function
const createPerson3 = (name, city, year) => ({ name, city, year });
p = createPerson3("John", "Mayer", 1970);
console.log(p);






