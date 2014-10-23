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
	$scope.doll2cedi=ForEx.getdollartocedi();
	$scope.calcdoll=function(cedi) {return(cedi*$scope.doll2cedi.rate);}
	$scope.calccedi=function(dollar) {return(dollar*(1/$scope.doll2cedi.rate));}
	if(ForEx.iserrorstatus($scope.doll2cedi)) $scope.doll2cedi={rate: (1/3.2), asof :0};
	$scope.additem=function(){
		var cedivalue,dollarvalue;
		
		if($scope.idescription&&($scope.icedi||$scope.idollar)) {
			if(angular.isDefined($scope.icedi)&&($scope.icedi>0)) {
				dollarvalue=$scope.icedi*$scope.doll2cedi.rate;
				cedivalue=$scope.icedi;
				$scope.idollar=dollarvalue;
			} else {
				cedivalue=$scope.idollar/$scope.doll2cedi.rate;
				dollarvalue=$scope.idollar;
			}
			$scope.listofitems.push({
				description: $scope.idescription,
				usd : dollarvalue,
				cedi : cedivalue,
				recordtime : new Date()
				});
			$scope.idescription=null;
			$scope.idollar=null;
			$scope.icedi=null;
		}
	}
}]);