/*
function Fn() {
  var n = 10;
  this.m = 100;
}
Fn.prototype.aa = function () {
  console.log('aa');
};
Fn.bb = function () {
  console.log('bb');
};
// =>普通函数
Fn();//=>this:window  有一个私有变量 n 和原型以及属性bb没有关系

// =>构造函数执行
var f = new Fn;//=>this:f
console.log(f.n);//=>undefined:n是私有变量和实例没有关系
console.log(f.m);//=>实例通过__proto__找到Fn.prototype上的方法
console.log(f.bb);//=>undefined：bb是把Fn当做一个普通的对象设置的属性而已，和实例等没有半毛钱关系

// =>普通对象
// Fn.bb()
*/

// console.dir(Array);

// JQ这个类库中提供了很多的方法,其中有一个部分是写在原型上,有一部分是把它当做普通对象来设置的
~function () {
  function JQuery() {
    // ...
    return [JQ实例]
  }
  JQuery.prototype.animate = function () {}
  //...
  JQuery.ajax = function (params) {}
  //...
  window.JQuery = window.$ = JQuery
}()
// $().ajax()//=>调不了
// $().animate() //=>这样可以调取
// $.ajax()  //=>直接的对象键值对操作
// $.animate() //=>对象上没有animate这个属性，这个属性在和实例相关的原型上
