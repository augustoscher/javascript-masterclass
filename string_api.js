console.log(`String API`);
console.log(`String API methods`);

console.log("JavaScript".length);
console.log("PHP".indexOf("P"));
console.log("PHP".lastIndexOf("P"));
console.log("cobol".toUpperCase());
console.log("ALGOL".toLowerCase());

console.log();
console.log(`JavaScript.charAt(1) = ` + "JavaScript".charAt(1));
console.log(`JavaScript.charCodeAt(1) = ` + "JavaScript".charCodeAt(1)); //97
console.log(`String.fromCharCode(97) = ` + String.fromCharCode(97));//a

console.log();
console.log(`JavaScript.includes(java) = ` + "JavaScript".includes("java"));
console.log(`JavaScript.includes(Java) = ` + "JavaScript".includes("Java"));

console.log();
console.log(`JavaScript.startsWith(Ja) = ` + "JavaScript".startsWith("Ja"));
console.log(`JavaScript.startsWith(j) = ` + "JavaScript".startsWith("j"));
console.log(`JavaScript.startsWith(Java) = ` + "JavaScript".startsWith("Java"));
console.log(`JavaScript.startsWith(JavaS) = ` + "JavaScript".startsWith("JavaS"));

console.log();
console.log(`JavaScript.endsWith(ipt) = ` + "JavaScript".endsWith("ipt"));
console.log(`JavaScript.endsWith(script) = ` + "JavaScript".endsWith("script"));
console.log(`JavaScript.endsWith(Script) = ` + "JavaScript".endsWith("Script"));
console.log(`JavaScript.endsWith(t) = ` + "JavaScript".endsWith("t"));

console.log();
console.log("==== localeCompare ==== ")
console.log("a.localeCompare(b) = " + "a".localeCompare("b")); //-1
console.log("b.localeCompare(a) = " + "b".localeCompare("a")); //1

console.log("a.charCodeAt(0) = " + "a".charCodeAt(0));
console.log("b.charCodeAt(0) = " + "b".charCodeAt(0));
console.log("à.charCodeAt(0) = " + "à".charCodeAt(0));
console.log("a < b = " + "a" < "b");
console.log("à < b = " + "à" < "b");

console.log();
console.log("==== match, replace, replace ==== ");
console.log("C++".match(/\+/));
console.log("C++".match(/\+/g));
console.log("Java".search(/a/)); //retorna o indice da primeira ocorrencia
console.log("Java".search(/va/));
console.log("JavaScript".replace("Java", "Ecma")); //replace Java por Ecma
console.log("JavaScript".replace(/a/g, 4)); //replace Java por Ecma

console.log();
console.log("==== slice, split, substring ==== ");
console.log("JavaScript.slice(0,4) = " + "JavaScript".slice(0,4));
console.log("JavaScript.slice(4) = " + "JavaScript".slice(4));
 //-6 indica que ele conta a posição final de tras pra frente.
console.log("JavaScript.slice(0,-6) = " + "JavaScript".slice(0, -6));
 //-6 indica que ele conta a posição final de tras pra frente.
console.log("JavaScript.slice(-6) = " + "JavaScript".slice(-6)); 
console.log("JavaScript;Ruby;React;Rails".split(";"));
console.log("JavaScript.substring(0,4) = " + "JavaScript".substring(0,4));
//inverte automaticamento, pois percebe que 4 > 0
console.log("JavaScript.substring(4,0) = " + "JavaScript".substring(4,0)); 
console.log("JavaScript.substring(4) = " + "JavaScript".substring(4));

console.log();
console.log("==== concat, padStart, padEnd, repeat, trim, trimLeft, trimRight ==== ");
console.log("Java.concat(Script) = " + "Java".concat("Script"));
console.log("Data.concat(Flex) = " + "Data".concat("Flex"));

console.log();
console.log("Java.concat(Script) = " + "Java".concat("Script"));

console.log("Script".padStart(10, "Java"));
console.log("teste".padStart(32, 0));
console.log(" Teste".padStart(15, "=")); //cria uma string de lenght 15 adicionando "=" ate completar


console.log("C".padEnd(3, "++")); //cria uma string de lenght 3 e adiciona ++ ate completar
console.log("C".padEnd(3, "+")); //da na mesma
console.log("C".concat("+".repeat(2))); //mesma coisa usando concat com repeat
console.log(" SELF ".trim()); 
console.log(" SELF ".trimLeft()); 
console.log(" SELF ".trimRight()); 

