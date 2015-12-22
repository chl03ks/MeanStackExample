(function() {
    'use strict';
    angular.module('app').controller('MainController', function($scope) {
        $scope.courses = [
            {name: 'C++ For Dummies', featured: true, published: new Date("October 05, 2014 11:13:00")},
            {name: 'Java For Dummies', featured: false, published: new Date("October 14, 2014 11:13:00")},
            {name: 'Javascript For Dummies', featured: true, published: new Date("September 30, 2015 11:13:00")},
            {name: 'PHP For Even Dummies', featured: false, published: new Date("September 16, 2015 11:13:00")},
            {name: 'HTML For Dummies', featured: true, published: new Date("September 13, 2015 11:13:00")},
            {name: 'CSS For Dummies', featured: true, published: new Date("October 13, 2015 11:13:00")},
            {name: 'Nodejs For Dummies', featured: false, published: new Date("November 13, 2015 11:13:00")},
            {name: 'Schala For Dummies', featured: true, published: new Date("November 13, 2015 11:13:00")},
            {name: 'C For Dummies', featured: false, published: new Date("November 13, 2014 11:13:00")},
            {name: 'Python For Dummies', featured: false, published: new Date("October 13, 2013 11:13:00")},
            {name: 'Django For Dummies', featured: false, published: new Date("October 04, 2013 11:13:00")},
            {name: 'Angular For Dummies', featured: true, published: new Date("June 13, 2013 11:13:00")},
            {name: 'Nodejs For Pros', featured: true, published: new Date("June 13, 2014 11:13:00")},
        ];
    });
}());
