console.log();
console.log('operadores numéricos');
//+, -, *, /, %
console.log(2+2);
console.log(8-3);
console.log(5*5);
console.log(9/3);
console.log(7%2);


console.log();
console.log('operadores de atribuição');
// +=, -=, *=, /= e %=
let num = 1;
console.log(num += 1);
console.log(num -= 1);
num = 2;
console.log(num *= 2); //num = num * 2
console.log(num /= 4);
num *= 4;
console.log(num %= 2) //pega o resto que é zero e atrubui

console.log();
console.log('operadores de pós e pré incremento');
//++, --
num = 1;
console.log(num++);
console.log(num);
num = 1;
console.log(++num);
console.log(--num);

//operadores de binários (bit a bit)
//or: |
//and: &
//xor: ^ 
//not: ~
//shift: <<
//shift: >>
//shift com mudança de final: >>>
console.log();
console.log('operadores de binários (bit a bit)');

console.log(4|3);
