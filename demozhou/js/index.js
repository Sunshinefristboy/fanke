//购物车全选
function btnAll(btnEle){
    $(".check").prop('checked',btnEle.checked);
    $(".checkAll").prop('checked',btnEle.checked);
    if($(".check").prop('checked',btnEle.checked)){
        var totalNumber = mycar.mySelectTotalNumber();
        var totalPrice = mycar.mygetTotalPrice();
        $('#totalNumber').html(totalNumber);  
        $('#totalPrice').html("￥" + totalPrice + ".00"); 
    }
}

function btncheck(btnEle){
    if( $("btnEle[type='checkbox']").prop("checked",false)){
        $(".checkAll[type='checkbox']").prop("checked",false);
    }
    var totalNumber = mycar.mySelectTotalNumber();
    var totalPrice = mycar.mygetTotalPrice();
    $('#totalNumber').html(totalNumber);  
    $('#totalPrice').html("￥" + totalPrice + ".00"); 
}

//微信二维码
$(function () {
    $("#shouApp").hover(function(){
        $("#shouLi").show();
    },function(){
        $("#shouLi").hide();
    });
});

//导航
$(function () {
    $(".dl").mouseenter(function(){
        var index = $(this).index();
        $(".dd").eq(index - 1).slideDown(300);
        $(".dt > a").eq(index - 1).css("color", "red");
    });
    $(".dl").mouseleave(function(){
        var index = $(this).index();
        $(".dd").eq(index - 1).slideUp(300);
        $(".dt > a").eq(index - 1).css("color", "#727171");
    });
});

//放大镜
$(function () {
    $(".shouSimg").mouseover(function(){
        $(".shouImg").show();
        $(".glass").show();

    })
    $(".shouSimg").mouseout(function(){ 
        $(".shouImg").hide();
        $(".glass").hide();
    })

    $(".shouSimg").on("mousemove", function (ev) {
        var disX = ev.pageX - $(".smallImg").offset().left - $(".glass").width() / 2;
        var disY = ev.pageY - $(".smallImg").offset().top - $(".glass").height() / 2;//此处最好不要用clientY

        if (disX < 0) {
            disX = 0
        } else if (disX > ($(".smallImg").width() - $(".glass").width())) {
            disX = $(".smallImg").width() - $(".glass").width()
        }

        if (disY < 0) {
            disY = 0
        } else if (disY > ($(".smallImg").height() - $(".glass").height())) {
            disY = $(".smallImg").height() - $(".glass").height()
        }

        $(".glass").css({
            left: disX + "px",
            top: disY + "px"
        })

        var l = disX / ($(".smallImg").width() - $(".glass").width());
        var t = disY / ($(".smallImg").height() - $(".glass").height());

        //右侧放大镜显示的逻辑
        $(".bigImg").css({
            left: -l * ($(".bigImg").width() - $(".shouImg").width()) + "px",
            top: -t * ($(".bigImg").height() - $(".shouImg").height()) + "px"
        })
    })
});

//衣服颜色选择
$(function () {
    $(".cloColor").click(function(){
        var index = $(this).index();
        $(this).css({"border":"1px solid #6c101d"}).siblings().css({"border":"1px solid #b3b3b3"});
        for(var i=0; i<cartlist.length; i++){
            var arr = [`${cartlist[i].id}`,'../images/second/6385293-1j201903061602544994.jpg']
            $(".smallImg").attr('src',arr[index]);
            $(".bigImg").attr('src',arr[index]);
        }
        if(index == 1){
            $(".glass").css({ "opacity": "0.2", "background": "black" });
        }else{
            $(".glass").css({ "opacity": "0.4", "background": "white" });
        }
    })
})

//尺码选择
$(function () {
    $(".cloSize").click(function(){
        $(this).css({"border":"1px solid #6c101d"}).siblings().css({"border":"1px solid #b3b3b3"});
    })
})

//阻止a标签默认行为及冒泡
$(".testC").on('click',function(){
    return false;
});

//首页轮播图
$(function () {
    var index = 0;
        var timer = setInterval(autoPlay, 2000);
        function autoPlay() {
            index++;
            $("#lunboul > li").eq(index).fadeIn(500).siblings().fadeOut(500);
            $("#lunbool > li").eq(index).addClass("current").siblings().removeClass("current");

            if (index == $("#lunboul > li").length - 1) {
                index = -1;
            }
        }

        $("#lunbool > li").hover(function () {
            clearInterval(timer);
            index = $(this).index() - 1;
            autoPlay();
            $("#lunbool > li").css("cursor", "pointer")
        }, function () {
            timer = setInterval(autoPlay, 2000);
    });
//左键点击
    $(".btnPrev").hover(function(){
      clearInterval(timer);
  },function(){
      timer = setInterval(autoPlay,1000);
  })
 $(".btnPrev").click(function(){
  index --;
      $("#lunboul > li").eq(index).fadeIn(500).siblings().fadeOut(500);
      $("#lunbool > li").eq(index).addClass("current").siblings().removeClass("current");
      if(index == $("#lunboul > li").length - 1){
          index = -1;
      }
 })

  //右键点击		
 $(".btnNext").hover(function(){
      clearInterval(timer);
  },function(){
      timer = setInterval(autoPlay,1000);
  })

 $(".btnNext").click(function(){
  index ++;
      $("#lunboul > li").eq(index).fadeIn(500).siblings().fadeOut(500);
      $("#lunbool > li").eq(index).addClass("current").siblings().removeClass("current");
      if(index == $("#lunboul > li").length - 1){
          index = -1;
      }
 })

});

