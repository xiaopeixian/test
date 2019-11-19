/**
 * var num ; var obj ; var fn 
 */

var num = 10; //30
var obj = {num: 20};
// var obj = {num : 20 ;fn = aaafff111}
/**
 * 参数赋值 num = 10  
 * 参数 num = 10 + 10 =20 ,21 ,22
 * 注意! 这里的this相当于window
 * window.num = 20 + 10 = 30
 * return aaafff111
 */
obj.fn = (function (num) {
    num = this.num + 10;
    this.num = num + 10;
    return function () {
      this.num += ++num;
    }
})(num);

//fn = aaafff111
var fn = obj.fn;
// this.num = 30 + 21 = 51
fn();
// this.num = 20 + 22 = 42
obj.fn();
console.log(num, obj.num);