'use strict';

describe('myApp.forex module', function() {
  beforeEach(function(){
      module('myApp.forex');
      var CURRENCYAPI='http://openexchangerates.org/api/latest.json?app_id=887afbe0845f4b388a2b1066bb125bd5 ';
        });

  describe('ForEx service basics', function() {
    it('should define the ForEx Service', inject(function(ForEx,$http) {
      expect(ForEx).toBeDefined;
    }));
    it('should define getlatest', inject(function(ForEx,$http) {
      expect(ForEx.getlatest).toBeDefined;
    }));
    it('should define getallrates', inject(function(ForEx,$http) {
      expect(ForEx.getallrates).toBeDefined;
    }));
    
    it('should getlatest rates', inject(function(ForEx,$http) {
      expect(ForEx.getallrates).toBeDefined;
    }));

    
    
  });
  // see: http://stackoverflow.com/questions/17370427/loading-a-mock-json-file-within-karmaangularjs-test
  // not done.
  describe('ForEx Service gets stuff from the service',function(){
      var $httpBackend;

      beforeEach(inject(function($injector,$rootScope,$controller){
          $httpBackend=$injector.get('$httpBackend');
          jasmine.getJSONFixtures().fixturesPath="./sample_json";
          $httpBackend.whenGET(CURRENCYAPI).respond(getJSONFixture('latest.json'));

      }));

      it('should getlatest and set results', inject(function(ForEx,$http) {
          // todo--change to mock the results and insert them...
          expect(ForEx.getallrates).toBeDefined;
      }));
  });
});
