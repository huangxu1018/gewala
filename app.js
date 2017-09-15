/**
 Author:zeng
 des
 Date 2017/9/15.
 Time 3:05.
 * Created by Administrator on 2017/9/15.
 */
var app = angular.module("mainApp",[
    "ngRoute",
    "homePage",
    // "indexPage",
    // "moviedetailPage"
]);
app.config("$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl: "src/main/main.html",
            controller: "homeCtrol"
        })
        // .when("/index",{
        //     templateUrl: "src/index/index.html",
        //     controller: "indexCtrol"
        // })
        // .when("/moviedetail",{
        //     templateUrl:"src/moviedetial/moviedetial.html",
        //     controller:"moviedetailCtrol"
        // })
        .otherwise({redirectTo: "/"});
});

