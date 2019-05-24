const thisClass = "Array Accessor API";
console.log(`Class of ${thisClass}`);

console.log(`=== indexOf === `);
//executa function passada por parametro para cada elemento do array.
let frameworks = ["Angular.js", "Ember.js", "Vue.js", "React.js", "Vue.js"];
console.log(frameworks.indexOf('Ember.js'));
console.log(frameworks.indexOf('React.js'));


console.log();
console.log(`=== lastIndexOf === `);
//retorna a posição do ultimo elemento encontrado
console.log(frameworks.lastIndexOf('Vue.js'));
console.log(frameworks.lastIndexOf('Ember.js'));


console.log();
console.log(`=== includes === `);
//retorna true se o elemento existir
console.log(frameworks.includes('Ember.js'));
console.log(frameworks.includes('Rails'));


console.log();
console.log(`=== concat === `);
//retorna um novo array resultante da concatenação de dois arrays
let frameworks2 = ["Java", "Ruby", "JavaScript"];
let result = frameworks.concat(frameworks2);
console.log(frameworks)
console.log();
console.log(frameworks2)
console.log();
console.log(result);

console.log();
console.log(`=== slice === `);
//retorna partes de um determinado array considerando posiçãod e inicio e fim

console.log(result.slice(2, 4));
console.log();
console.log(result.slice(2));

console.log();
console.log(`=== join === `);
//converte o array para uma string juntando os elementos com base em um separador
console.log(result.join(";"));