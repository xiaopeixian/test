function queryURLParameter(str) {
  let newA = document.createElement('a');
  newA.href = str;
  let hash = newA.hash.substr(1);
  let search = newA.search.substr(1);
  console.log(search);
  let ary = {};
  hash?ary.hash=hash:null;
  if (search) {
    search = search.split('&');
    console.log(search);
    for (let i = 0; i < search.length; i++) {
      let seaAry = search[i].split('=');
      ary[seaAry[0]]=seaAry[1]
    }
  }
  console.log(ary);
  
}


var str ='http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher';
queryURLParameter(str)