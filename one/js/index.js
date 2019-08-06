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





