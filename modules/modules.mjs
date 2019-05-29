const thisClass = "Modules";
console.log(`Class of ${thisClass}`);
//Foram adicionados no ES6, ou seja, ECMAScript 2015, foi especificado
//na própria linguagem, baseado no conceito de importação e exportação.
//Por meio da palavra chave export é possível exportar qualquer tipo de dado
//existente dentro de um módulo.

//para executar: node --experimental-modules modules.mjs

// outra forma de import
// import * as math from './math';
//math.PI e math.pow

//esta sendo exportada por export default ... 
//não necessáriamente o import precisa estar em cima do código;
import Circle from './circle';

const circle = new Circle(10);
console.log(circle.area);

