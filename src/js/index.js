/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */
var a_district = document.getElementById("district");
var b_district = document.getElementById('feature');
var district_text = document.getElementById("district_text");
var feature_text = document.getElementById("feature_text");

function show() {
    if (a_district.style.display == "" || a_district.style.display == "none") {
        a_district.style.display = "block";
        b_district.style.display = "none";
        district_text.style.color = "red";
        feature_text.style.color = "black";
    } else {
        a_district.style.display = "none";
        district_text.style.color = "black";
    }
}
function show1() {
    if (b_district.style.display == "" || b_district.style.display == "none") {
        b_district.style.display = "block";
        a_district.style.display = "none";
        feature_text.style.color = "red";
        district_text.style.color = "black";
    } else {
        b_district.style.display = "none";
        feature_text.style.color = "black";
    }
}
function show2() {
    var c = document.getElementById('timing');
    if (c.style.display == "" || c.style.display == "none") {
        c.style.display = "block";
    } else {
        c.style.display = "none";
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