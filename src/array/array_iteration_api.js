const thisClass = "Array Iteration API";
console.log(`Class of ${thisClass}`);
//iterator methods, quando invocadas, iteram sobre os elementos do array.

console.log(`=== forEach === `);
//executa function passada por parametro para cada elemento do array.
let frameworks = ["Angular.js", "Ember.js", "Vue.js", "React.js"];
// frameworks.forEach(function (framework) {
//   console.log(framework);
// });
console.log();
frameworks.forEach(item => console.log(item));

console.log();
console.log(`=== filter === `);
//retorna um novo array contendo somente elementos que retornaram 
//true na function passada por parametro
frameworks = [
  { name: "Angular.js", contributors: 1548 },
  { name: "Ember.js", contributors: 746 },
  { name: "Vue.js", contributors: 240 },
  { name: "React.js", contributors: 5000 }
];

// let result = frameworks.filter(function (framework) {
//   return framework.contributors < 1000;
// });
//or
result = frameworks.filter(framework => framework.contributors < 1000);
console.log(result);
console.log();
result = frameworks.filter(framework => framework.contributors > 1000);
console.log(result);

console.log();
console.log(`=== find === `);
//retorna o primeiro elemento que retornou true na function passada por parametro.
// result = frameworks.find(function (fwk) {
//   return fwk.name === "Ember.js"
// });
//or 
result = frameworks.find(fwk => { return fwk.name === "Ember.js" })
console.log(result);

console.log();
console.log(`=== some === `);
//retorna true se um ou mais elementos retornaram true na function passada por parametro.
result = frameworks.some(fwk => { return fwk.name === "Ember.js" })
console.log(result);

result = frameworks.some(fwk => { return fwk.name === "Rails" })
console.log(result);

console.log();
console.log(`=== every === `);
//retorna true se todos elementos retornaram true na function passada por parametro.
let fs = new Array(10);
fs.fill("JavaScript");
console.log(fs);
result = fs.every(f => { return f === "JavaScript" })
console.log(result);

result = fs.every(f => { return f === "Rails" })
console.log(result);

console.log();
console.log(`=== map === `);
//retorna um novo array com base na function passada por parametro.
// result = frameworks.map(function (framework) {
//   return framework.name;
// });
//or
result = frameworks.map((framework) => framework.name);
console.log(result);

console.log();
console.log(`=== reduce === `);
//retorna um valor com base na function passada por parametro.
result = frameworks.reduce(function (total, framework) {
  return total += framework.contributors;
}, 0);
console.log(result);