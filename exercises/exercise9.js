class DatabaseError {

  constructor(statement, message) {
    this.statement = statement;
    this.message = message;
    this.generateMessage();
  };

  generateMessage() {
    this.message = `${this.message}: ${this.statement}`;
  };
};

class Parser {

  constructor() {
    this.commands = new Map();
    this.commands.set("createTable", /create table ([a-z]+) \((.+)\)/);
    this.commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    this.commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);
    this.commands.set("insert", /insert into ([a-z]+) \((.+)\) ([a-z]+) \((.+)\)/);
  };

  parse(statement) {
    for (let [command, regExp] of this.commands) {
      let parsedStatement = statement.match(regExp);
      if (parsedStatement) {
        return {
          command,
          parsedStatement
        };
      }
    }
  };

};

class Database {

  constructor() {
    this.tables = {};
    this.parser = new Parser();
  };

  createTable(parsedStatement) {
    let [, tableName, columns] = parsedStatement;

    this.tables[tableName] = {
      columns: {},
      data: []
    }

    columns = columns.split(", ");
    for (let c of columns) {
      let column = c.split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  };

  insert(parsedStatement) {
    let [, tableName, columns, , values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");

    const row = {};
    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i];
    };
    this.tables[tableName].data.push(row);
  };

  select(parsedStatement) {
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
  };

  delete(parsedStatement) {
    let [, tableName, whereClause] = parsedStatement;

    if (whereClause) {
      whereClause = whereClause.split(" = ");
      const [columnWhere, valueWhere] = whereClause;

      this.tables[tableName].data = this.tables[tableName].data.filter(row => {
        return row[columnWhere] !== valueWhere;
      });

    } else {
      this.tables[tableName].data = [];
    }
  };

  execute(statement) {
    const result = this.parser.parse(statement);
    if (result) {
      this[result.command](result.parsedStatement);
    } else {
      throw new DatabaseError(statement, "Syntax error");
    }
  };
};

try {
  const database = new Database();
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
  console.log(JSON.stringify(database, undefined, "  "));

  console.log();
  console.log("select name, age, id from author where id = 1");
  database.execute("select name, age, id from author where id = 1");

  console.log();
  console.log("select name, age from author");
  database.execute("select name, age from author");

  console.log();
  console.log("delete from author where id = 2");
  database.execute("delete from author where id = 2");

  console.log();
  console.log("select name, age from author");
  database.execute("select name, age from author");

  console.log();
} catch (e) {
  console.log(e.message);
}
