  /**
   * 形参
   *   x = 10
   *   y = undefined  y也是私有变量，不是没赋值，而是赋值为undefined
   * ARG
   *  0:10
   * length：1
   * 
   * ARG和形参之间的映射是以ARG的索引为基础完成的，ARG中有这个索引，浏览器会完成和对应形参变量中的映射机制搭建，如果形参比ARG中个数多，那么多出来的形参是无法和ARG中对应的索引建立关联的
   */

 
function fn(x,y) {
  var arg = arguments;
  arg[0] = 100;
  /**
   * x = 10 y = undefined
   * 
   * arg
   *  0:10
   *  1:300
   *  length:1
   */
  console.log(x);//=>100

  // y = 200;
  console.log(arg[1]);//=>undefined

  arg[1] = 300;
  // arg: 0:10 1:300 length:2
  y = 400;
  console.log(arg[1]);

  // =>arguments和形参的映射机制建立在函数执行后形参赋值的一瞬间，此时能建立映射机制的建立映射机制，不能建立起来的，以后不管怎么操作都无法再建立了
}
fn(10);


// =>JS严格模式
// >在当前作用域的“第一行”添加“use strict”即可，这样在当前作用域中就开启了JS的严格模式

//"use strict";//=>整个JS都开启了严格模式（只对当前这个JS文件中的代码生效，下一个JS文件需要开启严格模式，第一行还需要再次编写），真实项目中，我们一般都会把所有JS文件合并压缩为一个导入到页面中

function fn() {
  "use strict";//=>只在当前作用域中使用严格模式
}

~function () {
  "use strict";
  // ...
}();