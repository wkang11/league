(function () {
    'use strict';
    var moduleName = 'aboutController.module';
    angular.module(moduleName, []);

    function AboutController($scope, $http) {
        'ngInject';
        $scope.message = 'Let me start from beginning for about page';
        // $scope.doesSummonerExist = true;
        // var pathArray = window.location.pathname.split('/');
        // console.log(pathArray);
        // var levelLocation = pathArray[2];
        // var url = "api/summoner/basic/" + levelLocation;
        // $http.get(url).then(function successCallback(data) {
        //     $scope.doesSummonerExist = true;
        //     for (var key in data.data) {
        //         $scope.summoner = {
        //             "id": data.data[key].id,
        //             "name": data.data[key].name,
        //             "iconId": data.data[key].profileIconId,
        //             "revData": data.data[key].revisionDate,
        //             "summonerLevel": data.data[key].summonerLevel
        //         }
        //     }
        // });
    }
        
    angular.module(moduleName).controller('aboutController', AboutController);

})();

