

// 2. 3个为一组循环
let oBox = document.getElementById('box');
let olist = oBox.getElementsByTagName('li');
for (let i = 0; i < olist.length; i+=3) {
  olist[i].className = 'color0';
  i+1<=olist.length-1?olist[i+1].className = 'color1':null;
  i+2<=olist.length-1?olist[i+2].className = 'color2':null;
}

/*
 * 三种方案
 *  1.依次遍历每一个LI，通过索引除以3取余数，让当前的LI有不同的背景色
 *  2.第一种的技巧，告别一个个的判断，直接采用数组或者直接找对应样式的方式来完成
 *  3.不是遍历每一个LI,而是遍历每一组
 */