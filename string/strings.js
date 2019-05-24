console.log('Strings');
//string é primitivo, imutavel e é representado por unicode codificado em utf-16
//how to declare:
let s = "javascript";// ""
let s2 = 'javascript'; //''
let s3 = `javascript`; //template literal

//função construtora pode prejudicar performance.
let s4 = new String("javascript")
let s5 = new String('javascript')
let s6 = new String(`javascript`)
console.log(s);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);

console.log();
console.log("String comparators");
console.log("javascript" === 'javascript');
console.log("javascript" === `javascript`);
console.log('javascript' === `javascript`);

console.log();
console.log("String comparators memory address");
console.log("s === s2: " + s === s2); 
console.log("s === s3: " + s === s3);
console.log("s2 === s3: " + s2 === s3);

console.log();
console.log("performance string");

console.time("performance")
for(i = 0; i < 100000; i++) {
    "javascript"
}
console.timeEnd("performance")

console.time("performance2")
for(i = 0; i < 100000; i++) {
    new String("javascript");
}
console.timeEnd("performance2")

console.log();
console.log("escaped characters");
console.log("named \"prototype\" that is used...");
console.log("An object\'s prototype...");
console.log(`used an escape sequence such as \\n ou \\u000A`);

console.log();
console.log("control characters");
console.log(`used an escape sequence such as \n ou \u000A aasd`);
console.log();
console.log(`dom\nseg\nter\nqua\nqui\nsex\nsab\n`);

console.log();
console.log("code points");
let daysOfWeekInCodePoints = "\u0030 \u002d \u0053\u0075\u006e\u000A\u0031 \u002d \u004d\u006f\u006e\u000A\u0032 \u002d \u0054\u0075\u0065\u000A\u0033 \u002d \u0057\u0065\u0064\u000A\u0034 \u002d \u0054\u0068\u0075\u000A\u0035 \u002d \u0046\u0072\u0069\u000A\u0036 \u002d \u0053\u0061\u0074";
console.log(daysOfWeekInCodePoints);
console.log();
console.log("\u0075");
