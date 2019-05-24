//number é primitivo, imutável, representado pelo padrão IEEE754 64 bits (8 Bytes).
//suporte os sistemas de numeração: decimal, binario, hexadecimal e octal.

console.log(10);
console.log(9.9);
//hexadecimal 255
console.log(0xFF);
//hexadecimal 26
console.log(0x1A);
//binario 3
console.log(0b11);
//octal 8
console.log(010);
console.log(0o12);
console.log();

//usando o objeto. foi realizado o boxing do primitivo
console.log(new Number(10));
console.log(new Number(9.9));
console.log(new Number(0xFF));
console.log(new Number(0x1A));
console.log(new Number(0b11));
console.log(new Number(0o10));

let n = new Number(2);
let n2 = 123.4;
console.log(n.toExponential(2));
console.log(n.toFixed(2));
console.log(n2.toFixed(2)); 
console.log(n2.toPrecision(10)); 