window.onload=function(){
  getRem(375,100);
};

window.onresize=function(){
  getRem(375,100);
};

function getRem(pwidth,prem){
  var html=document.getElementsByTagName('html')[0];
  var oWidth;
  if(document.body==null||document.documentElement!=null){
    oWidth=document.documentElement.clientWidth;
  }
  if(document.documentElement==null&&document.body!=null){
    oWidth=document.body.clientWidth;
  }
  html.style.fontSize=oWidth/pwidth*prem+"px";
}

window.onload();