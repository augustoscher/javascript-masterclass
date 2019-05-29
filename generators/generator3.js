const thisClass = "Generators3";
console.log(`Class of ${thisClass}`);

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

sum(19, 62).then(function (result) {
  console.log(result);
});

sum(10, 9).then(result => {
  console.log(result);
});

sum(127, 544).then(result => console.log(result));
