/**
 Author:zeng
 des
 Date 2017/9/12.
 Time 22:45.
 * Created by Administrator on 2017/9/12.
 */

function show() {
    var height = document.getElementById("abstract");
    if (height.offsetHeight<70){
        height.style.height = "140px";
    }else {
        height.style.height = "65px";
    }
}