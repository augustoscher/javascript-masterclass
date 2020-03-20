console.log(`Object Compare`);
//a comparação de objetos é feito por meio de sua referência.
//assim, mesmo que objetos tenham exatamente mesmas propriedades e valores
//eles serão diferentes.

const book = {
  title: "Clean Code",
  author: "Rober Martin",
  language: "English",
  avaiable: true
};

const book2 = {
  title: "Clean Code",
  author: "Rober Martin",
  language: "English",
  avaiable: true
};
console.log(book == book2);
console.log(book === book2);
console.log();

console.log("=== Comparando propriedade dos Objetos === ");
//uma das formas para comparas os objetos é analisando cada uma das suas propriedades
//por meio de comparação das chaves e valores.
function compare(obj1, obj2) {
  let equal = true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      equal = false;
    }
  }
  
  //faz a mesma coisa com o segundo objeto, pois ele pode conter uma propriedade diferente.
  for (let key in obj2) {
    if (obj2[key] !== obj1[key]) {
      equal = false;
    }
  }
  return equal;
}

console.log(compare(book, book2));
book2.publisher = "teste";
console.log(compare(book, book2));
book.publisher = "teste";
console.log(compare(book, book2));
book.publisher = "my publisher";
console.log(compare(book, book2));