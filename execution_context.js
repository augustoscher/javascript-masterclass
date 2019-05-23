const thisClass = "Execution Context";
console.log(`Class of ${thisClass}`);
//é o ambiente onde o código é executado, sendo composto pelo
//variable object, scope chain e this.

console.log(`=== scope chain === `);
//dentro de uma função, é possível acessar variáveis declaradas fora dela, por meio
//do scope chain.
//caso houver uma variável igual, dentro da função, ele sempre usará a variável mais próxima,
//dentro da cadeia de herança.
const v1 = 10;
const fn1 = () => {
  const v1 = 100; //vale 100
  const fn2 = () => {
    console.log(v1);
  };
  fn2();
};
fn1();

console.log();
console.log(`=== this === `);
//toda função tem uma variável this que contem uma
//referencia para o objeto responsável por sua invocação.
const obj1 = {
  p1: "obj1",
  getP1() {
    return this.p1;
  }
};
console.log(obj1.getP1());

const obj2 = {
  p1: "ob2",
  getP1() {
    const fn2 = function () {
      return this.p1; //aqui, this não tem mais a referencia de obj2. retorna undefined.
    };
    return fn2();
  }
};
console.log(obj2.getP1());

//e como se resolve o problema acima?
const obj3 = {
  p1: "obj3",
  getP1() {
    const that = this; //guarda o contexto de this;
    const fn3 = function () {
      return that.p1; //usa o contexto de this guardado anteriormente.
    };
    return fn3();
  }
};
console.log(obj3.getP1());

const obj4 = {
  p1: "obj4",
  getP1() {
    //aqui a arrow function nos ajuda. 
    //Pois como ela não está redefinindo o this, ela usa o this do objeto, 
    //levando em cosideração a hierarquia do execução.
    const fn4 = () => this.p1;
    return fn4();
  }
};
console.log(obj4.getP1());