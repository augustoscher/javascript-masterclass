export default class DatabaseError {

  constructor(statement, message) {
    this.statement = statement;
    this.message = message;
    this.generateMessage();
  }

  generateMessage() {
    this.message = `${this.message}: ${this.statement}`;
  }

}