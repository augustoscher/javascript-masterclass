//Extraia partes do comando como o nome da tabela e as colunas,
//armazenando-as em variáveis.
//Dado o comando:
//create table author (id number, name string, age number, city string, state string, country string)
// Extraia o nome da tabela e armazene em uma variável chamada "tableName".
// Extraia as colunas da tabela e armazene em uma variável chamada "columns".
// Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.
// Resultado
// tableName = "author"
// columns = [ 'id number',' name string',' age number',' city string',' state string',' country string']

function print (table, cols) {
    console.log(table);
    console.log(cols);
}

function execExp(exp, value) {
    return exp.exec(value);    
}

let command = "create table author (id number, name string, age number, city string, state string, country string)"
let regexCreateTable = /^create\stable\s(\w+)\s\(([a-z,\s]+)\)$/;
let result = regexCreateTable.exec(command);
let tableName = result[1];
let columns = result[2].split(",");

console.log();
command = "create table user (id number, login string, password string, admin bool)"
result = execExp(regexCreateTable, command);
tableName = result[1];
columns = result[2].split(",");
print(tableName, columns);