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
        $scope.forexupdating=false;
        $scope.updatetime=Date();
        $scope.updatestate="btn-primary";
        $scope.updaterate= function(){
                  $scope.forexupdating=true;
                  $scope.updatestate="btn-danger";
                  ForEx.getlatest(function(data){
                      var waittime=2; //waittime in seconds
                      var updatdt; // date type of updated time
                       $scope.forexdata=data;
                       $scope.oldrate=$scope.cedidollarrate;
                       $scope.cedidollarrate=data.rates['GHS'];
                       updatdt=new Date();
                       $scope.updatetime="On "+updatdt.toLocaleDateString()+" At "+updatdt.toLocaleTimeString();
                       $scope.updatestate="btn-success";
                       // wait for a second to change the button color back to primary"
                       while((new Date().valueOf())<=(updatdt.valueOf()+waittime*1000)) {}
                       $scope.updatestate="btn-primary";
                       $scope.forexupdating=false;
                    });
                }
        $scope.updaterate();

      	$scope.cedidollar=function() { return $scope.cedidollarrate; };
      	$scope.dollarcedi=function() { return (1/$scope.cedidollarrate); };


}]);