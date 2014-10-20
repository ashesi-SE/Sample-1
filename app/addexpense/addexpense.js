'use strict';

angular.module('myApp.AddExp', ['ngRoute','myApp.ForEx'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addexpense', {
    templateUrl: 'addexpense/addexpense.html',
    controller: 'AddExpCtrl'
  });
}])

.controller('AddExpCtrl', ['$scope','ForEx',function($scope,ForEx) {
	if(!angular.isDefined($scope.listofitems)) $scope.listofitems=[];
	$scope.additem=function(){
		var cedivalue,dollarvalue,doll2cedi;
		doll2cedi=ForEx.getdollartocedi();
		if(ForEx.iserrorstatus(doll2cedi)) doll2cedi={rate: (1/3.2), asof :0};
		if($scope.idescription&&($scope.icedi||$scope.idollar)) {
			if($scope.icedi) {
				dollarvalue=$scope.icedi*doll2cedi.rate;
				cedivalue=$scope.icedi;
				$scope.idollar=dollarvalue;
			} else {
				cedivalue=$scope.idollar/doll2cedi.rate;
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