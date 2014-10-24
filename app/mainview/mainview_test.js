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
      it("cedidollar() should be greater than 1",function(){

          expect(myScope.cedidollar()).toBeGreaterThan(1);
      });
      it("dollarcedi() should be greater than 1",function(){

          expect(myScope.dollarcedi()).toBeLessThan(1);
      });

      it("dollarcedi() should be equal to 1/cedidllar()",function(){

          expect(myScope.dollarcedi()==(1/myScope.cedidollar())).toBeTruthy();

      });

  }); //mainview controller describe
}); //myapp.mainview.module 