(function () {
    'use strict';
    var moduleName = 'aboutController.module';
    angular.module(moduleName, []);

    function AboutController($scope, $http, $location) {
        'ngInject';
        this.$location=$location;
        this.$scope = $scope;        
        this.$http = $http;
        this.$scope.message = 'Let me start from beginning for about page';
        this.$scope.doesSummonerExist = true;
        this.getBasicInfo();
    }

    AboutController.prototype = {
        getBasicInfo: function () {
            var pathArray = this.$location.path().split('/:');
            var userInGameName = pathArray[1];
            this.$http({
                method: 'GET',
                url: "/api/summoner/basic/" + userInGameName
            }).then(function succesCallback(data) {
                console.log("Data received from basic call: ");
                console.log(data.data);
                this.$scope.doesSummonerExist = true;

                for (var key in data.data) {
                    this.$scope.summoner = {
                        "id": data.data[key].id,
                        "name": data.data[key].name,
                        "iconId": data.data[key].profileIconId,
                        "revData": data.data[key].revisionDate,
                        "summonerLevel": data.data[key].summonerLevel
                    };
                }
            }.bind(this))

        },

        getSummonerData:function(){
            
        }
    }

    angular.module(moduleName).controller('aboutController', AboutController);

})();

