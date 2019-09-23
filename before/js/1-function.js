/*
 * 任意数求和：不管函数执行的时候，传递多少实参值进来，我们都可以求和
 *
 * 形参有局限性：我们需要具体的知道用户执行的时候传递实参数量、顺序等，才可以使用形参变量定义对应的入口
 *
 * arguments：函数内置的实参集合（内置：函数天生就存在的机制，不管你是否设置了形参，也不管你是否传递了实参，ARGUMENTS都有，始终存在）
 */

// function fn() {
//   console.log(arguments);
//   /*
//    * ARG它是一个类数组(不是数组,不能直接使用数组中的方法)
//    *
//    * 即使设置形参变量,形参该是什么值还是什么值,但是ARG使用存储的是“所有”传递进来的实参，所以它被称为“实参集合”
//    *
//    * {
//    *   0:10,
//    *   1:20,
//    *   length:2,
//    *   callee:存储的是当前函数本身  arguments.callee===sum:true
//    * }
//    */
//   let result = null;
//   for (let i = 0; i < arguments.length; i++) {
//      result += arguments[i]
//   };
//   return result
// }
// fn();
// console.log(fn(12,23,12,43))

//=>升级版：在累加的时候，把字符串转换为数字，对于一些非有效数字，不再相加
function fn2() {
  let result = null;
  for (let i = 0; i < arguments.length; i++) {
    let item = Number(arguments[i]);
    isNaN(item)?null:result += item
  };
  return result
};

console.log(fn2(32,'dd'));
