// preAll：获取所有哥哥元素节点
// @parameter：当前元素
// @return：所有哥哥元素节点
function preAll(curEle) {
  let pre = curEle.previousSibling;
  let preList = [];
  while (pre) {
    if (pre.nodeType === 1) {
      preList.push(pre);
    }
    pre = pre.previousSibling
  }
  return preList
}
console.log(preAll(itemN));
