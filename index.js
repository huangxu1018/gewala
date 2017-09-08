/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */
$("document").ready(function(){
    $(".menu li").click(function(){
        $(".menu li").removeClass("active");//首先移除全部的active
        $(this).addClass("active");//选中的添加active
    });
});