// 实现隔行变色

//=>1、获取BOX中所有的LI（我们需要先获取BOX)
var oBox = (document.getElementById('box'));
// =>想要修改BOX的样式
// 1.通过sytle修改行内样式
// oBox.style.backgroundColor = 'pink';
// 2.基于CLASS-NAME属性修改BOX的样式类，从而改变样式
// oBox.className += ' bgcolor'

// =>想要修改LI的背景颜色
var boxList = oBox.getElementsByTagName('li');
// 搞一个循环来完成我们的样式赋值
// for (let i = 0; i < boxList.length; i++) {
//   // 所有是奇数代表偶数行
//   if (i%2 !== 0) {
//     boxList[i].style.backgroundColor = "yellow"
//   }
// }
console.dir(boxList);


for (let i = 0; i < boxList.length; i++) {
  changeColor(i);

  // =>实现鼠标滑过高亮显示
  // 添加onmouseover事件和onmounseout事件 -> 鼠标移入高亮移除恢复
  boxList[i].onmouseover = function() {
    boxList[i].style.backgroundColor = "rgb(233, 245, 179)"
  };
  boxList[i].onmouseout = function() {
    changeColor(i)
  };
}

// => 实现隔三行变色
function changeColor(i) {
  switch (i%3) {
    case 0:
      boxList[i].style.backgroundColor = "rgb(224, 240, 245)"
      break;
    case 1:
      boxList[i].style.backgroundColor = "rgb(183, 201, 207)"
      break;
    default:
      boxList[i].style.backgroundColor = "rgb(210, 225, 230)"
      break;
  }
}


