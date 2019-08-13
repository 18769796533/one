define(function(){
    class List{
        constructor(options){
            this.btn = options.allBtn;
            this.ol = options.ool;
            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.on("mouseenter","div",function(){
                $(this).css({
                    background:"#00BAD6"
                }).siblings("div").css({
                    background:""
                })
            })
        }
    }
    return List;
})