// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    preprocessors: {
      'app/scripts/**/*.html': ['ng-html2js']
    },
    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js',
      '**/*.html'
    ],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9090,

    proxies: {
      '/base/': 'http://localhost:8000/base/'
    },

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
