/*
 在ES6中基于LET/CONST等方式创建变量或者函数不存在变量提升机制
  =>切断了全局变量和WINDOW属性的映射机制

  =>在相同的作用域中，基于LET不能声明相同名字的变量(不管用什么方式，在当前作用域下声明了变量，再次使用let创建都会报错)

  虽然没有变量提升机制，但是在当前作用域代码自上而下执行之前，浏览器会做一个重复性检测（语法检测）：自上而下查找当前作用域下所有变量，一旦发现有重复的，直接抛出异常，代码也不会再执行了（虽然没有把变量提前声明定义，但是浏览器已经记住了，当前作用域下有哪些变量）
 */

/*
console.log(a);  //=>Uncaught ReferenceError: Cannot access 'a' before initialization

let a = 12;
console.log(window.a);  //undefined
console.log(a); //=>12
*/

/*
let a = 12;
console.log(a);
let a = 13;//=>Uncaught SyntaxError: Identifier 'a' has already been declared
console.log(a);
*/

b = 12;
console.log(b);
a = 12; //Uncaught ReferenceError: Cannot access 'a' before initialization
console.log(a);
let a = 13;
console.log(a);




let a = 10,
    b = 10;
let fn = function ( ) {
  //console.log(a,b);////=>Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = b = 20;
  // let a = 20,b = 20 把全局的b修改为20
  console.log(a,b);
};
fn();
console.log(a,b);

