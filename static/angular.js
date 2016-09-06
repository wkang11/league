(function () {

    var routing = function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'myController'
            })
            .when('/api/summoner/basic/:name', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            });
    };
    var app = angular.module('myApp', ['ngRoute','myController.module','aboutController.module']);
    app.config(['$routeProvider', routing]);
})();
