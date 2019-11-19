// 年龄：18到65之间
let reg = /((1[89])|([2-5]\d)|(6[0-5]))/;
console.log(reg.test(28));

// 编写一个规则：匹配 "[object AAA]"
let reg1 = /^\[object .+\]$/ ;
console.log(reg1.test("[object AAA]"));

// 编写一个正则匹配身份证号码
let reg2 = /^\d{17}(X|\d)$/;
console.log(reg2.test('440582199610232080'));

let reg3 = /(^\d{6})(\d{2})(\d{2})(?:\d{2})(\d{2})/;
console.log(reg3.exec('440582199610232080'));