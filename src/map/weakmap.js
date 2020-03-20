const thisClass = "Weakmap";
console.log(`Class of ${thisClass}`);
//Weakmap é um objeto similar ao Map, que permite apenas chaves do tipo Object e mantém
//referências de forma fraca. sendo volátil e não iterável.

const wm1 = new WeakMap();
console.log(typeof wm1);
console.log(wm1 instanceof WeakMap);
console.log(wm1);

console.log();
console.log("=== set === ");
//add um par de chave/valor.
const obj1 = {};
const obj2 = {};

wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");
console.log(wm1);

//TypeError: Invalid value used as weak map key
//Somente permite objects como chaves.
//wm1.set("test", "test");

console.log();
console.log("=== has === ");
//retorna true se a chave existir
console.log(wm1.has(obj1));
console.log(wm1.has(obj2));

console.log();
console.log("=== get === ");
//retorna o valor de uma determinada chave
console.log(wm1.get(obj1));
console.log(wm1.get(obj2));

console.log();
console.log("=== delete === ");
//remove um par de chave/valor. retorna boolean informando se a chave foi deletada ou nao.
console.log(wm1.delete(obj1));
console.log(wm1.delete(obj2));

console.log(wm1.has(obj1));
console.log(wm1.has(obj2));

console.log(wm1.get(obj1));
console.log(wm1.get(obj2));

console.log();
console.log("=== Pra que serve o WeakMap === ");
//se a referência para a chave for perdida, não é mais possível acessar o weakmap.
//Implementar uma coleção com referência fraca, abstraindo a necessidade de ter que remover
//os elementos manualmente.
//Pode se usar em cache, onde com o passar do tempo, os objetos vão ficando sem a referencia,
//e então naturalmente são coletados pelo garbage collector, evitando vazamento de memória.

const areas = new WeakMap();

const rec1 = {
  x: 10,
  y: 2
};

const rec2 = {
  x: 5,
  y: 3
};

function calculateArea(rec) {
  if (areas.has(rec)) {
    console.log("Using cache...");
    return areas.get(rec);
  }
  const area = rec.x * rec.y;
  areas.set(rec, area);
  return area;
}

console.log(calculateArea(rec1));
console.log(calculateArea(rec2));
console.log(calculateArea(rec1));
console.log(calculateArea(rec2));
console.log(calculateArea(rec1));
console.log(calculateArea(rec2));
rec1 = null;
rec2 = null;
//quando a function acaba, sai do escopo de execução, ou se atribuir null a rec1 e rec2,
//o map fica elegível ao garbage collector, não sendo necessário destruir ou remover
//os elementos manualmente.

