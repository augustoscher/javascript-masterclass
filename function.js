console.log(`function`);
//são um objeto que tem código executável.
console.log();
console.log(`=== function declaration === `);
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

console.log();
console.log(`=== function expression === `);
//pré-carregada no contexto de execução.
const c = function (a, b) {
  return a + b;
}
console.log(c(2, 2));

console.log();
console.log(`=== function primeira classe === `);
const sum2 = function (a, b) {
  return a + b;
}
const sub2 = function (a, b) {
  return a - b;
}
console.log(sum2(2, 2));
console.log(sub2(2, 2));
console.log();

const calc = function () {
  return function () {
    return "calc";
  }
}
console.log(calc);//function
console.log(calc());//function
console.log(calc()());

console.log();
console.log("=== function por parametro === ")
const calculator = function (fn) {
  return function (a, b) {
    return fn(a, b);
  }
}
//passa uma função por parâmetro, executa a função retornada passando parametros.
console.log(calculator(sum2)(2, 4));
console.log(calculator(sub2)(10, 5));

console.log();
console.log(`=== invocação de function com menos ou mais params  === `);
console.log(sum2(2, 2));
console.log(sum2(2));//NaN pois ela recebe um undefined
console.log(sum2(2, 5, 3));//ignora o terceiro parametro.

console.log();
//inicializa parametros da function 
const sum3 = function (a = 1, b = 1) {
  return a + b;
}
console.log(sum3(2));//2+1
console.log(sum3());//1+1

console.log();
console.log(`=== variavel arguments  === `);

const test = function () {
  return arguments;
}

const test2 = function () {
  let total = 0;
  for (let arg in arguments) {
    total += arguments[arg];
  }
  return total;
}
console.log(test());
console.log(test(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log();
console.log(test2());
console.log(test2(1, 2, 3, 4, 5, 6, 7, 8, 9));


console.log();
console.log(`=== rest parameter (vararg)  === `);
//sempre precisa ser o ultimo
const test3 = function (...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
console.log(test3());
console.log(test3(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log();

const test4 = function (a, b, c, ...etc) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(etc);
}

test4(1, 2, 3, "a", "b", "c", "d");
