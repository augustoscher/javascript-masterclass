const thisClass = "Array Mutator API";
console.log(`Class of ${thisClass}`);
//mutator methods, quando invocadas, modificam o array.

console.log(`=== push === `);
const languages = ["Python", "C", "JavaScript"];
//push adiciona elemento e retorna o novo lenght do array
console.log(languages.push("Ruby"));
console.log(languages.push("Java"));
console.log(languages.push("GO"));
console.log(languages);

console.log();
console.log(`=== pop === `);
//pop remove o ultimo elemento e retorna-o
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

console.log();
console.log(`=== unshift === `);
//adiciona elemento no inicio e retorna o novo lenght
console.log(languages.unshift("Java"));
console.log(languages);

console.log();
console.log(`=== shift === `);
//remove elemento no inicio e retorna o elemento
console.log(languages.shift("Java"));
console.log(languages);

console.log();
console.log(`=== splice === `);
//remove, substitui ou adiciona um ou mais elementos em uma determinada posição.
console.log(languages.splice(languages.indexOf("JavaScript"), 1));
console.log(languages);
//adicionando elementos com splice
console.log(languages.splice(2, 0, "JavaScript", "Java"));
console.log(languages);
//remove dois elementos a partir da posição 1 e adiciona C na mesma posição
console.log(languages.splice(1, 2, "C"));
console.log(languages);

console.log();
console.log(`=== sort === `);

const results = [
  {
    _id: "61eac3ac1f205e6f732a5f12",
    query: '"segunda"',
    artifact: "jurisprudencia",
    qtdResults: 10,
    qtdMustHaveDocs: 0,
    qtdDifferentResults: 0,
    qtdSupremeCourtResults: 3,
    mustHavesRegardingLastEvaluation: 0,
    precision: 0,
  },
  {
    _id: "61eac3ac1f205e6f732a5f13",
    query: '"primeira"',
    artifact: "jurisprudencia",
    qtdResults: 0,
    qtdMustHaveDocs: 1,
    qtdDifferentResults: 0,
    qtdSupremeCourtResults: 0,
    mustHavesRegardingLastEvaluation: 0,
  },
  {
    _id: "61eac3ac1f205e6f732a5f13",
    query: '"primeira+++"',
    artifact: "jurisprudencia",
    qtdResults: 0,
    qtdMustHaveDocs: 5,
    qtdDifferentResults: 0,
    qtdSupremeCourtResults: 0,
    mustHavesRegardingLastEvaluation: 0,
  },
];

results.sort(function (a, b) {
  return b.qtdMustHaveDocs - a.qtdMustHaveDocs;
});

const langs = [
  { name: "Python", year: 1991 },
  { name: "C", year: 1972 },
  { name: "Java", year: 1995 },
];

langs.sort(function (a, b) {
  return a.year - b.year;
});
console.log("ordena crescente por year");
console.log(langs);

langs.sort(function (a, b) {
  return b.year - a.year;
});
console.log();
console.log("ordena descrescente por year");
console.log(langs);

langs.sort(function (a, b) {
  return a.name <= b.name ? -1 : 1;
});
//or
langs.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log();
console.log("ordena por ordem alfabetica");
console.log(langs);

console.log();
console.log(`=== reverse === `);
//inverte a ordem dos elementos
langs.reverse();
console.log(langs);

console.log();
console.log(`=== fill === `);
//preenche todo array com o que for passado.
//pode se definir tb o indice de onde deve começar a popular
console.log(languages);
languages.fill("JavaScript", 1);
console.log(languages);

console.log()
console.log("=== insertIf ===")
const insertIf = (condition, item) => 
  condition ? item : []

const series = ['GOT', 'Breaking Bad', 'Peaky Blinders']
const x = 1
const y = 1
const z = 2
const goodSeries = [
  ...series,
  ...insertIf(x === y, ["Ozark"]),
  ...insertIf(x === y, ["Better Call Saul"]),
  ...insertIf(x === z, ["Altered Carbon"]),
]

console.log(goodSeries)