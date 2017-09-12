/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */
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
(function (angular) {
    var hotModule = angular.module('myapp', ['ngRoute']);
    hotModule
        .controller('HotController', ["$scope", "$http",
            function ($scope, $http) {
                window.doubanMovieCallback = function (data) {
                    if (data.msg) {
                        //返回错误信息
                        $scope.message = data.msg;
                    } else {
                        $scope.movies = data;
                        $scope.message = '';
                    }
                };
                //网络请求地址
                var url = "https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback";
                $http.jsonp(url).error(function () {

                });

            }]);

})(angular);