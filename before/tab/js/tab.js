window.onload = function (){
  
  var box = document.getElementById('tabBox');
  console.dir(box);
  // 获取标签li
  var list = box.getElementsByTagName('li');
  // 获取所要显示的内容 content
  var content = box.getElementsByTagName('div')
  console.log(content);
  // 遍历li，并给li添加click事件
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
      for (let index = 0; index < content.length; index++) {
        content[index].className = '';
        list[index].className = ''
      };
      content[i].className = 'active';
      list[i].className = 'active';
    }
  }
};
