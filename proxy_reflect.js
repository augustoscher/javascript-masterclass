const thisClass = "Proxy and Reflect";
console.log(`Class of ${thisClass}`);

//Proxy é capaz de interceptar diversos tipos de operações em um objeto alvo.
//Existem métodos chamados de trap, para diversos tipos de eventos relacionados
//a um objeto. Tais como: apply, construct, defineProperty, get, set, has, isExtensible....

//método set é invocado quando uma propriedade é definida no objeto.
//método deleteProperty é invocado quando uma propriedade é deletada.
//método get é invocado quando a propriedade é acessada.
function createArray() {
  return new Proxy({}, {

    set(target, key, value) {
      // console.log(target, key, value);
      target.lenght = target.lenght || 0;
      target.lenght++;
      target[key] = value;
    },
    get(target, key) {
      if (typeof key === "string" && key.match(/\d+/)) {
        if (!(key in target)) {
          throw `Property ${key} not found`;
        }
      }
      return target[key];
    },
    deleteProperty(target, key) {
      if (key in target) {
        target.lenght--;
        delete target[key];
      }
    }

  });
}

console.log("=== set === ");
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";

console.log(languages);
console.log(languages.lenght);

console.log();
console.log("=== get === ");
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);
// console.log(languages[3]);//Property 3 not found

console.log();
console.log("=== deleteProperty === ");
delete languages[1];
delete languages[2];
delete languages[3];

console.log(languages);
console.log(languages.lenght);

console.log();
console.log("============================================================ ");
console.log("=== Reflect API === ")
console.log();
//Tem os mesmos métodos que existem no Proxy, permitindo a execução de
//diversos tipos de operação no objeto alvo.

function createArray2() {
  return new Proxy({}, {

    set(target, key, value) {
      // console.log(target, key, value);
      target.lenght = target.lenght || 0;
      target.lenght++;
      Reflect.set(target, key, value)
    },
    get(target, key) {
      if (typeof key === "string" && key.match(/\d+/)) {
        if (!(Reflect.has(target, key))) {
          throw `Property ${key} not found`;
        }
      }
      return Reflect.get(target, key);
    },
    deleteProperty(target, key) {
      if (Reflect.has(target, key)) {
        target.lenght--;
        Reflect.deleteProperty(target, key);
      }
    }

  });
}
console.log("=== set === ");
const lang = createArray2();
lang[0] = "Python";
lang[1] = "Ruby";
lang[2] = "JavaScript";

console.log(lang);
console.log(lang.lenght);

console.log();
console.log("=== get === ");
console.log(lang[0]);
console.log(lang[1]);
console.log(lang[2]);
// console.log(lang[3]);//Property 3 not found

console.log();
console.log("=== deleteProperty === ");
delete lang[1];
delete lang[2];
delete lang[3];

console.log(lang);
console.log(lang.lenght);