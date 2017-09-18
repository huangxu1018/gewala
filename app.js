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
    "moviePage",
    "cityPage",
    "loginPage",
    "moviedetailPage",
    "cinemaPage",
    "cinemadetailPage",
    "movieschedulePage",
    "registerPage",
    "selectmoviePage",
    "seatPage"
]);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl: "src/main/main.html",
            controller: "homeCtrol"
        })
        .when("/movie",{
            templateUrl: "src/movie/movie.html",
            controller: "movieCtrol"
        })
        .when("/city",{
            templateUrl: "src/city/city.html",
            controller: "cityCtrol"
        })
        .when("/login",{
            templateUrl: "src/login/login.html",
            controller: "loginCtrol"
        })
        .when("/moviedetail/:id",{
            templateUrl:"src/moviedetail/moviedetail.html",
            controller:"moviedetailCtrol"
        })
        .when("/cinema",{
            templateUrl:"src/cinema/cinema.html",
            controller:"cinemaCtrol"
        })
        .when("/cinemadetail",{
            templateUrl:"src/cinemadetail/cinema_detail.html",
            controller:"cinemadetailCtrol"
        })
        .when("/movieschedule",{
            templateUrl:"src/movieschedule/movieschedule.html",
            controller:"moviescheduleCtrol"
        })
        .when("/register",{
            templateUrl:"src/register/register.html",
            controller:"registerCtrol"
        })
        .when("/selectmovie",{
            templateUrl:"src/selectmovie/selectmovie.html",
            controller:"selectmovieCtrol"
        })
        .when("/seat",{
            templateUrl:"src/seat/seat.html",
            controller:"seatCtrol"
        })
        .otherwise({redirectTo: "/"});
}]);

