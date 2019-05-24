const thisClass = "Closures";
console.log(`Class of ${thisClass}`);
//Toda função permite a utilização de variáveis que não foram declaradas
//e nem passadas por parâmetro. (free variables)

console.log("=== scope chain === ");
//funciona devido ao fato de ele sempre buscar na hierarquia do escope chain 
//a declaração da variável.

const v = 10;
const fn = function () {
  const f = () => console.log(v);
  f();
};
fn();

const t = a => console.log(a);
t("ads");

//O problema é que como as funções são de primeira classe, dependendo da situação
//poderia existir uma ambiguidade. Isso foi resolvido com as closures.
console.log();
console.log("=== Closure === ");
//closure é uma função com um scope chain estático, definido no momento em que a função é
//criada, por isso, todas as funções em javascript são closures.

function fn1() {
  const v1 = 10;
  return function () {
    console.log(v1);
  };
};
const fn2 = fn1();
const v1 = 100; //variavel ambigua. 
fn2(); //imprime 10, pois 

console.log();
console.log("=== Closure Ex 3 === ");

const v3 = 10;
function fn3() {
  console.log(v3);
};

function fn4(f) {
  const v3 = 100; //não importa que seja 100 aqui, pois quando fn3 foi criada, o valor de v3 = 10.
  f();
};
fn4(fn3);

console.log();

function create() {
  let v4 = 10;
  return {
    m1() {
      console.log(++v4);
    },
    m2() {
      console.log(--v4);
    }
  };
};

const obj = create();
obj.m1();
obj.m2();

console.log();
console.log("=== Closure Ex 4 === ");

const obj1 = {};
for (var v5 = 0; v5 < 3; v5++) {
  obj1[v5] = () => console.log(v5);
}
console.log(obj1);
//imprime 3 em todas as chamadas pois o escopo da variável v5 é compartilhado.
obj1[0]();
obj1[1]();
obj1[2]();

console.log();
console.log("=== Closure Ex 5 === ");
const obj2 = {};
for (var v6 = 0; v6 < 3; v6++) {
  obj2[v6] = (function (p) {
    return function () {
      console.log(p);
    }
  })(v6);
}
console.log(obj2);
//nesse caso, retorna cada indice, pois foi criado 3 escopes intermediarios, devido a 
//function auto invocável, que prende a variável dentro do escopo da function.
//retorna 0,1,2 
obj2[0]();
obj2[1]();
obj2[2]();

console.log();
console.log("=== Closure Ex 6 === ");
const obj4 = {};
for (var v7 = 0; v7 < 3; v7++) {
  obj4[v7] = (function (p) {
    console.log(this.v8);
  }).bind({ v8: v7 });
}
console.log(obj4);
//faz o bind da variável de escopo externo (v7) passando para a function interna como v8.
//Isso tb prende o valor da variável dentro da function, fazendo retornar o indice corretamente.
obj4[0]();
obj4[1]();
obj4[2]();