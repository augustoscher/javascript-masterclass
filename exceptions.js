const thisClass = "Exceptions";
console.log(`Class of ${thisClass}`);
//qualquer tipo de dado pode ser lançado como um erro,
//interrompendo o fluxo de execução.

const Rectangle = function (x, y) {
  this.x = x;
  this.y = y;
  this.calculateArea = function () {
    if (this.x <= 0 || this.y <= 0) {
      throw "Invalid value for x or y."
    }
    return this.x * this.y;
  };
};

try {
  let rec = new Rectangle(10, 2);
  console.log(rec.calculateArea());
  rec = new Rectangle(10, -2);
  console.log(rec.calculateArea());
} catch (e) {
  console.log("error found: " + e);
}
