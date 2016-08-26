var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'myController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact/html',
            controller: 'contactController'
        });
});

app.controller('myController', function ($scope) {
    $scope.message = 'Let me start from beginning';
});

app.controller('aboutController', function($scope){
    $scope.mesage = 'this is about page';
});

app.controller('contactController', function($scope){
    $scope.message = 'You can contact Batman, and he will tell me your request.'
});