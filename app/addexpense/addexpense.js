'use strict';

angular.module('myApp.AddExp', ['ngRoute','myApp.ForEx'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addexpense', {
    templateUrl: 'addexpense/addexpense.html',
    controller: 'AddExpCtrl'
  });
}])

.controller('AddExpCtrl', ['$scope','ForEx',function($scope,ForEx) {

}]);