mui.init();
mui.previewImage();


/*模拟图片数据*/
var imgUrlList=[
  {
    id:'113',
    url:'./img/img-3@2x.png'
  },
  {
    id:'114',
    url:'./img/img-4@2x.png'
  },
  {
    id:'115',
    url:'./img/img-5@2x.png'
  },
  {
    id:'116',
    url:'./img/img-6@2x.png'
  }
];


$(document).ready(function(){
  /*计算合计金额 --start*/
  var arr=[];
  for(var i=0;i<$('.middleItem>div>span').length;i++){
    arr[i]=parseInt($('.middleItem>div>span')[i].innerText.replace(',',''));
  };
  console.log(arr,'arr');
  var total=0;
  for(var i=0;i<arr.length;i++){
    total=total+arr[i];
  }
  $('.money').text('¥ '+toThousands(total));
  /*计算合计金额 --end*/

  /*图片处理 --start*/
  var imgHtml='';
  for(var i=0;i<imgUrlList.length;i++){
    imgHtml=imgHtml+'<div class="imgDiv '+imgUrlList[i].id+'"></div>';
  };
  $('.sliderCon>div').html(imgHtml);
  for(var i=0;i<imgUrlList.length;i++){
    changeImgSize(imgUrlList[i].url,1.3,'rem',call,imgUrlList[i].id);
  }
  /*图片处理 --end*/
});

/*图片处理*/
function changeImgSize(url,len,unit,callback,id){
  var img=new Image();
  img.onload =function() {
    var W = img.width;
    var Y = img.height;
    if (img.width > img.height) {
      img.style.height = len+unit;
      img.style.top = '0'+unit;
      img.style.left = '-' + Math.floor((((W / Y) * len) -len) * 0.5 * 100) / 100 + unit;
    } else {
      img.style.width = len+unit;
      img.style.left = '0'+unit;
      img.style.top = '-' + Math.floor(((len / (W / Y)) - len) * 0.5 * 100) / 100 + unit;
    }
    img.setAttribute('data-preview-src', '');
    img.setAttribute('data-preview-group', '1');
    callback(img,id);
  };
  /*新增的图片路径*/
  img.src=url;
}

function call(img,id){
  $(img).appendTo('.'+id);
}
