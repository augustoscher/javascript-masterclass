console.log('ieee754');

//arredondamentos
let s = (0.1 + 0.2); 
console.log(s);//0.30000000000000004
s = (666.7 - 666.6);
console.log(s); //0.10000000000002274
s = (33.3 * 3);
console.log(s); //99.89999999999999
s = (12.2 / 0.1);
console.log(s); //121.99999999999999

console.log();

//nao tem arredondamento
s = (0.5 / 0.5);
console.log(s); //1

console.log();

//others
s = (1 / 0);
console.log(s); //infinity (não da erro)
console.log(Math.pow(10, 1000)); //infinity
console.log(Number.MAX_VALUE * 2); //infinity
console.log(Math.log(0)); //-infinity
console.log(-Number.MAX_VALUE * 2); //-infinity

console.log();

//NaN
//Not a Number é retornado quando realizamos operação numérica onde 
//não é possível determinar o resultado
console.log(10 * "a"); //NaN
console.log(Math.sqrt(-9)); //raiz quadrada de -9 é NaN
console.log(Math.log(-1)); //logaritmo de -9 é NaN
console.log(parseFloat("javascript")); //NaN

let test = (NaN === NaN);
console.log(test);

test = isNaN(parseFloat("javascript"));
console.log(test)

let f = 0.010;
let f2 = 0.010;
console.log();
console.log(f * f2);
console.log(0.010 * 0.010)





