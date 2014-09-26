'use strict';

describe('myApp.forex module', function() {
  beforeEach(module('myApp.forex'));

  describe('ForEx service', function() {
    it('should define the ForEx Service', inject(function(ForEx,$http) {
      expect(ForEx).toBeDefined;
    }));
    it('should define getlatest', inject(function(ForEx,$http) {
      expect(ForEx.getlatest).toBeDefined;
    }));
    it('should define getallrates', inject(function(ForEx,$http) {
      expect(ForEx.getallrates).toBeDefined;
    }));
  });
});
