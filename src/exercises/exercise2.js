// Objetivo
// Com base no nome da tabela e nas colunas, monte uma estrutura de objetos para armazenar 
//tanto a definição da tabela quanto os dados.

// Instruções
// Dado o comando:
// create table author (id number, name string, age number, city string, state string, 
//country string)

// Crie um objeto chamado "database".
// Dentro do objeto "database", crie um objeto chamado "tables".
// Dentro do objeto "tables", crie um objeto com o nome da tabela.
// Dentro do objeto criado com o nome da tabela, crie um objeto chamado "columns", 
//onde as chaves são representadas pelo nome da coluna e o valor pelo tipo.
// Dentro do objeto criado com nome da tabela, crie um array chamado "data".
// Exiba o conteúdo do objeto "database" utilizando JSON.stringify

// Resultado
// {
//     "tables": {
//         "author": {
//             "columns": {
//                 "id": "number",
//                 "name": "string",
//                 "age": "number",
//                 "city": "string",
//                 "state": "string",
//                 "country": "string"
//             },
//             "data": []
//         }
//     }
// }
const colA = { name: "id", type: "number" };
const colB = { name: "name", type: "string" };
const colC = { name: "age", type: "number" };
const colD = { name: "city", type: "string" };
const colE = { name: "state", type: "string" };
const colF = { name: "country", type: "string" };

const kname = "name";
const kcols = "columns";
const kdata = "data";

let colsA = [colA, colB, colC, colD, colE, colF];
let datas = [];
let tbA = {
  [kname]: "author",
  [kcols]: colsA,
  [kdata]: datas
};

let colsB = [{ name: "user", type: "string" }, { name: "password", type: "string" }]
let tbB = {
  [kname]: "user",
  [kcols]: colsB,
  [kdata]: datas
};

const ktables = "tables";

let tables = [tbA, tbB]
let database = {
  [ktables]: tables
};

console.log(JSON.stringify(database));

console.log();

console.log("============================================================================");
console.log();

let statement = "create table author (id number, name string, age number, city string, state string, country string)";
let regExp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regExp);
const table = parsedStatement[1];
let extractedCols = parsedStatement[2];
let cols = extractedCols.split(", ");

const tableName = table;

const db = {
  tables: {
    [tableName]: {
      columns: {},
      data: []
    }
  }
};

for (let c of cols) {
  column = c.split(" ");
  const name = column[0];
  const type = column[1];
  db.tables[tableName].columns[name] = type;
}
console.log(JSON.stringify(db, undefined, " "));