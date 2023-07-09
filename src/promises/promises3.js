const delay = (sec) => new Promise((resolve) => {
  setTimeout(resolve, sec*1000);
});

let promises = [
  delay(4),
  delay(6),
  delay(10),
  delay(5)
];

console.log("=== promise.all === "); //10s
console.time('promise.all');
Promise.all(promises).then(() => {
  console.timeEnd('promise.all');
});

console.log("=== sequential === "); //25s
(async () => {
  console.time('sequential');
  await delay(4),
  await delay(6),
  await delay(10),
  await delay(5)
  console.timeEnd('sequential');
})();

console.log("=== done === ");
