

define(function(){
    // 楼层的效果
    class Floor{
        constructor(options){
            // btn这个属性保存的值，是在下拉菜单中获取，返回并传进来的
            this.btn = options.btns;
            this.ool = options.ol;
            this.f = options.floor;
            this.one=$(".goodsbox1").offset().top;
            this.two = $(".goodsbox2").offset().top;
            this.three = $(".goodsbox3").offset().top;
            this.four = $(".goodsbox4").offset().top;
            this.five = $(".goodsbox5").offset().top;
            this.six = $(".goodsbox6").offset().top;
            this.seven = $(".goodsbox7").offset().top;
            this.scTop=0;
            this.addEvent()
        }
        addEvent(){
            console.log(this.ool)
            var that = this;
            $(document).scroll(function(){
                that.scTop=$(this).scrollTop();
                if(that.scTop>=384){
                    $(".lc").fadeIn()
                }else{
                    $(".lc").fadeOut();
                }
            })
            this.ool.not(".top").on("click",function(){
                $("html").stop().animate({
                    scrollTop:$(".gb").eq($(this).index()).offset().top
                })
            })
            this.ool.siblings(".top").on("click",function(){
                $("html").stop().animate({
                    scrollTop:0
                })
            })
            
        }
    }

    return Floor;
})
        
