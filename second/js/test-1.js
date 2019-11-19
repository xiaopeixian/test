let i = 2;
// i = 4,0,0,-8,-14
// fn = aaafff000
let fn = function (n) {
    // f = fn(1) n = 1,0,-1
    // fn(3) n = 3,2
    i *= 2;
    // i *= 2 => i = 2*2 = 4
    // i *= 2 => i = 0*2 = 0
    // return aaafff111
    // return aaafff222
    return function (m) {
        // f(2) => m = 2,3
        // fn(3)(4) => m = 4,5
        // f(5) => m = 5,6
        i -= (n--) + (++m);
        // i -= 1 + 3 i = i - 4 = 0
        // i -= 3 + 5 i = i - 8 = -8
        // i -= 0 + 6 i = i - 6 = -14
        console.log(i);
    }
};
let f = fn(1);
// f = aaafff111
f(2);
// 0
fn(3)(4);
// -8
f(5);
// aaafff111(5) => -14
console.log(i);//=>14