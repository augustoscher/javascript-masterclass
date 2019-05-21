console.log(`Template Literals`);
//é uma forma de declarar string que permite a interpolação de expressões.

let host = "localhost";
let port = "300";
let resource = "users"
let url = "https://" + host + ":" + port + "/" + resource;
console.log(url);
url = `https://${host}:${port}/${resource}`;
console.log(url);

console.log();
console.log(`Multiple Lines`);
//é possível declarar uma string em multiplas linhas sem necessidade de 
//colocar caracteres especiais.
let str = "1 - Jan" +
"2 - Feb" +
"3 - Mar" +
"4 - Apr" +
"5 - May";
console.log("way 1: \n" + str);
console.log();

str = "1 - Jan\
2 - Feb\
3 - Mar\
4 - Apr\
5 - May";
console.log("way 2: \n" + str);
console.log();

str = "1 - Jan\n" +
"2 - Feb\n" +
"3 - Mar\n" +
"4 - Apr\n" +
"5 - May\n";
console.log("way 3: \n" + str);
console.log();

str = `1 - Jan
2 - Feb
3 - Mar
4 - Apr
5 - May
`
console.log("way 4 with template literal: \n" + str);
console.log();
