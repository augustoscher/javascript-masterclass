const thisClass = "Async - Await";
console.log(`Class of ${thisClass}`);
//O async/await facilita a interação com chamadas assíncronas, aguardando o retorno
//de determinada promise.

function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) {
      reject("Invalid input...");
    }
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

console.log();
console.log("=== Async/Await ===");
//await so pode ser usado dentro de uma function marcada com async.
//ele fará com que o event loop aguarde a execução da promise
(async function () {
  try {
    const a = await sum(2);
    const b = await sum(4, 4);
    const result = await sum(a, b);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();

console.log();
(async function () {
  const a = await sum(2, 2);
  const b = await sum(4, 4);
  const result = await sum(a, b);
  console.log(result);
})();


