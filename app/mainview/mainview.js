'use strict';

angular.module('myApp.mainview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainview', {
    templateUrl: 'mainview/mainview.html',
    controller: 'ManViewCtrl'
  });
}])

.controller('MainViewCtrl', function($scope) {
	$scope.cedidollarrate=3.25;
	$scope.cedidollar=f() { return cedidollarrate; }
	$scope.dollarcedi=f() { return (1/cedidollarrate); }


});