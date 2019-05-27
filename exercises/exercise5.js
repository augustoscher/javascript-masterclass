
const DatabaseError = function (statement, message) {
  this.message = `${message}: ${statement}`;
}

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
  insert(statement) {
    let regExp = /insert into ([a-z]+) \((.+)\) ([a-z]+) \((.+)\)/;
    let parsed = statement.match(regExp);

    const tableName = parsed[1];
    const atributes = parsed[2].split(", ");
    const values = parsed[4].split(", ");

    const obj = {};
    for (let i = 0; i < atributes.length; i++) {
      obj[atributes[i]] = values[i];
    };
    this.tables[tableName].data.push(obj);
  },
  execute(statement) {
    if (statement.startsWith("create table")) {
      this.createTable(statement);
    } else if (statement.startsWith("insert into")) {
      this.insert(statement);
    } else {
      throw new DatabaseError(statement, "Syntax error")
    }
  }
};

try {
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
  console.log(JSON.stringify(database, undefined, "  "));
} catch (e) {
  console.log(e.message);
}
