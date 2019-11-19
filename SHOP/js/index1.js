var productRender = function () {
  let productList = null,
  // 获取商品列表的标签
      ulBox = document.getElementsByClassName('productBox')[0],
      liBox = ulBox.getElementsByTagName('li'),
  
  // 获取导航栏的标签
      headerBox = document.getElementsByClassName('headerBox')[0],
      linkList = headerBox.getElementsByTagName('a');

  // getData：基于ajax从客户端获取数据
  let getData = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','json/product.json',false);
    // onreadystatechange 规定当服务器响应已做好被处理的准备时所执行的任务
    xhr.onreadystatechange = function () {
      xhr.readyState===4?productList = xhr.responseText:null;
      // 把得到的json对象转化成普通对象
      productList = JSON.parse(productList);
    }
    xhr.send(null);
    // console.log(productList);
  }

  // bindHtml：绑定商品数据
  let bindHtml = function () {
    // 导入商品列表
    let str = ``;
    productList.forEach(({
                          img,
                          title,
                          price,
                          time,
                          hot
                        },index)=> {
      // 动态绑定li
      str += `
              <li data-price=${price} data-time=${time} data-hot=${hot}>
              <a href="javascript:;" >
                <img src=${img} alt="">
                <p title="${title}" >${title}</p>
                <span>￥${price}</span>
                <span>时间：${time}</span>
                <span>热度：${hot}</span>
              </a> 
              </li>`;
      // console.log(str);
      ulBox.innerHTML = str;
    })
  };

  // 排序
  let productSort = function () {
    // 获取要改动的商品列表信息
    let product = [].slice.call(liBox);
    product.sort((a,b)=> {
      let ary = ['data-time','data-price','data-hot'];
      let ap,
          bp;
      if (this._index) {
        ap = a.getAttribute(ary[this._index]),
        bp = b.getAttribute(ary[this._index]);
      }else{
        ap = a.getAttribute(ary[0]).replace(/-/g,''),
        bp = b.getAttribute(ary[0]).replace(/-/g,'');
      };
      return (ap- bp)*this._flag;
    });
    // 把排序后的商品列表添加到
    product.forEach(sorted=>{
      ulBox.appendChild(sorted);
    })
  };
  let bindClick = function () {
    [].forEach.call(linkList,(item,i) => {
      item._flag = 1;
      item._index = i;
      item.onclick = function () {
        productSort.call(this);
        [].forEach.call(linkList,(curLink,index)=>[
          i!==index?curLink._flag=1:this._flag *= -1
        ])
      }
    });
  }
  return{
    init:function(){
      getData();
      bindHtml();
      bindClick();
    }
  }
}()
productRender.init()