const thisClass = "Generators";
console.log(`Class of ${thisClass}`);
//Os generators tornam possível pausar a execução de uma feterminada function
//permitindo a utilização do event loop de forma cooperativa.

//Ao encontrar a palavra yield, a execução da function é pausada até o método
//next() ser invocado novamente.


//define um generator através de function*
function* forever() {
  let value = 1;
  while (true) {
    //yield permite passagem de parametros. Pode se capturar os parametros assim:
    try {
      const reset = yield value++;
      if (reset) {
        value = 1;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

function today() {
  const date = new Date();
  console.log(date);
}

//cria um generator
const foreverGenerator = forever();
console.log(foreverGenerator);
console.log(typeof foreverGenerator);
// console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__));

console.log();
console.log("=== next ===");
//next() executa a função
//age como se fosse um iterable, contem as mesmas propriedades.
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next(true));
console.log(foreverGenerator.next());
console.log()

console.log(foreverGenerator.throw("erroo"));
//para o generator.
// console.log(foreverGenerator.return("end"));
console.log(foreverGenerator.next());