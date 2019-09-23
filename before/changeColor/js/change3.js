// 3. 字符串拼接
let oBox = document.getElementById('box');
let olist = oBox.getElementsByTagName('li');
// for (const i in olist) {
//   olist[i].className = 'color' + (i%3);
//   // 利用CSS的优先级 默认背景颜色基于样式类，鼠标滑过的样式高于样式类即可（ID选择器/行内样式 > 样式类）
//   olist[i].onmouseover = function () {
//     olist[i].style.background = 'white';
//   }
//   olist[i].onmouseout =function () {
//     olist[i].style.background = '';
//   }
// }

// 最常见的方法
//=>鼠标滑过：在原有样式类的基础上累加一个HOVER的样式类(由于HOVER在样式表中靠后，它的样式会覆盖原有BG中的样式)
//=>鼠标离开：把新增的HOVER样式类移除掉即可
// for (const i in olist) {
//   olist[i].className = 'color' + (i%3);
//   olist[i].onmouseover = function () {
//     this.className += ' change';
//   }
//   olist[i].onmouseout = function () {
//     this.className = this.className.replace('change',' ')
//   }
// }

// 第三种方法 
for (let i = 0; i < olist.length; i++) {
  olist[i].className = olist[i].oldClass = 'color' + (i%3);
  olist[i].onmouseover = function () {
    this.className = 'change';
  }
  olist[i].onmouseout = function () {
    this.className = this.oldClass;
  }
  
}