let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a,b);

let e = 10;
let d = 20;
e = e + d;
d = e - d;
e = e - d;
console.log(e,d);

let f = 10;
let g = 20;
[f,g] = [g,f];
console.log(f,g);