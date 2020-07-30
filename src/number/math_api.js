const { logBase } = require('./log');

console.log('math api');
console.log("typeof Math = " + typeof Math); //Math é um objeto
console.log("Math.E = " + Math.E); //euler number
console.log("Math.LN10 = " + Math.LN10); //logaritmo natural de 10
console.log("Math.LN2 = " + Math.LN2);//logaritmo natural de 2
console.log("Math.LOG10E = " + Math.LOG10E);
console.log("Math.LOGE2 = " + Math.LOG2E);
console.log("Math.PI = " + Math.PI); //pi
console.log("Math.SQRT1_2 = " + Math.SQRT1_2); //raiz quadrada de 1/2
console.log("Math.SQRT2 = " + Math.SQRT2);//raiz quadrada de 2

console.log();
console.log("Math operations")

console.log("Math.abs(-12) = "+ Math.abs(-12));

console.log("Math.ceil(12.9) = "+ Math.ceil(12.9));//arredonda para cima
console.log("Math.ceil(1.1) = "+ Math.ceil(1.1));//2
console.log("Math.ceil(-1.1) = " + Math.ceil(-1.1)); //-1

console.log("Math.floor(12.4) = "+ Math.floor(12.4)); //arredonda para baixo
console.log("Math.floor(9.9) = "+ Math.floor(9.9)); //arredonda para baixo
console.log("Math.floor(-9.9) = "+ Math.floor(-9.9)); //arredonda para baixo
console.log("Math.floor(-1.1) = " + Math.floor(-1.1)); //-2

console.log("Math.round(5.7) = " + Math.round(5.7));//arredonda para cima (decimal de 5 a 9) | para baixo de (0 a 4)
console.log("Math.round(5.3) = " +Math.round(5.3));//arredonda para cima (decimal de 5 a 9) | para baixo de (0 a 4)

console.log("Math.sign(-50) = " + Math.sign(-50));//retorna o sinal do numero (1 positivo e -1 negativo)
console.log("Math.sign(50) = " + Math.sign(50));//retorna o sinal do numero (1 positivo e -1 negativo)

console.log("Math.trunc(50.5679) = " + Math.trunc(50.5679));//elimina a parte decimal do numero.

console.log();
console.log("Math operations")

console.log("Math.cbrt(8) = " + Math.cbrt(8));//raiz cubica
console.log("Math.cos(Math.PI/3) = " + Math.cos(Math.PI/3));//cosseno 180/3
console.log("Math.exp(1) = " + Math.exp(1));//e elevado a 1
console.log("Math.hypot(3,4) = " + Math.hypot(3,4));//eleva os catetos ao quadrado e tira a raiz
console.log("Math.log(1) = " + Math.log(1));//logartimo natural de 1
console.log("Math.pow(2,10) = " + Math.pow(2,10));//2 na potencia de 10
console.log("Math.PI/2 = " + Math.PI/2);// 
console.log("Math.sin(Math.PI/2) = " + Math.sin(Math.PI/2));//seno 
console.log("Math.sqrt(4) = " + Math.sqrt(4));//raiz quadrada
console.log("Math.tan(Math.PI/4) = " + Math.tan(Math.PI/4));//tangente

console.log();
console.log("other helpfull operations")
console.log("Math.min(1,2,-5,40,-4323,0) = " + Math.min(1,2,-5,40,-4323,0));//retorna menor numero passado por parametro
console.log("Math.max(1,2,-5,40,-4323,0) = " + Math.max(1,2,-5,40,-4323,0));//retorna menor numero passado por parametro
console.log("Math.random() = " + Math.random()); //retorna numero randominco entre 0 e 1
//deve se multiplicar, caso queira um numero maior.
//Na casa de mil:
console.log(Math.random() * 1000); 
//so a parte numerica
console.log(Math.trunc(Math.random() * 1000)); 

console.log()

console.log("log(100,2)", logBase(100, 2))
console.log("log(100,2.5)", logBase(100, 2.5))
console.log("log(100,3)", logBase(100, 3))
console.log("log(1000,2)", logBase(1000, 2))
console.log("log(1000,2.5)", logBase(1000, 2.5))
console.log("log(1000,3)", logBase(1000, 3))
