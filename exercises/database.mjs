

import DatabaseError from './database_error';
import Parser from './parser';

export default class Database {

  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

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
  }

  insert(parsedStatement) {
    let [, tableName, columns, , values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");

    const row = {};
    for (let i = 0; i < columns.length; i++) {
      row[columns[i]] = values[i];
    };
    this.tables[tableName].data.push(row);
  }

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
    return rows;
  }

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
  }

  execute(statement) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = this.parser.parse(statement);
        if (result) {
          resolve(this[result.command](result.parsedStatement));
        }
        reject(new DatabaseError(statement, "Syntax error"));
      }, 1000);
    });
  }

}