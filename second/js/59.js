/**
 * 编写一个方法fn，实现任意数求平均数,去掉数字中的最大和最小然后再求平均数，保留小数点后面两位
 */

 let ary = [1,2,3,4,5,6];
 let fn = function (...ary) {
   ary.length>2?(ary.sort(
    function (a,b) {
     return a-b
    }
  ).shift(),ary.pop()):null;
   console.log((eval(ary.join('+'))/ary.length).toFixed(2) );
 }
fn(1,2,4)

let fn2 = function () {
  //=>arguments:类数组(不能直接调取数组原型上的方法)
  // let newAry = [];
  //=>把ARG类数组转换为数组ARY（把类数组克隆一份一模一样的，最后存储到数组中）  =>数组的SLICE可以实现克隆的
  //=>把内置的SLICE方法执行 Array.prototype.slice() / [].slice() ...
  let ary = [].slice.call(arguments, 0);//=>类数组借用数组原型上的方法执行,实现相关的操作(借用SLICE实现把类数组转换为数组)  前提：类数组和数组类似，都有length和索引（字符串也符合这个前提，所以也可以这样搞）

    /* [].sort.call(arguments, function (a, b) {
      return a - b;
  });//=>借用SORT给ARG排序，除此之外其它的很多数组的方法都可以被ARG借用*/

  // for (let i = 0; i < arguments.length; i++) {
  //   newAry.push(arguments[i])
  // }
  // console.log(newAry);
//   newAry.length>2?(newAry.sort(
//     function (a,b) {
//      return a-b
//     }
//   ).shift(),newAry.pop()):null;
//    console.log((eval(newAry.join('+'))/newAry.length).toFixed(2) );
// }
// fn2(2,3,4)

=>重写数组的slice方法，实现：ary.slice()相当于把ary克隆一份新数组
Array.prototype.mySlice = function mySlice() {
  console.log(this);
  let newAry = [];
  for (let i = 0; i < this.length; i++) {
    newAry.push = this[i]
  }
  return newAry;
  
}
let ary1 = [12,23,34];
let newAry = ary1.mySlice();
console.log(newAry===ary1)
