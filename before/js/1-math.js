// 生成一个四位随机验证码
// =>数字+字母（简单）
// =>找图片
// =>滑动拼图
// =>点击汉字拼成语
//...
var box = document.getElementById('codeBox'),
    link = document.getElementById('link');

function queryCode() {
  let codeArea = 'abcdefghijklmnopqrstuvwxyz'
                  +'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  + '1234567890';
  console.log(codeArea.length);
  
  // 后面是字符串累加，不能用null，如果用null会变成 “nullxx”
  let code = '';
  for (let i = 0; i < 4; i++) {
    // 虽然codeArea虽然有62个数，但是由于索引是从0开始的，所以必须到61个
    let codeIndex = Math.round(Math.random()*61);
    let codeNumber = codeArea.charAt(codeIndex);
    code += codeNumber;
    
  }
  return code;
};

box.innerHTML = queryCode();
link.onclick = function () {
  box.innerHTML = queryCode();
}