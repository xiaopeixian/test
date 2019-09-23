function queryAllById(id) {
  let allItem = document.getElementsByTagName('*');
  let idList = [];
  for (let i = 0; i < allItem.length; i++) {
    let n = allItem[i];
    if (n.id == id) {
      idList.push(n)
    }
  }
  return idList
}
console.log(queryAllById('HAHA'));

// 在JS中默认会把元素的ID设置为变量，不需要自己获取设置，而且ID重复获取的结果就是一集合
// 包含所有ID项，不重复就是一个元素对象，类似于（ById）获取的结果
console.log(HAHA);


