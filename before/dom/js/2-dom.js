// 获取当前元素的所有元素子节点
function allChild(ele) {
  let nodes = ele.childNodes,
      allList = [];
  for (let i = 0; i < nodes.length; i++) {
    let n = nodes[i];
    n.nodeType === 1?allList.push(n):null
  }
  return allList
}
console.log(allChild(box));
