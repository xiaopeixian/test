// es6方式实现任意数求和
let fn = (...arg) => eval(arg.filter(item => !isNaN(item)).join('+')) 
console.log(fn(12,'23'));
// filter 遍历了arg，用箭头后面的条件过滤它，返回的是符合条件的项组成的数组
// isNaN 在判断的同时会把item转化为数字
