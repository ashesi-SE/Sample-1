module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/mainview*/**/*.js',
      'app/addexpense*/**/*.js',
      'app/view*/**/*.js',
      // json fixtures
      // this doesn work:  'spec/javascripts/fixtures/json/*.json'
    ],

    autoWatch : true,

    frameworks: ['jasmine-jquery','jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-junit-reporter',
            'karma-jasmine-jquery',
            'karma-jasmine'
                        ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
