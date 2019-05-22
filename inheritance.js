console.log(`Inheritance`);
// o principal objetivo da herança e o reuso de código por meio de compartilhamento
//de propriedades entre objetos, evitando duplicação.
//Em JavaScript a herança se dá entre objetos e não classes. Herança baseada em protótipo.

//a propriedade __proto__ é uma referência para o prototipo do objeto.
//caso a mesma propriedade exista no prototipo e no objeto, sempre é retornada a propriedade mais especifica.

const functionalLanguage = {
  paradigm: "Functional"
};

const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage
};

const javascript = {
  name: "JavaScript",
  year: 1995,
  __proto__: functionalLanguage
};

console.log(functionalLanguage);
console.log();
console.log(scheme);
console.log(scheme.paradigm);
console.log(functionalLanguage.isPrototypeOf(scheme));
console.log();
console.log(javascript);
console.log(javascript.paradigm);
console.log(functionalLanguage.isPrototypeOf(javascript));
console.log();

function printProperty(obj) {
  for (let k in obj) {
    console.log(k, obj.hasOwnProperty(k));
  }
}

console.log("=== hasOwnProperty === ");
printProperty(scheme);

console.log()
console.log("=== Object.setPrototypeOf | Objet.getPrototypeOf === ");
const python = {
  name: "Python",
  year: 1999
};
Object.setPrototypeOf(python, functionalLanguage);
printProperty(python);
console.log(functionalLanguage.isPrototypeOf(python));

console.log()
console.log("=== Object.create === ");
const perl = Object.create(functionalLanguage);
perl.name = "Python";
perl.year = 1999;
printProperty(perl);
console.log(functionalLanguage.isPrototypeOf(perl));

console.log()
console.log("=== Override property === ");
const ruby = Object.create(functionalLanguage);
ruby.name = "Ruby";
ruby.year = 1979;
console.log(ruby);
console.log();
ruby.paradigm = "OO";
console.log(ruby); //mudou no objeto para OO
console.log();
console.log(ruby.__proto__.paradigm); //porém ele ainda pertence ao prototype functionalLanguage.
console.log(Object.getPrototypeOf(ruby).paradigm);


