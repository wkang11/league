(function () {
    'use strict';
    var moduleName = "myController.module";
    angular.module(moduleName, []);
    modules.push(moduleName);
    
    function MyController($scope){
        'ngInject';
         $scope.message = 'Let me start from beginning';

    }

    angular.module(moduleName).controller('myController', MyController);
})();

