//1- VAR - não respeita bloco, permite redeclaração e reatribuição
//gera undefined: Existe uma função geral acima do contexto do nosso código. 
//Ao utilizar var, a variável é inicializada no escopo dessa função, não respeitando 
//bloco, permitindo redeclaração e reatribuição.
//Esse processo é realizado antes da execução do código, por isso que gera undefined,
//e não um erro dizendo que a variável não existe.
console.log(pi); 

var pi = 3.141592;
console.log(pi);
var pi = 3;
console.log(pi);

if (true) {
    var teste = "aahaha"
}
console.log(teste);
//---------------------------------------------------------------
//2- LET - respeita bloco, não permite redeclaração e permite reatribuição
//Ao utilizar let, a variável é declarada no escopo da função mas só é
//inicializada posteriormente, respeitando bloco e permitindo reatribuição, mas não
//redeclaração.
console.log("")
//console.log(a); //ReferenceError: a is not defined
let a = 4.3323;
console.log(a);
if (true) {
    console.log(a);// ok
    let b = "opa";
}
//console.log(b)//ReferenceError: a is not defined
//---------------------------------------------------------------
//3- CONST (final) - respeita bloco, não permite redeclaração nem reatribuição
//Ao utilizar let, a variável é declarada no escopo da função mas só é
//inicializada posteriormente, respeitando bloco não permitindo 
//reatribuição nem redeclaração.



//Ao declarar uma variável sem var, let, ou const ela é criada no escopo global