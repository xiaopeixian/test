// previousEleSibling：获取当前元素的上一个哥哥元素节点
// @parameter：当前元素
// @return：上一个哥哥元素节点
// xiao 2019.9。17
function previousEleSibling(ele) {
  let nodes = ele.previousSibling;
  // nodes !==null 没有nodes就是null  nodeType验证是否有元素
  while (nodes && nodes.nodeType !== 1) {
    nodes = nodes.previousSibling
  }
  return nodes;
}
console.log(previousEleSibling(itemN));
