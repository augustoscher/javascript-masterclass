

const DatabaseError = function (statement, message) {
  this.message = `${message}: ${statement}`;
}

const database = {
  tables: {},
  createTable(statement) {
    const regExp = /create table ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regExp);
    let [, tableName, columns] = parsedStatement;

    this.tables[tableName] = {
      columns: {},
      data: []
    }

    columns = columns.split(", ");
    for (let c of columns) {
      column = c.split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  },
  insert(statement) {
    const regExp = /insert into ([a-z]+) \((.+)\) ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regExp);

    let [, tableName, columns, , values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");

    const row = {};
    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i];
    };
    this.tables[tableName].data.push(row);
  },
  select(statement) {
    //grupo de captura opcional
    const regExp = /select (.+) from ([a-z]+)(?: where (.+))?/;
    const parsedStatement = statement.match(regExp);

    let [, columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");

    let rows = this.tables[tableName].data;
    if (whereClause) {
      whereClause = whereClause.split(" = ");
      const [columnWhere, valueWhere] = whereClause;

      rows = rows.filter(row => {
        return (row[columnWhere] === valueWhere);
      });
    }

    rows = rows.map((item) => {
      let obj = {};
      columns.forEach(column => {
        obj[column] = item[column];
      });
      return obj;
    });
    console.log(rows);
  },
  execute(statement) {
    if (statement.startsWith("create table")) {
      this.createTable(statement);
    } else if (statement.startsWith("insert into")) {
      this.insert(statement);
    } else if (statement.startsWith("select")) {
      this.select(statement);
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
  database.execute("select name, age, id from author where id = 1");
  console.log();
  database.execute("select name, age from author");
} catch (e) {
  console.log(e.message);
}
