var num = 10;var obj = {num:20};
// window.num = 22,32
// obj = {num : 20 ; fn = aaafff111 } 
obj.fn = (function (num) {
  // this:window window.num = 20+2 = 22
  this.num = num + 2;
  return function (n) {
    this.num += n;
    num--;
    // 19
    console.log(num);
  }
})(obj.num);
var fn = obj.fn ; // aaafff111
// this:window window.num = 22+10 = 32
// =>19
fn(10) ; 
// this:obj obj.num = 20 + 20 = 40
obj.fn(20);
console.log(num,obj.num);
// =>32 40
