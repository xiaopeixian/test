// 当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和他在哪执行的没有关系和他在哪创建（定义）的有关系，在哪创建的，它的上级作用域就是谁
var a = 12;

/*
function fn( ) {
  // arguments:实参集合
  // arguments.callee:函数本身fn
  // arguments.callee.caller:当前函数在哪执行的，caller就是谁（记录的是她执行的宿主环境），在全局下执行caller的结果是null
  console.log(arguments.callee);
}

fn();

function sum( ) {
  var a = 120;
  fn();
}
sum();
*/

var n = 10;

function fn() {
  var n = 20;
  function f() {
    n++;
    console.log(n);
  }
  f();
  return f;
}
var x = fn();
x();
x();
console.log(n);
