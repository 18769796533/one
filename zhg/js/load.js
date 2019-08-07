$(".topNav").load("http://localhost/zhg/load.html .one",);
$(".logoNav").load("http://localhost/zhg/load.html .two",fn1);
$(".nav").load("http://localhost/zhg/load.html .three",fn);
$(".bvip").load("http://localhost/zhg/load.html .four",);
$(".hot").load("http://localhost/zhg/load.html .five",);
$(".fotter_b").load("http://localhost/zhg/load.html .six",);
$(".end").load("http://localhost/zhg/load.html .seven",);

function fn(){ 
    //导航条鼠标滑过
    $(".navbox2").find("li").hover(function(){
        $(this).css({
            background:"#00BBD7"
        })
    },function(){
        $(this).css({
            background:"#33353d"
        })
        
    })
    $(".navbox").hover(function(){
        $(this).find("ul").show()
    },function(){
        $(this).find("ul").hide()
    })
    //导航列表划过效果
    $(".navbox ul li").hover(function(){
        $(this).css({
            background:"#ffffff",
            color:"#00BBD7"
        }).find("i").css({
            color:"#00BBD7"
        }).parent().siblings(".nav_b").show()
    },function(){
        $(this).css({
            background:"#D7D7D9",
            color:"#333333"
        }).find("i").css({
            color:"#333333"
        }).parent().siblings(".nav_b").hide()
    })

    $(".nav_b3").find("p").hover(function(){
        $(this).find("a").css({
            color:"#00BBD7"
        })
    },function(){
        $(this).find("a").css({
            color:"#666"
        })
    })
}



function fn1(){
    var loc = localStorage.getItem("local")
    if(loc){
        $(".p1").hide();
        $(".p2").show().find("span").html(JSON.parse(loc).user)
    }else{
        $(".p1").show()
        $(".p2").hide()
    }
    $(".p2").find("a").on("click",function(){
        localStorage.removeItem("local")
        $(".p1").show()
        $(".p2").hide()
    })
    
}
