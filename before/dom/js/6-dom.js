// nextAll：获取所有弟弟元素节点
// @parameter：当前元素
// @return：所有弟弟元素节点
function nextAll(curEle) {
  let next = curEle.nextSibling;
  let nextList = [];
  while (next) {
    if (next.nodeType === 1) {
      nextList.push(next);
    }
    next = next.nextSibling
  }
  return nextList
}
console.log(nextAll(itemN));
