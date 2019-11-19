
var btnBox=document.getElementById('btnBox'),
    inputs=btnBox.getElementsByTagName('input');
var l=inputs.length;
for(var i=0;i<l;i++){
    inputs[i].onclick=(function (i) {
      return function(){
          alert(i);
      }
    })(i)

}
