(function () {
    'use strict';
    var moduleName = 'aboutController.module';
    angular.module(moduleName, []);

    function AboutController($scope, $http,$location) {
        'ngInject';
        $scope.message = 'Let me start from beginning for about page';
        $scope.doesSummonerExist = true;
        var pathArray = $location.path().split('/:');
        var userInGameName = pathArray[1];

        // This is the basic API call
        // This is called for very summoner, and it has a cache of 15mins
        $http({
            method: 'GET',
            url: "/api/summoner/basic/" + userInGameName
        }).then(function succesCallback(data) {
            console.log("Data received from basic call: ");
            console.log(data.data);
            $scope.doesSummonerExist = true;

            for (var key in data.data) {
                $scope.summoner = {
                    "id": data.data[key].id,
                    "name": data.data[key].name,
                    "iconId": data.data[key].profileIconId,
                    "revData": data.data[key].revisionDate,
                    "summonerLevel": data.data[key].summonerLevel
                };
            };
        })

    }

    angular.module(moduleName).controller('aboutController', AboutController);

    })();

