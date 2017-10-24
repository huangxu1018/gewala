/**
 * Created by huangx des DATE 2017/9/6.TIME 17:09.
 */

var movieApp = angular.module("moviePage",["ngRoute"]);
movieApp.controller("movieCtrol",["$scope", "$http",
    function ($scope, $http) {
        var vm = $scope.vm = {};
        window.doubanMovieCallback = function (data) {
            if (data.msg) {
                //返回错误信息
                $scope.message = data.msg;
            } else {
                // console.log(data);
                $scope.movies = data;
            }
        };
        //网络请求地址
        //https://api.douban.com//v2/movie/search?q=
        var url = "https://api.douban.com/v2/movie/in_theaters?callback=doubanMovieCallback";
        $http.jsonp(url);
        $scope.addTab1_1 = function () {
            $scope.activeTab1_1 ++;
            $scope.activeTab1_2 = 1;

        };
        $scope.addTab1_2 = function () {
            $scope.activeTab1_2 ++;
            $scope.activeTab1_1 = 1;
        };
    }]);


// var district = document.getElementById('district');
// var feature = document.getElementById('feature');
// var timing = document.getElementById('timing');
// var district_active = document.getElementById('district_active');
// var feature_active = document.getElementById('feature_active');
// var timing_active = document.getElementById('timing_active');
// function show9() {
//     if (district.style.display == "" || district.style.display == "none") {
//         district.style.display = "block";
//         feature.style.display = "none";
//         timing.style.display = "none";
//         district_active.style.color = "#F36523";
//         feature_active.style.color = "black";
//         timing_active.style.color = "black";
//     } else {
//         district.style.display = "none";
//         district_active.style.color = "black";
//     }
// }
// function show8() {
//     if (feature.style.display == "" || feature.style.display == "none") {
//         feature.style.display = "block";
//         district.style.display = "none";
//         timing.style.display = "none";
//         district_active.style.color = "black";
//         feature_active.style.color = "#F36523";
//         timing_active.style.color = "black";
//     } else {
//         feature.style.display = "none";
//         feature_active.style.color = "black";
//     }
// }
// function show2() {
//     if (timing.style.display == "" || timing.style.display == "none") {
//         timing.style.display = "block";
//         district.style.display = "none";
//         feature.style.display = "none";
//         timing_active.style.color = "#F36523";
//         district_active.style.color = "black";
//         feature_active.style.color = "black";
//     } else {
//         timing.style.display = "none";
//         timing_active.style.color = "black";
//     }
// }