const thisClass = "Promises";
console.log(`Class of ${thisClass}`);


console.log();
console.log("=== race === ");
//pega somente quem chegar primeiro

function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) {
      return reject("Invalid input");
    }
    setTimeout(function () {
      resolve(a + b);
    }, Math.random() * 1000);
  });
};

Promise.race([
  sum(2, 2),
  sum(4, 4)
]).then(function (value) {
  console.log(value);

  sum(value, value)
    .then(function (res) {
      console.log(res);
    });

}).catch(function (e) {
  console.log(e);
});

