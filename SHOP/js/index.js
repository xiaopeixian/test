let listBox = document.getElementsByClassName('list')[0];
let headerBox = document.getElementById('header');
let linkList = headerBox.getElementsByTagName('a');
console.log(linkList);


let productList = listBox.getElementsByTagName('li');
// console.log(productList);

~function () {
  /*
  * 1.获取数据和实现数据绑定
  *  =>真实项目中，页面中大部分数据都不是写死的，而是动态绑定的
  *   A:从服务器端获取到数据（基于AJAX/JSONP等技术，通过服务器端提供的数据API接口地址，把数据请求回来）
  *   B:把获取的数据进行解析
  *   C:把数据绑定在HTML页面中(数据绑定)：ES6中的模板字符串
  */
  let productData = null;
  let xhr = new XMLHttpRequest(); //创建AJAX实例
  xhr.open('GET','./json/product.json',false)  // 打开一个请求的地址 最后一个参数是设置同步还是异步，false：同步，true：异步。
  xhr.onreadystatechange = () =>{
    xhr.readyState === 4?productData = xhr.responseText:null;
  }
  xhr.send(null);
  //=>获取的结果是一个字符串:"JSON格式的字符串"，我们此时需要把获取的字符串转换为对象
  /*
  * JSON格式：JSON不是一种数据类型，而是一种数据格式，只要把对象的属性名用双引号括起来，此时的对象就不再称之为普通对象，而是叫做JSON格式的对象
  *
  * 从服务器端获取的数据格式一般都是JSON格式的(大部分都是JSON格式字符串)
  *   window.JSON
  *      1.parse：把JSON格式的字符串转换为对象
  *      2.stringify：把对象转换为JSON格式的字符串
  *
  *   window.JSON.parse()
  *   JSON.parse()
  */

  productData?productData = JSON.parse(productData):null;
  // console.log(productData);

  //=>数据绑定（DOM数据绑定）：依托获取的数据，把页面中需要展示的数据和结构都搞出来，然后把创建好的数据和结构放到页面指定容器中
  /*
  * 1.字符串拼接
  *   ->传统字符串拼接
  *   ->ES6模板字符串拼接
  *   ->模板引擎:原理也是字符串拼接
  *
  * 2.动态创建DOM
  *   ->createElement
  *   ->appendChild
  *   弊端：操作起来太麻烦，而且性能消耗更大（DOM回流）
  */
  let str = ``;
  for (let i = 0; i < productData.length; i++) {
    let oli = productData[i];
    let {img,title,price,time,hot} = oli;
    str += `
            <li data-price = ${price} data-time = ${time} data-hot = ${hot}>
              <a href="javascript:;">
                <img src=${img} alt="">
                <p>${title}</p>
                <span>￥${price}</span><br>
                <span>时间：${time}</span><br>
                <span>热度：${hot}</span><br>
              </a>
            </li>`
    listBox.innerHTML = str;
  }
  // console.log(listBox);
}()

// 排序
~function () {
  // 按照价格升序排列
  let sortList = function(){
    let productAry = [].slice.call(productList);
    // console.log(this.flag);
    // 箭头函数的this是根据上下文决定的，所以此处应该用function
    let {flag:_flag,index:_index} = this;
    let ary = ['data-time','data-price','data-hot'];
    productAry.sort((a,b)=>{
      let aInn = a.getAttribute(ary[_index]),
          bInn = b.getAttribute(ary[_index]);
      _index===0?(aInn = a.getAttribute('data-time').replace(/-/g,''),bInn = b.getAttribute('data-time').replace(/-/g,'')):null;
      return (aInn - bInn) * _flag;
    });
    for (let i = 0; i < productAry.length; i++) {
      let curli = productAry[i];
      listBox.appendChild(curli)
    }
  };
  for (let i = 0; i < linkList.length; i++) {
    let curLink = linkList[i];
    curLink.flag = 1;
    curLink.index = i;
    curLink.onclick = function () {
      for (let index = 0; index < linkList.length; index++) {
        let link = linkList[index];
        index!==i?link.flag=1:null;
        console.log(index!==i);
        
      }
      this.flag *= -1;
      sortList.call(this);
    };
  };
}()

















