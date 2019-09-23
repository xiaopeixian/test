let str = '2019-8-8 12:12:6',
    str1 = str.split(' '),
    date2 = str1[0].split('-'),
    time2 = str1[1].split(':');
date2.shift();
time2.pop(); 
function addZero(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].length<2?data[i] = '0' + data[i]:null
  }
}
addZero(date2);
addZero(time2);
let date3 = date2[0] + '月' + date2[1] + '日' + ' ' + time2[0] + '时' + time2[1] + '分';
console.log(date3);
