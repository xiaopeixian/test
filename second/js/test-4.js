let Fn = function (x = 0, y = 0) {
  this.x = x;
  this.y = y;
  this.getX = function () {
      console.log(this.x);
  }
};
Fn.prototype.getY = function () {
  console.log(this.y);
};
Fn.prototype = {
  setX: function (val) {
      this.x = val;
  },
  getX: function () {
      console.log(this.x);
  }
};
let f1 = new Fn;
let f2 = new Fn(1, 2);
