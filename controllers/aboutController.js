(function () {
    'use strict';
    var controllerName = 'aboutController';
    var moduleName = controllerName + 'module';
    angular.module(moduleName, ['aboutController.module']);

    function AboutController($scope, $http) {
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
    }
        
    angular.module(moduleName).controller(controllerName, AboutController);

})

