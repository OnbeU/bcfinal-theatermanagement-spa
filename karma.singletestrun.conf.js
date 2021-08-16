// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

var path = require("path")

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'pact'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('@pact-foundation/karma-pact')
    ],
    files: [
      'node_modules/@pact-foundation/pact-web/pact-web.js',
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    pact: [{
      port: 1234,
      consumer: 'bcfinal-theatermanagement-spa',
      provider: 'bcfinal-theatermanagement-bff',
      logLevel: 'DEBUG',
      log: path.resolve(process.cwd(), 'logs', 'pact.log'),
      dir: path.resolve(process.cwd(), 'pacts')
    }],
    proxies: {
      '/api/': 'http://127.0.0.1:1234/api/'
    }
  });
};
