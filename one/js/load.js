$(".topNav").load("http://localhost/zhg/load.html .one",fn);
$(".logoNav").load("http://localhost/zhg/load.html .two",fn);
$(".nav").load("http://localhost/zhg/load.html .three",fn);
$(".bvip").load("http://localhost/zhg/load.html .four",fn);
$(".hot").load("http://localhost/zhg/load.html .five",fn);
$(".fotter_b").load("http://localhost/zhg/load.html .six",fn);
$(".end").load("http://localhost/zhg/load.html .seven",fn);

function fn(){
    var script = document.createElement("script");
    script.src="js/index.js";
    $("body").append(script)
}