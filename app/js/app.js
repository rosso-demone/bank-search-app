var bankSearchApp = angular.module('bankSearchApp', ['ngRoute','ngMaterial']);
bankSearchApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/homePage.html"
        })
        .otherwise({redirectTo:'/home'});
});