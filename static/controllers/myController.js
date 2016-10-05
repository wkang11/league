(function () {
    'use strict';
    var moduleName = "myController.module";

    angular.module(moduleName, ["sharedProperties.module"]);


    function MyController($scope, sharedProperties) {
        'ngInject';
        $scope.message = 'Let me start from beginning ';
       
        sharedProperties.getVersion(function (err, versionData) {
            $scope.version = versionData.data[0];            
        });
        

    }

    angular.module(moduleName).controller('myController', MyController);
})();

