(function() {
    'use strict';
    angular.module('app').controller('MyNavBarController', function($scope) {
        $scope.signin = function (username, password) {
            console.log('Im not done ' + username  +" "+ password);
        };
    });
}());
