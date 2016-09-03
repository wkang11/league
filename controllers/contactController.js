var app = angular.module('myApp', ['ngRoute']);


app.controller('contactController', function ($scope) {
    $scope.message = 'You can contact Batman, and he will tell me your request.'
});