let a = 0,
    b = 0;
function A(a) {
    A = function (b) {
        alert(a + b++);
    };
    alert(a++);
}
A(1);
/* 
a = 1,2
A = aaafff000
=> 1
*/
A(2);
/*
=> 2 + 2 = 4
*/