'use strict';

describe('myApp.addexpense module', function() {

  beforeEach(module('myApp.addexpense'));

  describe('addexpense controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('AddExpCtrl');
      expect(addexpCtrl).toBeDefined();
    }));

  });
});