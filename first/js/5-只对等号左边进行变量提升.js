
//=>变量提升 var fn  
// sum能执行
sum()
fn()  //Uncaught TypeError: fn is not a function


//=>匿名函数之函数表达式
var fn = function () {
  console.log(1);
  // 代码执行到此处会给函数值赋值给fn
}
fn()
//=>普通函数
function sum() {
  console.log(2);
}