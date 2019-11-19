/*
 * 有效数字
 *   1.正数 负数 零
 *   2.小数 整数
 *   -12.4
 *   -12
 *   12
 *   12.4
 *   0
 *   +2
 *   -2
 *   +0
 *   -0
 *   0.5
 *   =====下面两种不行
 *   02.4
 *   2.
 *   .5
 *
 *  分析规则：
 *    1.可以出现+/-号：可以没有，也可以有一个
 *    2.整数 0 12 9 : 一位或者多位数字，一位0~9，多位数字不能以0开头
 *    3.小数部分：可能有可能没有，有小数点后面至少要跟一位数字
 */
// let reg1 = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
// console.log(reg1.test(-1));

let str = 'xiao1996xiao1997xiao2019';
let reg = /\d+/g;
// console.log(reg.exec(str));
RegExp.prototype.myExec = function (str) {
  if (!this.global) {
    return this.exec(str)
  }
  let ary = [],
      reg = this.exec(str);
  console.log(reg);
  
  while (reg) {
    console.log(reg);
    ary.push(reg[0]);
    reg = this.exec(str);
  }
  return ary
}
console.log(reg.myExec(str));
console.log(str.match(reg));
