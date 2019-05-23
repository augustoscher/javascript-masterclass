console.log(`call, apply e bind `);

const calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

const circle = {
  radius: 10,
  calculateArea
};

console.log("=== call e apply === ");
console.log(circle.calculateArea());
console.log(calculateArea.call(circle));
console.log(calculateArea.apply(circle));

console.log();
//diferenças entre call e apply
const calculateArea2 = function (fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
};
//primeiro parametro e o this e o segundo são os parâmetros da própria function
console.log(calculateArea2.call(circle, Math.round));
//para apply, sempre tem que passar dentro do array
console.log(calculateArea2.apply(circle, [Math.ceil]));

console.log()
console.log("=== bind === ");

const calculateAreaForCircle = calculateArea2.bind(circle);
console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));