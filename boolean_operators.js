console.log(`Boolean Operators`);
console.log("==, ===, !=, !==, <, >, <=, >=");

console.log();
console.log("== "); 
console.log(0 == ''); //true
console.log(0 == '0');//true
console.log(false == undefined);//false
console.log(false == null);//false
console.log(undefined == null);//true
console.log(1 == true);//true
console.log(0 == false); //true
console.log(0 == '\n'); //true


console.log();
console.log("prefira usar sempre === e !== ");
console.log(0 === ''); //true
console.log(0 === '0');//true
console.log(false === undefined);//false
console.log(false === null);//false
console.log(undefined === null);//true
console.log(1 === true);//true
console.log(0 === false); //true
console.log(0 === '\n'); //true


console.log();
console.log("operadores logicos || e && ");
console.log(0 || 1);
console.log(0 || 2); //coersão de tipo de zero vai para false, 2 é verdadeiro, retorna 2.
console.log(1 || 2); //coersão de tipo de um vai para true, retorna 1.
console.log(1 && 2); //coersão de tipo de um vai para true, mesmo acontece com 2. retorna 2.
console.log(0 && 2); //coersão de tipo de zero vai para false. retorna 0.

console.log();

function generateSerial(max) {
    return Math.floor(Math.random() * max);
}
console.log(generateSerial(1000));
console.log(generateSerial(100));
console.log(generateSerial(10));
console.log(generateSerial());//NaN

console.log();
function generateSerial2(max) {
    max = max || 1000; //init max.
    return Math.floor(Math.random() * max);
}
console.log(generateSerial2(1000));
console.log(generateSerial2(100));
console.log(generateSerial2(10));
console.log(generateSerial2());//NaN

console.log();
console.log("operadores ternarios");
console.log((10) ? 'good' : 'bad'); //coersão de tipo de 10 fica true
console.log((0) ? 'good' : 'bad');//coersão de tipo de 0 fica false