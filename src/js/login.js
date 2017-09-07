/**
 * Created by lenovo on 2017/9/7.
 */
$("form").submit(function (e) {
    var name=$("#name").val();
    var pass=$("#pass").val();
    var cod =$("#cod").val();

    if(name==""&pass==""&cod==""){
//            手机邮箱、密码、验证码都为空
        $("#username").text("请输入手机或邮箱");
        $("#password").text("请输入密码");
        $("#code").text("请输入验证码");
        e.preventDefault();
    }else if(name!==""&pass==""&cod==""){
//            密码、验证码为空
        $("#username").text("");
        $("#password").text("请输入密码");
        $("#code").text("请输入验证码");
        e.preventDefault();
    }else if(name!==""&pass!==""&cod==""){
//            验证码为空
        $("#username").text("");
        $("#password").text("");
        $("#code").text("请输入验证码");
        e.preventDefault();
    }else if(name==""&pass==""&cod!==""){
//            手机邮箱、密码为空
        $("#username").text("请输入手机或邮箱");
        $("#password").text("请输入密码");
        $("#code").text("");
        e.preventDefault();
    }else if(name==""&pass!==""&cod!==""){
//            手机邮箱为空
        $("#username").text("请输入手机或邮箱");
        $("#password").text("");
        $("#code").text("");
        e.preventDefault();
    }else if(name!==""&pass==""&cod!==""){
//            密码为空
        $("#username").text("");
        $("#password").text("请输入密码");
        $("#code").text("");
        e.preventDefault();
    }else if(name==""&pass!==""&cod==""){
//            手机邮箱、验证码为空
        $("#username").text("");
        $("#password").text("请输入密码");
        $("#code").text("");
        e.preventDefault();
    }else{
        $.post(
            "106.98.255.168/web/Login_Response",
            {
                name:name,
                pass:pass,
                cod :cod
            },
            function (resp,status,xhr) {
                if(resp!=""){
                    alert(resp);
                }
            }
        )
    }
})
