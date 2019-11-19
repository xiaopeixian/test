// =>时间字符串格式化
// "2018/4/30 17:50:23" =>"04-30 17:50"

// let str = "2018/4/30 17:50:23";
// let str1 = str.split(" ")[0].split("/");
// let str2 = str.split(" ")[1].split(":");
// str1.forEach((item,index) => {
//   if (item.length<2) {
//     str1[index] = "0"+item;
//   }
// });
// str2.forEach((item,index) => {
//   if (item.length<2) {
//     str1[index] = "0"+item;
//   }
// });
// str1 = str1[1]+"-"+str1[2];
// str2 = str2[0]+":"+str2[1];
// str = str1+" "+str2;
// console.log(str,str1,str2);


let str = "2018/4/30 17:50:23";
// str = str.split(/\/| |\:/g);
str = str.split(/(?:\/| |:)/g);
let [,month,date,hour,time, ,] = str;
str1 = month+"-"+date+" "+hour+":"+time;
console.log(str1);
