const url = 'http://localhost:3000/segmentation/edit/11#';
console.log(url.lastIndexOf('/')+1);

let id = url.slice(url.lastIndexOf('/') + 1);
console.log(id.includes('#'));
id = id.replace('#', '');

console.log(id);
console.log();
console.log('-----')
const cars = [
  { name: "Toyoya Corolla", year: 2020 },
  { name: "Peugeot 308", year: 2015 },
	{ name: "Honda HR-v", year: 2019 },
	{ name: "Citroen Cactus", year: 2018, default: true }
];

console.log(cars);
console.log();
const res = cars.filter(car => car.year > 2016);
console.log(res);
console.log();
let defaultCar = cars.find(car => car.default )
console.log(defaultCar)
