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
                        <div>
                            <img src="${this.res[i].url}" alt="">
                            <h4>${this.res[i].name}</h4>
                            <p>${this.res[i].tip}</p>
                            <em>${this.res[i].price}</em>
                        </div>
                    </li>`
        }
        this.sylist.innerHTML = str;
    }
}
new Sylist();





