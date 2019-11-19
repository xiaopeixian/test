function Fn() {
  var n =10;
  this.m = n;
}
var f = new Fn();
console.log(f);

function hasPubProperty(obj,attr) {
  // =>OBJ：要检测的对象
  // =>ATTR：要检测的属性
  var isOwn = obj.hasOwnProperty(attr);
  if ( !isOwn && attr in obj) {
    return true
  }else{
    return false
  }
}
console.log(hasPubProperty(f,'m'));//=>false
console.log(hasPubProperty(f,'n'));//=>false
console.log(hasPubProperty(f,'toString'));//=>true
