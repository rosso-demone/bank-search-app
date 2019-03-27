var bankSearchApp = angular.module('bankSearchApp', ['ngRoute']);
bankSearchApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/parent.html"
        })
});