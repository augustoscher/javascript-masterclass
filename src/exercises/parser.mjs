export default class Parser {

  constructor() {
    this.commands = new Map();
    this.commands.set("createTable", /create table ([a-z]+) \((.+)\)/);
    this.commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    this.commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);
    this.commands.set("insert", /insert into ([a-z]+) \((.+)\) ([a-z]+) \((.+)\)/);
  }

  parse(statement) {
    for (let [command, regExp] of this.commands) {
      let parsedStatement = statement.match(regExp);
      if (parsedStatement) {
        return {
          command,
          parsedStatement
        }
      }
    }
  }

}