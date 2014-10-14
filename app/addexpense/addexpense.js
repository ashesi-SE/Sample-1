'use strict';

angular.module('myApp.AddExp', ['ngRoute','myApp.ForEx'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addexpense', {
    templateUrl: 'addexpense/addexpense.html',
    controller: 'AddExpCtrl'
  });
}])

.controller('AddExpCtrl', ['$scope','ForEx',function($scope,ForEx) {
	$scope.listofitems=[];
	$scope.additem=function(){
		var cedivalue,dollarvalue,doll2cedi=ForEx.getdollartocedi();
		if($scope.idescription&&($scope.icedi||$scope.idollar)) {
			if($scope.icedi) {
				dollarvalue=$scope.icedi*doll2cedi;
				cedivalue=$scope.icedi;
				$scope.idollar=dollarvalue;
			} else {
				cedivalue=$scope.idollar/doll2cedi;
				dollarvalue=$scope.idollar;
			}
			$scope.listofitems.push({
				description: $scope.idescription,
				usd : dollarvalue,
				cedi : cedivalue,
				recordtime : new Date()
			});
		
		}
	}
}]);