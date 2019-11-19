// let fn = function (x,y) {
//   return x+y
// }

// let fn = (x,y) =>{

// }

// let fn = (x,y) => x + y ;  //=>如果函数体中只有一句操作，并且是RETURN的，我们可以省略大括号（给形参设置默认值）
// console.log(fn1(1,2));

// let fn = x => y => x + y;
// /*
//  var fn = function fn(x) {
//   return function (y) {
//     return x + y;
//   };
//  };
//  */

//1.箭头函数中没有arguments
// let fn = (...arg) =>{
//   //console.log(arguments)  //Uncaught ReferenceError: arguments is not defined
//   console.log(arg); //=>可以使用剩余运算符代替，而且ARG是一个数组
  
// }
// fn(12,432)

//2.箭头函数中没有自己的执行主体(THIS)，它的THIS都是继承上下文中的THIS
/*
let obj = {
    fn: (function () {
        //=>this:window
        let _this = this;//=>window
        return function () {
            // console.log(this);
            console.log(_this);//=>_this只是一个变量，不是私有的，找上级作用域中的
        }
    })()
};
// obj.fn();//=>this:obj  如果我想让obj.fn执行,this也是window，该如何处理?
// obj.fn.call(window);//=>this:window
*/

let obj = {
    fn: (function () {
        //=>this:window
        return () => {
            console.log(this);
        }
    })()
};
obj.fn();//=>this:window 箭头函数执行和是否有点，点前面是谁都没关系了，因为它没有自己的执行主体，在箭头函数中使用到的THIS都是直接找上下文中的THIS来使用
