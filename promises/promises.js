const thisClass = "Promises";
console.log(`Class of ${thisClass}`);
//As promises são objetos responsáveis por modelar comportamento assíncrono
//permitindo o seu tratamento de uma forma mais fácil e direta.


console.log("=== undefined com timeout de 1s === ");

function sum(a, b) {
  setTimeout(() => {
    return a + b;
  }, 1000);
}

const result = sum(2, 2);
console.log(result);

console.log();
console.log("=== resolvendo com callback === ");
//passa uma function como callback para sub.
//essa function, tem um parametro chamado resultado.
//que receberá o retorno da subtração.

function sub(a, b, callback) {
  setTimeout(function () {
    callback(a - b);
  }, 1000);
}

sub(5, 2, function (result) {
  //   console.log(result);
});

console.log();
console.log("=== promise === ");

function mult(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) {
      return reject("Invalid input");
    }
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
}

// se chamarmos somente assim: mult() irá cair em catch
// mult(2, 2)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (e) {
//     console.log(e);
//   });

console.log();
console.log("=== encadeando promise === ");
//agurda todas e retorna.
Promise.all([
  mult(2, 2),
  mult(4, 4)
]).then(function (values) {
  //cai no then depois de todas as promises terem sido executadas paralelamente.
  const [a, b] = values;
  console.log(a, b); //2*2 = 4 | 4*4 = 16
  mult(a, b)
    .then(function (value) {
      console.log(value); //4 * 16
    });

}).catch(function (e) {
  console.log(e);
});

