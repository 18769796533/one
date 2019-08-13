function setCookie(key,value,options){
    options = options || {};
    var data = "";
    if(options.expires){
        var d = new Date();
        d.setDate(d.getDate()+options.expires);
        data = ";expires=" + d ;
    }
    var path = "";
    if(options.path){
        path = ";path=" + options.path;
    }
    document.cookie = key + "=" + value + data + path;
}
function removeCookie(key){
    setCookie(key,null,{
        expires:-1
    })
}

function getCookie(key){
    var str = document.cookie;
    var arr = str.split("; ");
    for(var i =0; i<arr.length;i++){
        if(arr[i].split("=")[0]==key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}


// function getCookie(key){
//     var str = document.cookie;
//     var arr = str.split("; ");
//     for(var i = 0;i<arr.length;i++){
//         if(arr[i].split("=")[0] == key){
//             return arr[i].split("=")[1];
//         }
//     }
//     return "";
// }



























































