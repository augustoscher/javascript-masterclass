console.log('numeric conversions');
console.log(Number("10"));
console.log(Number("9.9"));
console.log(Number("0xFF"));
console.log(Number("0b10"));
console.log(Number("0o10"));
console.log(Number());
console.log(Number("Javascript"));

console.log();
console.log('numeric conversions - 2');
console.log(~"10");
console.log(~~"10");
console.log(+"10");
console.log("10" - 0);
console.log("10" * 1);
console.log("10" / 1);
console.log("10" + 1); //vai concatenar
console.log(+"10" + 1); //vai dar certo

console.log();
console.log('base conversion');
console.log((0xA).toString(10));
console.log((0b1010).toString(16));

console.log();
console.log('parseInt');
console.log(parseInt("50")); //usar por padrão a base 10 (decimal)
console.log(parseInt("A", 16));
console.log(parseInt("A")); //nan pois ele nao sabe o que é "A"
console.log(parseInt("9.9", 10)); //mesmo colocando na base decimal, ele perde precisao. vira 9.
console.log(parseInt("9.9", 10)); 
console.log(parseInt("11", 2)); //11 na base 2 é 3

console.log();
console.log('parseFloat');
console.log(parseFloat("10")); 
console.log(parseFloat("9.9")); //funciona pois é float

