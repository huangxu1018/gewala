/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */
// $("document").ready(function(){
//     $(".menu li").click(function(){
//         $(".menu li").removeClass("active");//首先移除全部的active
//         $(this).addClass("active");//选中的添加active
//     });
// });
function show(){
    var a=document.getElementById('district');
    if( a.style.display==""|| a.style.display=="none"){
        a.style.display = "block";
    }else{
        a.style.display = "none";}

}
function show1(){
    var b=document.getElementById('feature');
    if( b.style.display==""|| b.style.display=="none"){
        b.style.display = "block";
    }else{
        b.style.display = "none";}
}
function show2(){
    var c=document.getElementById('timing');
    if( c.style.display==""|| c.style.display=="none"){
        c.style.display = "block";
    }else{
        c.style.display = "none";}
}