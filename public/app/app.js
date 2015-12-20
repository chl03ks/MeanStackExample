(function() {
    'use strict';
    angular.module('app', ['ngResource', 'ngRoute'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                when('/', {
                    templateUrl: 'partials/main',
                    controller: 'mainCtrl'
                });
            }
        ])
        .controller('mainCtrl', function($scope) {
            $scope.myVar = "Example of angular variable";
        });

}());
