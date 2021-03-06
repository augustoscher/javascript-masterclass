console.log(`Regular Expressions`);
//estruturas formadas por uma sequencia de caracteres que especificam
//um padrão formal que servem para validar, extrair ou mesmo substituir
//caracteres dentro de uma string.
console.log();
console.log(typeof /john@gmail.com/);
console.log(typeof new RegExp("john@gmail.com"));

let regExp = /john@gmail.com/
let result = regExp.test("Email: john@gmail.com")
let result2 = regExp.exec("Email: john@gmail.com")
console.log(result);
console.log(result2)


console.log();
console.log("Metacaracteres");
console.log("delimitadores de inicio(^) e fim ($)");

let exp = /^john@gmail.com$/; //delimita o inicio e fim
result = exp.exec("john@gmail.com")
console.log(result[0]); 
console.log(result.index);
console.log();

result = exp.exec("email é john@gmail.com ...")//null
if (result !== null) {
    console.log(result[0]); 
    console.log(result.index);
    console.log();
}

exp = /john@gmail.com$/
result = exp.exec("email é john@gmail.com");//encotra pois está finalizando conforme a regra.
console.log(result[0]); 
console.log(result.index);
console.log();

exp = /^john@gmail.com/
result = exp.exec("john@gmail.com ... "); //encotra pois está iniciando conforme a regra.
console.log(result[0]); 
console.log(result.index);

console.log();
console.log("Grupos de caracteres");
//[abc]
//[^abc]
//[0-9]
//[^0-9]

regExp = /[a-z]{10}@/;
console.log(regExp.test("abc@"));//false
console.log(regExp.test("abcdefghij@"));//true pq tem 10 caracteres
regExp = /[a-z]+@[a-z]+/; //um ou mais conjuntos de caracters (+)
console.log(regExp.test("john@gmail.com")); //true

console.log();
regExp = /^\w+@[a-z]+/
console.log(regExp.test("john3234@gmail.com")); //true
console.log(regExp.test("1john3234@gmail.com")); //true
console.log(regExp.test("1john3234@232.com")); //false
console.log(regExp.test("1john3234.gmail.com")); //false

console.log();
regExp = /^\w+@\w+.\w{3}/;
console.log(regExp.test("john3234@gmail.com")); //true
console.log(regExp.test("john3234@gmail.net")); //true
console.log(regExp.test("john3234@hotmail.com")); //true
console.log(regExp.test("john3234@hotmail.io")); //false

console.log();
regExp = /^\w+@\w+(.\w{2,3})+$/;
console.log(regExp.test("john3234@gmail.com")); //true
console.log(regExp.test("john3234@gmail.net")); //true
console.log(regExp.test("john3234@hotmail.io.br")); //true
console.log(regExp.test("john3234@hotmail")); //true


console.log();
console.log("Grupos de captura");

regExp = /^(\w+)@(\w+)(.\w{2,3})+$/;
console.log(regExp.exec("mary@gmail.com.br")); //true



