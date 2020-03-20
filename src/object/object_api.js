console.log(`Object API`);
console.log();

//entrou no ES6
console.log("=== Object.assign === ");
const javascript = {};
Object.assign(javascript,
  {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
  }, {
    author: "Brandon Eich",
    influencedBy: "Java, Scheme and Self"
  });
console.log(javascript);

console.log();
console.log("=== Object.keys === ");
console.log(Object.keys(javascript));

console.log();
console.log("=== Object.values === ");
console.log(Object.values(javascript));

console.log();
console.log("=== Object.entries === ");
console.log(Object.entries(javascript));

console.log();
console.log("=== Object.is === ");
//compara dois objetos, considerando os tipos de dados, de forma similar
//ao operador ===
console.log(Object.is(javascript, javascript));

console.log();
console.log("=== Object.defineProperty === ");
const obj = {};
Object.defineProperty(obj, "name", {
  //define propriedade como nao enumerada. Esconde caracteristicas do objeto.
  value: "JavaScript"
});
console.log(obj);
console.log(Object.keys(obj));
console.log(obj.name);

console.log();
const obj2 = {};
Object.defineProperty(obj2, "name", {
  enumerable: true,
  value: "JavaScript"
});
console.log(obj2);
console.log(Object.keys(obj2));
console.log(obj2.name);

console.log()
obj2.name = "EcmaScript";
console.log(obj2); //não aceitou a atribuição. objeto não é writable.
console.log(Object.keys(obj2));
console.log(obj2.name);

console.log();
const obj3 = {};
Object.defineProperty(obj3, "name", {
  configurable: true, //permite deletar uma propriedade
  enumerable: true,
  writable: true,
  value: "JavaScript"
});
console.log(obj3);
console.log(Object.keys(obj3));
console.log(obj3.name);
obj3.name = "EcmaScript";
console.log(obj3.name); //agora aceitou a atribuição.

console.log();
console.log("=== Object.preventExtensions === ");
console.log("= preventExtensions = ")
const book = {
  title: "Clean Code",
  author: "Rober Martin",
  language: "English",
  avaiable: true
};
console.log(book);
console.log(Object.isExtensible(book));//true
Object.preventExtensions(book);
console.log(Object.isExtensible(book));//false
console.log();

//preventExtensions permite atualizar e deletar prop porem não permite criar
book.language = "Pt-BR";
book.pages = 100;
delete book.avaiable;
console.log(book);

console.log();
console.log("= seal = ")

const book2 = {
  title: "Clean Code",
  author: "Rober Martin",
  language: "English",
  avaiable: true
};
console.log(book2);
console.log(Object.isExtensible(book2));//true
Object.seal(book2);
console.log(Object.isExtensible(book2));//false
console.log(Object.isSealed(book2));//true
delete book2.avaiable; //object is sealed. delete is not effective.
console.log(book2);

console.log();
console.log("= freeze = ")
const book3 = {
  title: "Clean Code",
  author: "Rober Martin",
  language: "English",
  avaiable: true
};
Object.seal(book3);
console.log(Object.isExtensible(book3));//false
console.log(Object.isFrozen(book3));//true
//não permite atualização, inclusão ou exclusão de propriedade.