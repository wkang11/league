(function () {
    'use strict';
    var moduleName = 'aboutController.module';
    angular.module(moduleName, []);

    function AboutController($scope, $window, apiService) {
        'ngInject';
        $scope.message = 'Let me start from beginning for about page';
        $scope.doesSummonerExist = true;
        this.apiService = apiService;
        this.$window = $window;
        this.getIcon();
    }

    AboutController.prototype = {
        getIcon: function () {
            var pathArray = this.$window.location.pathname.split('/');
            console.log(pathArray);
            var name = pathArray.pop();
            this.apiService.getIcon(name, function (err, data) {
                for (var key in data.data) {
                    this.$scope.summoner = {
                        "id": data.data[key].id,
                        "name": data.data[key].name,
                        "iconId": data.data[key].profileIconId,
                        "revData": data.data[key].revisionDate,
                        "summonerLevel": data.data[key].summonerLevel
                    }
                }
            })

        }
    }

    angular.module(moduleName).controller('aboutController', AboutController);

})();

