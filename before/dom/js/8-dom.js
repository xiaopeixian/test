// index：获取当前元素索引
// @parameter：当前元素
// @return：当前元素索引
function index(curEle) {
  let curParent = curEle.parentNode,
      childList = curParent.childNodes,
      curIndex = null;
  for (let i = 0; i < childList.length; i++) {
    console.log(curEle);
    // 传过来的是这个元素
    if (childList[i].id === 'curEle'.id) {
      curIndex = i;
    }
  }
  return curIndex ;
}
console.log(index(itemN));
