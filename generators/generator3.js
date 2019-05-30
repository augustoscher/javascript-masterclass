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
  // console.log(result);
});

sum(10, 9).then(result => {
  // console.log(result);
});

// sum(127, 544).then(result => console.log(result));

console.log();
console.log("=== generators com promises === ");

function async(fn) {
  const gen = fn();
  asyncR(gen);
}

function asyncR(gen, result) {
  const obj = gen.next(result);
  if (obj.done) {
    return;
  }
  obj.value.then(function (result) {
    asyncR(gen, result)
  });
}

async(function* () {
  const v1 = yield sum(2, 2);
  const v2 = yield sum(4, 4);
  const result = yield sum(v1, v2);
  console.log(result);
});


