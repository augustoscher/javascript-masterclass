function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) {
      reject("Invalid input...");
    }
    setTimeout(() => {
      console.log(`Sum ${a} + ${b}`)
      resolve(a + b);
    }, 1000);
  });
}
//evitar foreach quando tiver async/await
(async function () {
  try {
    const functions = [
      sum(2, 2),
      sum(4, 4)
    ];

    const results = [];

    //itera sobre cada uma function que retorna promise, espera executar, coloca o 
    //resultado em um array.
    for await (let result of functions) {
      results.push(result);
    }

    const [a, b] = results;
    const result = await sum(a, b);
    console.log(result);

  } catch (e) {
    console.log(e);
  }
})();