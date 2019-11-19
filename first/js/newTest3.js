function fn() {
  var i = 5;
  // i = 4
  return function (n) {
    console.log(n * (--i));
  }
}
var f = fn();
f(10);  // 10*4 = 40
fn()(10); // 4*10 = 40
fn()(20); // 4*20 = 80
f(20);  // 20*3 = 60

