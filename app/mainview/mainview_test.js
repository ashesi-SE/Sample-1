'use strict';
var myScope,mainviewCtrl;

describe('myApp.mainview module', function() {

  beforeEach(module('myApp.mainview'));

  describe('mainview controller', function(){
    beforeEach(inject(function($controller,$rootScope){
          myScope= $rootScope.$new(),
          mainviewCtrl = $controller('MainViewCtrl',{'$scope':myScope})
        }))
    it('should define a mainviewctrl model', function(){
      expect(mainviewCtrl).toBeDefined();
    });


    it("should have a cedidollar functon",function(){
          expect(myScope.cedidollar).toBeDefined();
    });
     it("should have a cedidollarrate",function(){
      
          expect(myScope.cedidollarrate).toBeDefined();
    });


  }); //mainview controller describe
}); //myapp.mainview.module 