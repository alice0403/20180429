/*公共函数*/

/*
 ajax请求公共函数*/

//var URL="http://baidu.com/"

function requestAjax(reqData,code){
  var respData;
  $.ajax({
    url:URL+code,
    type:'POST',
    dataType:'json',
    contentType:'application/json;charset=utf-8',
    async:false,
    data:JSON.stringify(reqData),
    success:function(data,status){
      console.log("success ======> "+status);
      console.log(data);
      if(status=='success'){
        respData = data;
      }else{
        prompBox('网络异常或系统错误');
        console.log("网络异常或系统错误");
      }
    },
    error:function(data,status){
      prompBox('网络异常或系统错误');
      console.log("error ======> "+status);
      console.log(data);
    }
  });
  return respData;
}


/*公共弹框*/
var layer=document.createElement('div');
layer.id='layer';
function prompBox(innerhtml) {
  layer.innerHTML = innerhtml;
  var style = {
    background : "rgba(0, 0, 0, 0.6)",
    color : "#FFFFFF",
    position : "absolute",
    zIndex : 100,
    width : "80%",
    boxSizing:"border-box",
    minHeight : ".20rem",
    left : "10%",
    top : "2.8rem",
    borderRadius : "0.05rem",
    textAlign : "center",
    fontSize : ".14rem",
    padding : ".10rem",
    position : "fixed"
  }
  for ( var i in style)
    layer.style[i] = style[i];
  if (document.getElementById("layer") == null) {
    document.body.appendChild(layer);
    setTimeout("document.body.removeChild(layer)", 2000)
  }
}

/*
获取导航栏参数*/

(function($){
  $.getUrlParam=function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
})(jQuery);


function toThousands(num) {
  var result = [ ], counter = 0;
  num = (num || 0).toString().split('');
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) { result.unshift(','); }
  }
  return result.join('');
}



