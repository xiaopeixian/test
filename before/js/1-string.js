let webSite =  'http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man';
let indexAsk = webSite.indexOf('?'),
    indexWell = webSite.indexOf('#');
    format = [];
if (indexWell>-1) {
  format = webSite.slice(indexAsk+1,indexWell)
}else{
  format = webSite.slice(indexAsk+1)
}
let info = format.split('&'),
    obj1 = {};
for (let i = 0; i < info.length; i++) {
  let data = info[i].split('=');
  obj1[data[0]] = data[1];
}
console.log(obj1);
