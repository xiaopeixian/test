Object.prototype.x = 100;
function Fn() {
  this.x = 10;
  this.y = 20;
}
Fn.prototype.y = 200;
Fn.prototype.sum = function () {
  console.log(this.x + this.y);
};
var f = new Fn;
console.log(f.sum === Fn.prototype.sum);  //  true
f.sum();  //=>30
Fn.prototype.sum(); //=>300
console.log(f.constructor); //=>Fn

