// next：返回下一个弟弟元素节点
// @parameter：当前元素
// @return：下一个弟弟元素节点
// xiao2019.9.17
function next(curEle) {
  let next = curEle.nextSibling;
  while (next && next.nodeType !==1) {
    next = next.nextSibling
  }
  return next
}
console.log(next(itemN));
