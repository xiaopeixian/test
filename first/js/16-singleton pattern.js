/* 单例设计模式（singleton pattern）
  1.表现形式
  var obj = {
    xxx:xxx,
    ...
  };
  在单例设计模型中，obj不仅仅是对象名，它被称为“命名空间[NameSpace]”，把描述事务的属性存放到命名空间中，多个命名空间是独立分开的，互不冲突
  2.作用
  =>把描述同一件事务的属性和特征进行“分组、归类”（存储在同一个堆内存空间中），因此避免了全局变量之间的冲突和污染
    var pattern1 = {name:'xxx'}
    var pattern2 = {name:'xxx'}
  3.单例设计模式命名的由来
  =>每一个命名空间都是JS中Object这个内置基类的实例，而实例之间是互相独立互不干扰的，所以我们称它为“单例：单独的实例”
*/

/*
var name = "陆相莹";
var age = 18;
var sex = "girl";

var name = "刘司南";
var age = 81;
var sex = "boy";
*/

/*
var person1={
    name:"陆相莹",
    age:18
};
var person2={
    name:"刘司南",
    age:81
};*/

/*高级单例模式
  1.在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行匿名函数，形成一个私有作用域AA（不销毁的栈内存），在AA中创建一个堆内存，把堆内存地址赋值给命名空间
  2.这种模式的好处：我们完全可以在AA中创造很多内容（变量or函数，哪些需要供外面调取使用的，我们暴露到返回的对象中（模块化实现的一种思想）
*/

/*
var nameSpace = (function() {
  var n = 12;
  function fn(params) {
    //...
  }
  return{
    fn:fn
  }
})()
*/

/*
var n = 2;
var obj = {
  
}
*/

/*
  模块化开发
  1.团队协作开发的时候，会把产品按照功能模块进行划分，每一个功能模块有专人负责开发
  2.把各个板块之间公用的部门进行提取封装，后期在想实现这个功能，直接的调取饮用即可（模块封装）
*/

var utils=(function () {
  return {
      aa:function () {

      }
  }
})();

//=>少帅
var skipRender = (function () {
  var fn = function () {
      //...
  };
  //...
  return {
      init: function () {

      },
      fn:fn
  }
})();
skipRender.init();

//=>敏洁
var weatherRender = (function () {
  var fn = function () {

  };
  return {
      init: function () {
          fn();//=>调取自己模块中的方法直接调取使用即可
          skipRender.fn();//=>调取别人模块中的方法
      }
  }
})();
weatherRender.init();