'use strict';

angular.module('myApp.mainview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainview', {
    templateUrl: 'mainview/mainview.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('MainViewCtrl', function($scope) {
	$scope.cedidollarrate=3.25;
	$scope.cedidollar=function() { return $scope.cedidollarrate; };
	$scope.dollarcedi=function() { return (1/$scope.cedidollarrate); };


});