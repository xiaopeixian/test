
window.name = "WINDOW";
let fn = function () {
  console.log(this.name)
};
let obj1 = {
  name : "OBJ1",
  fn : fn
}
let obj2 = {
  name : "OBJ2"
}
obj1.fn();
// obj2.fn();  报错

/*
 * call
 *  1. [fn].call([this],[param]...)
 *   fn.call：当前实例(函数FN)通过原型链的查找机制，找到Function.prototype上的call方法  =>function call(){[native code]}
 *   fn.call()：把找到的call方法执行
 *
 *   当call方法执行的时候，内部处理了一些事情
 *    =>首先把要操作函数中的THIS关键字变为CALL方法第一个传递的实参值
 *    =>把CALL方法第二个及第二个以后的实参获取到
 *    =>把要操作的函数执行，并且把第二个以后的传递进来的实参传给函数
 */
fn.call(obj1) //this:obj1
fn.call(obj2) //this:obj2

// document.onclick = fn;
// document.onclick = fn();
// document.onclick = fn.call(obj)
// document.onclick = fn.bind(obj)  bind 预先把 this 处理为 obj ，点击的时候才执行

function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}

fn1.call(fn2);  
fn1.call.call(fn2); 
Function.prototype.call(fn1); 
Function.prototype.call.call(fn1)

/*
 * CALL中的细节
 *   1.非严格模式下，如果参数不传，或者第一个传递的是null/undefined，THIS都指向WINDOW
 *   2.在严格模式下，第一个参数是谁，THIS就指向谁（包括null/undefined），不传THIS是undefined
 */

/*
 * apply：和call基本上一模一样，唯一区别在于传参方式
 *   fn.call(obj,10,20)
 *   fn.apply(obj,[10,20]) APPLY把需要传递给FN的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给FN一个个的传递
 */

 /*
 * bind：语法和call一模一样，唯一的区别在于立即执行还是等待执行
 *   fn.call(obj,10,20) 改变FN中的THIS,并且把FN立即执行
 *   fn.bind(obj,10,20) 改变FN中的THIS,此时的FN并没有执行（不兼容IE6~8）
 */