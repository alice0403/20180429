mui.init();
mui.previewImage();

$(document).ready(function(){
  var proId='21';
  $('.addPro>.addStyle').on({
    click:function(){
      var proListHtml='<div class="middleItem '+proId+'">'
      +'<div>DEF12345</div>'
      +'<div>Small</div>'
      +'<div>M900</div>'
      +'<div>¥'+'<span> 6,800</span></div>'
      +'<div class="delPro" proId="'+proId+'"><img src="./img/delImg.jpg" alt=""/></div>'
      +'</div>';
      $('.proList').append(proListHtml);
      proId=proId+'1';
      var arr=[];
      for(var i=0;i<$('.proList>.middleItem>div>span').length;i++){
        arr[i]=parseInt($('.proList>.middleItem>div>span')[i].innerText.replace(',',''));
      };
      var total=0;
      for(var i=0;i<arr.length;i++){
        total=total+arr[i];
      }
      $('.total').text(toThousands(total));
    }
  });

  /*模拟图片id*/
  var imgId='11';
  /*增加图片*/
  $('.addImgList').on('click','.addImg',function(){
    $('.addImg').remove();
    var addImgListHtml=$(' <div class="imgCon '+imgId+'"><div class="imgDiv">'
    +'</div><div class="bottomBtn del" imgId="'+imgId+'">Delete</div>'
    +'</div>'
    +'<div class="addImg"><div class="imgDiv">'
    +'<img src="./img/img-2@2x.png" alt=""/>'
    +'</div></div>');
    $('.addImgList').append(addImgListHtml);
    changeImgSize('./img/img1.png',1.19,'rem',call,imgId);
    imgId=imgId+'1';
  });

  $('.addImgList').on('click','.del',function(){
      var classImg=$(this).attr('imgId');
      $('.'+classImg).remove();
  });

  $('.addImgList').on('click','.revise',function(){
    var classImg=$(this).attr('imgId');
    $('.'+classImg+'>img').attr('src','./img/example.png');
  });

  $('.proList').on('click','.delPro',function(){
    var classPro=$(this).attr('proId');
    $('.'+classPro).remove();
    var arr=[];
    for(var i=0;i<$('.proList>.middleItem>div>span').length;i++){
      arr[i]=parseInt($('.proList>.middleItem>div>span')[i].innerText.replace(',',''));
    };
    var total=0;
    for(var i=0;i<arr.length;i++){
      total=total+arr[i];
    }
    $('.total').text(toThousands(total));
  });

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
  $(img).appendTo('.'+id+'>.imgDiv');
}

