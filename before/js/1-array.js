// 数组去重
var ary1 = [1,24,54,2,1,1,43,24,1];

// 解决方法一
// function noRepeat(n) {
//   for (let i = 0; i < n.length-1; i++) {
//     for (let index = i+1; index < n.length; index++) {
//       if (n[index]===n[i]) {
//         n.splice(index,1)
//          /*
//           * 这样做会导致数组塌陷问题：当我们把当前项删除后，后面每一项都要向前进一位，也就是原有数组的索引发生了改变，此时我们k继续累加1，下一次在拿出来的结果就会跳过一位
//           * 原数组 [1,2,3,4]
//           * i=1 =>2 我们把这一项干掉，然后i++，i=2
//           * 原数组 [1,3,4]
//           * i=2这一项是4,3这一项就错过了
//           * ...
//           */
//          index--
//       }
//     }
//   }
//   console.log(n);
// }
// noRepeat(ary1);

function cantRepeat(data) {
  let newArray = {};
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    newArray[item] = item;
  }
  console.log(newArray);
}
cantRepeat(ary1)


// for (var i = 0; i < ary.length; i++) {
//   var item = ary[i];//=>每一次循环从数组中拿出来的这一项

//   //=>存储之前需要做判断：如果对象中已经存在这个属性了，说明当前ITEM在之前出现过，也就是当前项重复了，我们把当前项删掉
//   if (typeof obj[item] !== 'undefined') {
//       /* ary.splice(i, 1);
//        * i--;//=>防止数组塌陷
//        *
//        * 这种删除方式不好，如果数组很长，我们删除某一项，后面索引都需要重新计算，非常耗性能
//       */

//       /*
//        * 1.我们把数组最后一项的结果获取到，替换当前项内容
//        * 2.在把数组最后一项删除
//        * [12,23,34,56] 想要删除23
//        *    先让56替换23 [12,56,34,56]
//        *    在把最后一项删除 [12,56,34]
//        */
//       ary[i] = ary[ary.length - 1];
//       ary.length--;
//       i--;
//       continue;
//   }
//   //=>把这一项作为对象的属性名和属性值存储进去
//   obj[item] = item;//=>obj[1]=1 =>{1:1}
// }