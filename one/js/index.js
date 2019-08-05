//导航条鼠标滑过
$(".navbox2").find("a").hover(function(){
    $(this).css({
        background:"#00BBD7"
    })
},function(){
    $(this).css({
        background:"#33353d"
    })
})
//导航列表划过效果
$(".navbox ul li").hover(function(){
    $(this).css({
        background:"#ffffff",
        color:"#00BBD7"
    }).find(".lbimg1").css("display","none").siblings().css("display","block")
    // .find(".nav_b").css({
    //     display:"block"
    // })
},function(){
    $(this).css({
        background:"#D7D7D9",
        color:"#333333"
    }).find(".nav_b").css({
        display:"none"
    }).siblings().find(".lbimg1").css("display","block").siblings().css("display","none")
})




