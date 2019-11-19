/**
 * 获取数组中的最大值（最小值）
 */
let ary = [12,43,54,76,32,45];
// 遍历
let max = ary[0];
for (let i = 0; i < ary.length; i++) {
  max<ary[i]?max = ary[i]:null;
}
console.log(max);
// 排序
console.log(ary.sort(
  function (a,b) {
    return b-a
  }
)[0]);

// 基于eval把字符串转化为JS表达式
console.log(eval(`Math.max(` + ary.toString() + ')'));

console.log(Math.max.apply(null,ary));


/*
1.eval：把字符串转换为JS表达式
eval("1+2") =>3

2.括号表达式（小括号的应用）
用小括号包起来，里面有很多项（每一项用逗号分隔），最后只获取最后一项的内容（但是会把其它的项也都过一遍）
(function(){
    console.log(1);
},function(){
    console.log(2);
})();
=>2

let a=1===1?(12,23,14):null;
=>a=14

不建议大家过多使用括号表达式，因为会改变THIS
*/