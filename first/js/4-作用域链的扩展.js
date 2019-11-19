function fn( ) {
  //console.log(b);// Uncaught ReferenceError: b is not defined
   let b = 13;
  console.log(b);//13
};
fn();
console.log(b);//13

let a = 13;
console.log(a);//13
console.log(window.a);//undefined