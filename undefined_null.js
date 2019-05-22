console.log(`=== Undefined e Null === `);
//undefined é retornado quando uma chave não é encontrada.
//null significa ausência de valor
//undefined significa que se quer a popriedade existe.

const book = {
    title: "Clean Code",
    author: "Rober Martin",
    pages: 464,
    language: "English",
    avaiable: true
};
console.log(book);
console.log(book.publisher); //undefined
//pode ser usado o operador in para verificar se existe a propriedade.
console.log("title" in book);
console.log("author" in book);
console.log("avaiable" in book);
console.log("publisher" in book); 

//apagar uma propriedade de um objeto.
delete book.avaiable;
console.log(book);
console.log("avaiable" in book); //false