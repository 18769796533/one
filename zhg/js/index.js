//轮播图
$(".banner1").banner({
    items:$(".imgbox").find("div"),        //必传
    left:$(".imgbtns").find("#left"),       //可选
    right:$(".imgbtns").find("#right"),     //可选
    list:true,
    autoPlay:true,                          //可选，默认有自动播放
    delayTime:3000,                         //可选，默认2000
    moveTime:600,                          //可选，默认300
    index:0,                                //可选，默认0
})

//首页商品请求数据
class Sylist{
    constructor(){
        this.sylist = document.querySelector(".sylist");
        this.url = "http://localhost/zhg/data/goodsList.json";
        this.load()
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
        }) 
    }
    display(){
        var str = "";
        for(var i = 0;i<this.res.length;i++){
            str += `<li>
                        <div class="box1">
                            <img src="${this.res[i].url}" alt="">
                            <h4>${this.res[i].name}</h4>
                            <p>${this.res[i].tip}</p>
                            <em>${this.res[i].price}</em>
                        </div>
                        <div class="box2">
                            <i>${this.res[i].price}</i>
                            <input type="button" value="加入购物车" id="carbtn">
                        </div>
                    </li>`
        }
        this.sylist.innerHTML = str;
        this.car()
    }
    car(){
        $(".goodsList").find("li").hover(function(){
            $(this).find(".box1").children().not("img").hide()
            $(this).find(".box2").show()
        },function(){
            $(this).find(".box1").children().show()
            $(this).find(".box2").hide()
        })
    }
}
new Sylist();















//选项卡
$(".goods_d2").find("a").eq(0).on("click",function(){
    $(".goodsList").find(".sylist").hide().siblings(".sylist1").show();
})
//楼层效果
$(document).scroll(function(){
    if($(document).scrollTop()>= 384){
        $(".lc").show()
    }else{
        $(".lc").hide()
    }
});

$(".lc").find(".top").on("click",function(){
    $("html").stop().animate({
        scrollTop:0
    })
})
$(".lc").children("div").not(".top").on("click",function(){
    $("html").stop().animate({
        scrollTop:$(".gb").eq($(this).index()).offset().top
    })
})






