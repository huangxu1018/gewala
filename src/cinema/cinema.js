/**
 Author:zeng
 des
 Date 2017/9/16.
 Time 23:13.
 * Created by Administrator on 2017/9/16.
 */
var cinemaApp = angular.module("cinemaPage", ["ngRoute"]);
cinemaApp.controller("cinemaCtrol", function ($scope) {
    var vc = $scope.vc = {};
    $scope.addTab1_01 = function () {
        $scope.activeTab1_01 ++;
        $scope.activeTab1_02 = 1;
        $scope.activeTab1_03 = 1;
    };
    $scope.addTab1_02 = function () {
        $scope.activeTab1_02 ++;
        $scope.activeTab1_01 = 1;
        $scope.activeTab1_03 = 1;

    };
    $scope.addTab1_03 = function () {
        $scope.activeTab1_03 ++;
        $scope.activeTab1_01 = 1;
        $scope.activeTab1_02 = 1;
    }

});