//首页下拉菜单效果
$(function () {
    $('.title').mouseover(function () {
        $(this).children('div').addClass('ol');
        $(this).siblings().children('div').removeClass('ol');
        $('.ol').css('display', 'block');
    });
    $('.title').mouseleave(function () {
        $(this).children('div').removeClass('ol');
        $(this).children('div').css('display', 'none');
    });
});

//Car()
function Car(){};

//获取购物车商品
Car.prototype.getCar = function(){
  //没有数据默认返回一个空数组
  return  JSON.parse( localStorage.getItem('cartlist') ) || [];
}

//添加商品到购物车
Car.prototype.addToCar = function(product){
  var cartlist = this.getCar();
    //直接加入
     cartlist.push(product);
  //要在存入本地存储(要转化字符串进行存储)
  localStorage.setItem('cartlist',JSON.stringify(cartlist));
}

//myCar()
function myCar(){};
myCar.prototype.mygetCar = function(){
    //没有数据默认返回一个空数组
    return  JSON.parse( localStorage.getItem('cartlists') ) || [];
  }
  
  //添加商品到购物车
  myCar.prototype.myaddToCar = function(products){
    var cartlists = this.mygetCar();
    //1.判断是否有相同商品
    if(this.myhasGoods(products.id,products.cloSize)){
      for(var i=0; i<cartlists.length; i++){
        if(cartlists[i].id == products.id && cartlists[i].cloSize == products.cloSize){
         //有：数量加一
         cartlists[i].number += 1
        }
      }
    }else{
       //2、没有：直接加入
       cartlists.push(products);
    }
    alert('加入成功');
    //要在存入本地存储(要转化字符串进行存储)
    localStorage.setItem('cartlists',JSON.stringify(cartlists));
  }
  
  //判断购物车是否有相同商品
  myCar.prototype.myhasGoods = function(id,cloSize){
    var cartlists = this.mygetCar();
    //判断id是否相同，
    for(var i=0; i<cartlists.length; i++){
      if(cartlists[i].id == id && cartlists[i].cloSize == cloSize){
        return true;
      }
    }
    return false;
  }
  
  //删除购物车指定的商品
  myCar.prototype.mydelGoods = function(id){
    var cartlists = this.mygetCar();
    for(var i=0; i<cartlists.length; i++){
      if(cartlists[i].id == id){
        //删除当前商品
        cartlists.splice(i,1);
        //需要在存入本地存储
        localStorage.setItem( 'cartlists',JSON.stringify(cartlists) )
        return true;
      }
    }
    return false;
  }

//减少购物车指定商品数量
myCar.prototype.mysubNum = function(id,cloSize,cartNumber){
    var cartlists = this.mygetCar();
    for(var i=0; i<cartlists.length; i++){
      if(cartlists[i].id == id && cartlists[i].cloSize == cloSize){
        console.log(cartlists[i]);
        //删除当前商品
        cartlists[i].number = cartNumber -1;
        if(cartlists[i].number < 0){
            cartlists[i].number = 0
        }
        //需要在存入本地存储
        localStorage.setItem( 'cartlists',JSON.stringify(cartlists) )
        return true;
      }
    }
    return false;
  }

  //增加购物车指定商品数量
myCar.prototype.myaddNum = function(id,cloSize,cartNumber){
    var cartlists = this.mygetCar();
    for(var i=0; i<cartlists.length; i++){
      if(cartlists[i].id == id && cartlists[i].cloSize == cloSize){
        console.log(cartlists[i]);
        //删除当前商品
        cartlists[i].number = cartNumber + 1 ;
        //需要在存入本地存储
        localStorage.setItem( 'cartlists',JSON.stringify(cartlists) )
        return true;
      }
    }
    return false;
  }

  //删除选中的所有商品
  myCar.prototype.mydelAllgoods = function(id){
    var cartlists = this.mygetCar();
    for(var i=0; i<cartlists.length; i++){
      if(cartlists[i].id == id || $("input[type='checkbox']:checked")){
        //删除当前商品
        cartlists.splice(i);
        //需要在存入本地存储
        localStorage.setItem( 'cartlists',JSON.stringify(cartlists) )
        return true;
      }
    }
    return false;
  }

//获取购物车商品的总数量
myCar.prototype.mySelectTotalNumber = function(){
    var totalNumber = 0;
    var cartlists = this.mygetCar();
    $(".check").each(function(index, item){
        // console.log(item);        
        if($(item).prop("checked")){
            totalNumber += parseInt( cartlists[index].number )
        };       
    })
    return totalNumber;
}

//获取购物车商品的总价格
myCar.prototype.mygetTotalPrice = function(){
    var totalPrice = 0; //默认0元
    var cartlists = this.mygetCar();
    $(".check").each(function(index,item){
        if($(item).prop("checked")){
            totalPrice += parseFloat( cartlists[index].price.substring(1)) * parseInt( cartlists[index].number );
        };
    })
    return totalPrice;
}

  //获取购物车商品的总数量
  myCar.prototype.mygetTotalNumber = function(){
    var totalNumber = 0; 
    var cartlists = this.mygetCar();
    for(var i=0; i<cartlists.length; i++){
      totalNumber +=  parseInt( cartlists[i].number )
    }
    return totalNumber;
  }
  

  