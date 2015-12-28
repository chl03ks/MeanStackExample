(function() {
    'use strict';
    angular.module('app').controller('MyNavBarController', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {
        $scope.identity = mvIdentity;
        $scope.signin = function (username, password) {
            mvAuth.authenticateUser(username,password).then(function (success) {
                if (success) {
                    mvNotifier.notifysuccess('You Have Seccesfully signed in!');
                }else {
                    mvNotifier.notifyerror('User / Password combination incorrect');
                }
            });
        };
    });
})();
