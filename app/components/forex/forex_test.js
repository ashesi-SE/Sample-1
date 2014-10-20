'use strict';

describe('myApp.forex module', function() {
  beforeEach(function(){
          //var CURRENCYAPI;
          module('myApp.ForEx');
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





      });
  // see: http://stackoverflow.com/questions/17370427/loading-a-mock-json-file-within-karmaangularjs-test
  // not done.
  describe('ForEx Service gets stuff from the service',function(){
      var $httpBackend;

      beforeEach(inject(function($injector,$rootScope,$controller){
          var CURRENCYAPIURL = 'http://openexchangerates.org/api/latest.json?app_id=887afbe0845f4b388a2b1066bb125bd5';
          $httpBackend=$injector.get('$httpBackend');
          // bug bug can't seem to get getJSONFixtues to work
          //jasmine.getJSONFixtures().fixturesPath="base/app/components/forex/sample_json";

          //$httpBackend.whenGET(CURRENCYAPIURL).respond(getJSONFixture('latest.json'));

          $httpBackend.whenGET(CURRENCYAPIURL).respond({
              "disclaimer": "Exchange rates are provided for informational purposes only, and do not constitute financial advice of any kind. Although every attempt is made to ensure quality, NO guarantees are given whatsoever of accuracy, validity, availability, or fitness for any purpose - please use at your own risk. All usage is subject to your acceptance of the Terms and Conditions of Service, available at: https://openexchangerates.org/terms/",
              "license": "Data sourced from various providers with public-facing APIs; copyright may apply; resale is prohibited; no warranties given of any kind. Bitcoin data provided by http://coindesk.com. All usage is subject to your acceptance of the License Agreement available at: https://openexchangerates.org/license/",
              "timestamp": 1412013649,
              "base": "USD",
              "rates": {
                  "AED": 3.67314,
                  "AFN": 56.935475,
                  "ALL": 110.321,
                  "AMD": 408.189997,
                  "ANG": 1.78704,
                  "AOA": 98.268701,
                  "ARS": 8.475476,
                  "AUD": 1.145349,
                  "AWG": 1.790025,
                  "AZN": 0.784233,
                  "BAM": 1.541865,
                  "BBD": 2,
                  "BDT": 77.37996,
                  "BGN": 1.54197,
                  "BHD": 0.377403,
                  "BIF": 1549.467533,
                  "BMD": 1,
                  "BND": 1.27437,
                  "BOB": 6.91537,
                  "BRL": 2.44701,
                  "BSD": 1,
                  "BTC": 0.002625361,
                  "BTN": 61.4172,
                  "BWP": 9.257615,
                  "BYR": 10619.833333,
                  "BZD": 1.99957,
                  "CAD": 1.114898,
                  "CDF": 923.806667,
                  "CHF": 0.951046,
                  "CLF": 0.024935,
                  "CLP": 601.680005,
                  "CNY": 6.149538,
                  "COP": 2027.476683,
                  "CRC": 539.948005,
                  "CUP": 0.999993,
                  "CVE": 86.598725,
                  "CZK": 21.69809,
                  "DJF": 178.48612,
                  "DKK": 5.865244,
                  "DOP": 43.73348,
                  "DZD": 82.38897,
                  "EEK": 12.13545,
                  "EGP": 7.155966,
                  "ERN": 15.062575,
                  "ETB": 19.98218,
                  "EUR": 0.787898,
                  "FJD": 1.90924,
                  "FKP": 0.615246,
                  "GBP": 0.615246,
                  "GEL": 1.75765,
                  "GGP": 0.615246,
                  "GHS": 3.290608,
                  "GIP": 0.615246,
                  "GMD": 39.59,
                  "GNF": 7048.35,
                  "GTQ": 7.71012,
                  "GYD": 205.358749,
                  "HKD": 7.7652,
                  "HNL": 21.1421,
                  "HRK": 6.014888,
                  "HTG": 45.02442,
                  "HUF": 245.6407,
                  "IDR": 12131.483333,
                  "ILS": 3.68185,
                  "IMP": 0.615246,
                  "INR": 61.52164,
                  "IQD": 1177.5084,
                  "IRR": 26632.333333,
                  "ISK": 120.377999,
                  "JEP": 0.615246,
                  "JMD": 112.695,
                  "JOD": 0.709126,
                  "JPY": 109.409499,
                  "KES": 89.331121,
                  "KGS": 54.6647,
                  "KHR": 4084.4914,
                  "KMF": 387.566009,
                  "KPW": 900,
                  "KRW": 1052.783319,
                  "KWD": 0.28811,
                  "KYD": 0.828443,
                  "KZT": 182.059,
                  "LAK": 8069.07,
                  "LBP": 1515.15,
                  "LKR": 130.550001,
                  "LRD": 91.49085,
                  "LSL": 11.26549,
                  "LTL": 2.72087,
                  "LVL": 0.553473,
                  "LYD": 1.22785,
                  "MAD": 8.73465,
                  "MDL": 14.3702,
                  "MGA": 2655.083333,
                  "MKD": 48.43768,
                  "MMK": 992.80875,
                  "MNT": 1833,
                  "MOP": 8.01466,
                  "MRO": 291.257019,
                  "MTL": 0.683738,
                  "MUR": 31.45782,
                  "MVR": 15.3937,
                  "MWK": 400.484998,
                  "MXN": 13.48918,
                  "MYR": 3.27456,
                  "MZN": 30.7074,
                  "NAD": 11.26329,
                  "NGN": 164.009,
                  "NIO": 26.2712,
                  "NOK": 6.445704,
                  "NPR": 98.147581,
                  "NZD": 1.286173,
                  "OMR": 0.385022,
                  "PAB": 1,
                  "PEN": 2.89755,
                  "PGK": 2.478434,
                  "PHP": 45.03816,
                  "PKR": 102.787,
                  "PLN": 3.294013,
                  "PYG": 4487.330013,
                  "QAR": 3.64472,
                  "RON": 3.47447,
                  "RSD": 93.646121,
                  "RUB": 39.39196,
                  "RWF": 690.336,
                  "SAR": 3.750908,
                  "SBD": 7.371393,
                  "SCR": 13.20433,
                  "SDG": 5.702733,
                  "SEK": 7.248276,
                  "SGD": 1.274596,
                  "SHP": 0.615246,
                  "SLL": 4379.833333,
                  "SOS": 782.595018,
                  "SRD": 3.308567,
                  "STD": 19298,
                  "SVC": 8.77181,
                  "SYP": 160.048331,
                  "SZL": 11.27269,
                  "THB": 32.3793,
                  "TJS": 4.9922,
                  "TMT": 2.8501,
                  "TND": 1.79585,
                  "TOP": 1.947165,
                  "TRY": 2.274194,
                  "TTD": 6.36282,
                  "TWD": 30.45108,
                  "TZS": 1677.75,
                  "UAH": 12.94226,
                  "UGX": 2650.75,
                  "USD": 1,
                  "UYU": 24.77524,
                  "UZS": 2369.329967,
                  "VEF": 6.295975,
                  "VND": 21252.833333,
                  "VUV": 97.709999,
                  "WST": 2.382566,
                  "XAF": 516.801024,
                  "XAG": 0.05698384,
                  "XAU": 0.00082104,
                  "XCD": 2.70156,
                  "XDR": 0.672097,
                  "XOF": 516.8905,
                  "XPF": 94.30028,
                  "YER": 215.013999,
                  "ZAR": 11.2712,
                  "ZMK": 5252.024745,
                  "ZMW": 6.262775,
                  "ZWL": 322.355006
              }
          });

      }));

      it('should getlatest and set results', inject(function(ForEx,$http) {
          // todo--change to mock the results and insert them...
          var getl;
          ForEx.getlatest(function(data){getl=data;});
          $httpBackend.flush();
          var latest=ForEx.getallrates( );

          expect(latest.timestamp).toBeDefined;
          expect(getl.timestamp).toBeDefined;
          expect(ForEx.hasbeencalled()).toBeTruthy;
          expect(ForEx.iscurrent()).toBeTruthy;
      }));
  });
});
