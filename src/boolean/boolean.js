console.log(`Boolean`);
//é primitivo, imutável, representado por true e false.
console.log();
console.log(typeof true);
console.log(typeof false);
console.log(new Boolean(true));
console.log(new Boolean(false));


// let condition = new Boolean(false);
//nesse caso, o exemplo abaixo entraria em true, por conta da coersão de tipo.

let condition = true;
if (condition) {
    console.log(`condition is true`);
} else {
    console.log(`condition is false`);
}

//! nega
//!! nega duas vezes, portanto afirma
console.log();
console.log("tipos evaluados para false");
console.log(!!0);
console.log(!!NaN);
console.log(typeof NaN);
console.log(!!"");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log();
console.log("tipos evaluados para true");
console.log(!!-10);
console.log(!!"JavaScript");
console.log(!!{});
console.log(!![]);
console.log(!!/JavaScript/);
console.log(!!function(){});

console.log();
console.log('10' === 10 ? ('a' > 'b' ? 1: 2) : (null === undefined ? 3: 4));
console.log(!!NaN);
console.log(!!null);
console.log(!!-10);
console.log(!!true);
console.log(0 == '');