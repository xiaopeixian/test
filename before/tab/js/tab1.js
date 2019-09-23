
var box = document.getElementById('tabBox');
// 获取标签li
var list = box.getElementsByTagName('li');
// 获取所要显示的内容 content
var content = box.getElementsByTagName('div');
// 遍历li，并给li添加click事件
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    changeTab(i)
  }
};
function changeTab(n) {
  for (let i = 0; i < content.length; i++) {
    if(list[i].className != list[n].className){
      list[i].className = '';
      content[i].className = '';
    }
  }
  list[n].className = 'active';
  content[n].className = 'active';
}
