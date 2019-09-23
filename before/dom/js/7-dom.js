// siblings：获取所有兄弟元素节点
// @parameter：当前元素
// @return：所有兄弟元素节点
function siblings(curEle) {
  let curParent = curEle.parentNode,
      allChild = curParent.children,
      childList = [];
  for (let i = 0; i < allChild.length; i++) {
    allChild[i].nodeType === 1&&allChild[i]!==curEle ?childList.push(allChild[i]):null;
  }
  return childList
}
console.log(siblings(itemN));
