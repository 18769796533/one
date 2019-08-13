require.config({
    baseUrl:"module",
    paths:{
        list:"http://localhost/zhg/module/list",
        floor:"http://localhost/zhg/module/floor",
        jq:"http://localhost/zhg/js/jquery2.2.4"
    }
})

require(["jq","floor","list"],function(_,f,l){
    var mylist = new l({
        allBtn:$(".lc"),
        ool:$(".lc").children("div")
    }) 
    new f({
        btns:mylist.btn,
        ol:mylist.ol,
        floor:$(".gb")
    })
})