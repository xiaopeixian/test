/*
 * 解构赋值：按照一个数据值的结构，快速解析获取到其中的内容
 *   1.真实项目中一般都是针对于数组或者对象进行结构赋值
 */
let ary = [1,2,3,4,5];

//=>基于ES6中的展开运算符完成
// console.log(Math.max(...ary));

// 对象解构赋值
let obj = { name:"xiao",age : 10,score : [12,34,54]};
let {name:a,score:[b,...c]} = obj;  //=>对象解构赋值默认情况下要求：左侧变量名和对象中的属性名一致才可以
console.log(a,b,c); //=>给解构的属性名起别名作为我们使用的变量

let {sex='boy'} = obj;  //=>给没有的属性设置默认值
console.log(sex);

let fn = function ({
                       name = '珠峰',
                       age = 0
                   } = {}) {//=>把传递的对象解构了(不传递值,默认赋值为空对象：现在传递对象或者不传递，形参接收到的都是对象)，解构的时候，可以把传递进来对象中，如果某个属性不存在，我们赋值默认值
    console.log(name, age);

};
fn({
    // name: 'xxx',
    age: 25
});
console.log(fn);


// 数组解构赋值
// let [a,...b] = ary;  //“...”在此处称之为剩余运算符：除了前面以外的项，都放在一个数组中
// console.log(a,b);

// let [a,b,c,d,e = 0,f = 0] = ary;  //=>在解构的时候可以给变量设置默认值：如果当前变量对应结构中的这一项没有值，变量用默认值
// console.log(a,b,c,d,e,f);


// let [a,,b] = ary;
// console.log(a,b);

// 互换位置
// let a = 1,
//     b = 2;
// [a,b] = [b,a];
// console.log(a,b);
