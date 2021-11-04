// Closures are functions inside other functions that have access to their lexical environments.
// The closure is a fundamental concept of JavaScript. This is a core concept in functional programming.

function generator(a) {
  return function(param) {
    // a variable is visible inside inner function because is the same(scope) lexical environment.
      return a + param;   // a and param are both available inside
  }
}
const add1 = generator(1); // set a = 1 and return inner function
const add5 = generator(5); // set a = 5 and return inner function
const add10 = generator(10); // set a = 10 and return inner function

add1(3); // returns 4 as a = 1 and param = 3
add5(3); // returns 8 as a = 5 and param = 3
add10(3); // returns 13 as a = 10 and param = 3

console.log(add10(50)) //60

// =====================

// https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc
// Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico.

function pai(){
  var x = 1;
  function filho(){
    console.log(x);
    x++;
  }
  return filho;
}

var contador = pai();
contador();    // 1
contador();    // 2
contador();    // 3

// Modulos
// Módulos são estruturas de código que fazem bom uso das closures, eg:
function ModuloMatematico() {     
  var x = 0;     
  function somaUm() {
      x++;        
      console.log(x);     
  }      
  function subtraiUm() {         
      x--;
      console.log(x);     
  }
  return {         
      somaUm: somaUm,         
      subtraiUm: subtraiUm     
  }; 
}
var teste = ModuloMatematico();  
teste.somaUm();     // 1 
teste.somaUm();     // 2
teste.somaUm();     // 3
teste.subtraiUm();  // 2
