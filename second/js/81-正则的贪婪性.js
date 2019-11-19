let str = "xiao{123}xiao{2}xiao{23}xiao{123}";
let reg = /\{(\d+?)\}/g;
// console.log(str.match(reg));
let reg1 = /\d+?/g;
// console.log(str.match(reg1));
// console.log(reg1.exec(str));
// console.log(reg1.lastIndex);


str = str.replace(reg,(...arg)=>{
  console.log(arg);
  return "AA"
})
console.log(str);
