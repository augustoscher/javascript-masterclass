const database = {
  tables: {},
  createTable(statement) {
    let regExp = /create table ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regExp);
    const tableName = parsedStatement[1];

    this.tables[tableName] = {
      columns: {},
      data: []
    }
    let extractedCols = parsedStatement[2];
    let cols = extractedCols.split(", ");

    for (let c of cols) {
      column = c.split(" ");
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    }
  },
  execute(statement) {
    if (statement.startsWith("create table")) {
      this.createTable(statement);
    }
  }
};


let abc = database.execute("create table author (id number, name string, age number, city string, state string, country string)");

console.log(JSON.stringify(database, undefined, "  "));
// console.log(database);