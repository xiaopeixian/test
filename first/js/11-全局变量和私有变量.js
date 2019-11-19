/*
  变量提升：
    var a;var b;var c;
    fn = xxx...
 */

var a = 12,
    b = 13,
    c = 14;
function fn(a) {
  // 形参赋值 a = 12
  // 变量提升 var b;
  // 在私有作用域中，只有以下两种情况是私有变量 
  // A：声明过的变量（带var/function）
  // B：形参也是私有变量
  // 剩下的都不是自己私有的变量，都需要基于作用域链的机制向上查找
  console.log(a,b,c); //{12,undefined,14}
  var b = c = a = 20;
  console.log(a,b,c); //{20,20,20}
}
fn(a);//=> 把fn执行（小括号中是实参：值）=> 执行fn把全局变量a的值12当做实参传递给函数的形参 => fn(12)
console.log(a,b,c); //{12,13,20}
