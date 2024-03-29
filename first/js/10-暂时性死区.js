/*
var a = 12;
if (true) {
  console.log(a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 13; //=>基于let创建变量，会把大部分{}当做一个私有的块级作用域（类似于函数的私有作用域），在这里也是重新检测语法规范，看一下是否是基于新语法创建的变量，如果是按照新语法规范来解析
}
*/

/*
//console.log(a); //=>Uncaught ReferenceError: a is not defined

console.log(typeof a);//=>"undefined" 在原有浏览器渲染机制下，基于typeof等逻辑运算符检测一个未被声明过的变量，不会报错,返回undefined
*/

//console.log(a);//=> Uncaught ReferenceError: Cannot access 'a' before initialization

console.log(typeof a);//=> Uncaught ReferenceError: Cannot access 'a' before initialization
let a ; //=>如果当前变量是基于ES6语法处理，在没有声明这个变量的时候，使用typeof检测会直接报错，不会是undefined，解决了原有的js的死区