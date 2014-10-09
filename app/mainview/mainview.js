'use strict';

angular.module('myApp.mainview', ['ngRoute','myApp.ForEx'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mainview', {
    templateUrl: 'mainview/mainview.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('MainViewCtrl', ['$scope','ForEx',function($scope,ForEx) {
        $scope.cedidollarrate=3.25;
        $scope.oldrate=$scope.cedidollarrate;
        $scope.updaterate= function(){
                  ForEx.getlatest(function(data){
                       $scope.forexdata=data;
                       $scope.cedidollarrate=data.rates['GHS'];
                });
                }
        $scope.updaterate();

      	$scope.cedidollar=function() { return $scope.cedidollarrate; };
      	$scope.dollarcedi=function() { return (1/$scope.cedidollarrate); };


}]);