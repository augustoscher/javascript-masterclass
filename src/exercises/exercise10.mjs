
// node --experimental-modules exercise10.mjs
import Database from './database';

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
