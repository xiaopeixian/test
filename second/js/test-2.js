let n = 1;
let x = { // aaafff000
    n: 2,
    // y: 自执行函数
    y: (function (n) {
        n = n || 3;
        // n = 1,7,14
        // return aaafff111
        return function (m) {
            // x.y(5)
            // m = 5,6,7
            // z(6)
            // m = 6
            m = m || 4;
            // m = 5
            // m = 6,7,8
            this.n += m++;
            // this.n = 2 + 5 = 7
            // this.n = window.n = undefined + 6 = undefined
            n += ++m;
            // n = 7 + 7 = 14
            // n = 14 + 7 = 21
            console.log(n);
            // => 14
        }
    })(window.n)
};
let z = x.y;
// z = aaafff111
x.y(5);
// 14
z(6);
// 21
// aaafff111(6)
console.log(n, x.n, window.n);
