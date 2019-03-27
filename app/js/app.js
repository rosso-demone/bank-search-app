var bankSearchApp = angular.module('bankSearchApp', ['ngRoute']);
bankSearchApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/homePage.html"
        })
        .otherwise({redirectTo:'/home'});
});