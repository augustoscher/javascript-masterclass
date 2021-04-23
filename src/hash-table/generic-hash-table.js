// HashTable examples
// https://javascript.plainenglish.io/algorithm-in-javascript-hash-table-7b0464d2b81b

// const Faker = require("faker");

class HashTableLinearP {
  constructor() {
    this.table  = new Array(137);
    this.values = new Array();
  }

  // Defining the hashing function which allows a sting to be used as a key
  hash(string) {
    const H   = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length -1
    }
    return parseInt(total);
  }

  put(key, data) {
    let pos = this.hash(key);
    if(this.table[pos] === undefined) {
      this.table[pos]  = key;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos]  = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

(async function(){
  // ex1
  const hash = new HashTableLinearP()
  console.time('HashTableLinearP')

  for (let i = 0; i < 100000; i++){
    let v = makeid()
    hash.put(v, { id: i+1, v });
  }

  console.timeEnd('HashTableLinearP')


  //ex2
  const m = new Map()
  console.time('Map')

  for (let i = 0; i < 100000; i++){
    let v = makeid()
    m.set(v, { id: i+1, v });
  }
  console.timeEnd('Map')

})()