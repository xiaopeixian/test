var box = document.getElementById('codeBox'),
    link = document.getElementById('link');

function queryCode() {
  let codeArea = 'abcdefghijklmnopqrstuvwxyz'
                  +'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                  + '1234567890';
  let code = '';
  // for (let i = 0; i < 4; i++) {
  //   let codeIndex = Math.round(Math.random()*61);
  //   let codeNumber = codeArea.charAt(codeIndex);
  //   // 用indexOf查找code里面codeNumber的位置，有则返回索引，没有则返回-1
  //   if (code.indexOf(codeNumber)>-1) {
  //     i--;
  //     continue;
  //   }
  //   code += codeNumber;
  // }
  // return code;
  while (code.length < 4) {
    let codeIndex = Math.round(Math.random()*61);
    let codeNumber = codeArea.charAt(codeIndex);
    if (code.indexOf(codeNumber)===-1) {
      code += codeNumber;
    }
  }
  return code;
};

box.innerHTML = queryCode();
link.onclick = function () {
  box.innerHTML = queryCode();
}