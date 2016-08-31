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
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

app.controller('myController', function ($scope, $http) {
    $scope.doesSummonerExist = true;
    $scope.message = 'Let me start from beginning';
    var pathArray = window.location.pathname.split('/');
    console.log(pathArray);
    var levelLocation = pathArray[2];
    var url = "api/summoner/basic/" + levelLocation;
    $http.get(url).then(function successCallback(data) {
        $scope.doesSummonerExist = true;
        for (var key in data.data) {
            $scope.summoner = {
                "id": data.data[key].id,
                "name": data.data[key].name,
                "iconId": data.data[key].profileIconId,
                "revData": data.data[key].revisionDate,
                "summonerLevel": data.data[key].summonerLevel
            }
        }
    });
});

app.controller('aboutController', function ($scope) {
    $scope.message = 'this is about page';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'You can contact Batman, and he will tell me your request.'
});