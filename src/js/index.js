/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */

var district=document.getElementById('district');
var feature=document.getElementById('feature');
var timing=document.getElementById('timing');
var district_active=document.getElementById('district_active');
var feature_active=document.getElementById('feature_active');
var timing_active=document.getElementById('timing_active');
function show(){
    if( district.style.display==""|| district.style.display=="none"){
        district.style.display = "block";
        feature.style.display = "none";
        timing.style.display = "none";
        district_active.style.color="#F36523";
        feature_active.style.color="black";
        timing_active.style.color="black";
    }else{
        district.style.display = "none";
        district_active.style.color="black";
    }
}
function show1(){
    if( feature.style.display==""|| feature.style.display=="none"){
        feature.style.display = "block";
        district.style.display = "none";
        timing.style.display = "none";
        district_active.style.color="black";
        feature_active.style.color="#F36523";
        timing_active.style.color="black";
    }else{
        feature.style.display = "none";
        feature_active.style.color="black";
    }
}
function show2(){
    if( timing.style.display==""|| timing.style.display=="none"){
        timing.style.display = "block";
        district.style.display = "none";
        feature.style.display = "none";
        timing_active.style.color="#F36523";
        district_active.style.color="black";
        feature_active.style.color="black";
    }else{
        timing.style.display = "none";
        timing_active.style.color="black";
    }
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