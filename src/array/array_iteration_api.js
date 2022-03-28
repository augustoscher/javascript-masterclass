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
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order,
// passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
result = frameworks.reduce(function (total, framework) {
  return total += framework.contributors;
}, 0);
console.log(result);

// reduce is a good option to sum an array of numbers
const nums = [10, 10, 9, 1, 8, 2, 7, 3]
const sum = nums.reduce((acum, value) => {
  return acum += value
}, 0)
console.log(sum)



const values = [
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1646309600452, date: 1644933600000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943633971, date: 1627052400000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943633110, date: 1614610800000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715994030, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715959846, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715993228, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715954187, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715960893, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715962057, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1611715957717, date: 1611756000000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943631046, date: 1600441200000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943632085, date: 1600441200000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1600557023762, date: 1600441200000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943634919, date: 1572271200000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943637236, date: 1568818800000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943638330, date: 1564671600000},
  {court: 'TRT-20', jurisTypeLabel: 'Acordão', publishedDate: 1501887866619, date: 1501761600000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943640197, date: 1490281200000},
  {court: 'TRT-20', jurisTypeLabel: 'Sentença', publishedDate: 1632943636306, date: 1488985200000},
]

const res = values.reduce((acc, value) => {
  if (acc.find(item =>
    item.date === value.date &&
    item.jurisTypeLabel === value.jurisTypeLabel)) {
    return acc
  }
  return [...acc, value]
}, [])

console.log(res)
console.log(values.length)
console.log(res.length)