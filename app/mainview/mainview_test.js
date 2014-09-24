'use strict';

describe('myApp.mainview module', function() {

  beforeEach(module('myApp.mainview'));

  describe('mainview controller', function(){

    it('should define a mainviewctrl model', inject(function($controller,$rootScope) {
      //spec body
      var myScope= $rootScope.$new(),
      	mainviewCtrl = $controller('MainViewCtrl',{'$scope':myScope});
      expect(mainviewCtrl).toBeDefined();
    }));


    it("should have a cedidollar functon",inject(function($controller,$rootScope){
      var myScope= $rootScope.$new(),
      	  mainviewCtrl = $controller('MainViewCtrl',{'$scope':myScope});
          expect(myScope.cedidollar).toBeDefined();
    }));
     it("should have a cedidollarrate",inject(function($controller,$rootScope){
      var myScope= $rootScope.$new(),
      	  mainviewCtrl = $controller('MainViewCtrl',{'$scope':myScope});
          expect(myScope.cedidollarrate).toBeDefined();
    }));


  });
});