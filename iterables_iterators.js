const thisClass = "Iterables e Iterators";
console.log(`Class of ${thisClass}`);
//São convenções implementadas por Arrays, Maps, Sets e Strings que
//tornam iteráveis por meio de um protocolo de iteração.
console.log("=== alguns modos de iteração === ")
let languages = ["Fortran", "List", "Cobol"];
for (let i in languages) {
  console.log(languages[i])
};

console.log();
languages.forEach(lang => {
  console.log(lang);
});

console.log();
console.log("=== iterables === ")
for (let language of languages) {
  console.log(language)
};

console.log();
console.log("=== spread operations === ")
let classicLanguages = ["Fortran", "Lisp", "Cobol"];
let modernLanguages = ["Python", "Ruby", "JavaScript"];
// concat
// languages = classicLanguages.concat(modernLanguages);
// spread operation
languages = [...classicLanguages, ...modernLanguages];
console.log(languages);

console.log();
console.log("=== for of maps === ")
languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["Cobol", 1959]]);
console.log(languages);

for (let lang of languages) {
  console.log(lang);
};

console.log();
for (let [lang, year] of languages) {
  console.log(lang, "-", year);
}


console.log();
console.log("=== for of sets === ")
const set = new Set(["Fortran", "Lisp", "Cobol"]);
for (let lang of set) {
  console.log(lang);
};

console.log();
console.log([...set]); //retorna array

console.log();
console.log("=== for of strings === ")
const l = "Cobol";
for (let char of l) {
  console.log(char);
}

console.log();
console.log([...l]);

console.log();
console.log("=== Symbol.iterator === ")
//todo iterable tem uma propriedade de chave Symbol.iterator que define
//o protocolo de iteração para o objeto.
languages = ["Fortran", "Lisp", "Cobol"];
let iterator = languages[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log();
languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["Cobol", 1959]]);
console.log("keys:", languages.keys());
console.log("entries:", languages.entries());
console.log("values:", languages.values());

console.log();
iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log();
console.log("=== criando iterator === ")

function crateIterator(...array) {
  let i = 0;
  return {
    next() {
      if (i < array.length) {
        return {
          values: array[i++],
          done: false
        };
      } else {
        return {
          value: undefined,
          done: true
        };
      }
    }
  };
};

const it = crateIterator("Fortran", "Lisp", "Cobol");
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//nesse caso, não funciona o for of e spread operator pois o objeto 
//iterator que criamos não tem a propriedade Symbol.iterator;

//TypeError: it is not iterable
// for (let a of it) {
//   console.log(a);
// }

console.log();
console.log("=== fazendo um iterator manual funcionar com spread operations e for of === ");

function crateIterable(...array) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
              done: false
            }
          } else {
            return {
              value: undefined,
              done: true
            }
          }
        }
      };
    }
  };
}

const iterable = crateIterable("Fortran", "Lisp", "Cobol");
for (let a of iterable) {
  console.log(a);
}

eita = [...iterable];
console.log(eita);