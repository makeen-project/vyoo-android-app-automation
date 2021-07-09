const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',
  framework: 'cucumber',
  specs: [
    './tests/features/**/onboardingNewUser.feature'
  ],
  sync: true,
  logLevel: 'error',
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 1,
  maxInstances: 1,

  // ====================
  // Appium Configuration
  // ====================
  services: [
    ['appium', {
      //  command: 'appium',

      args: {
        // ...
        address: '127.0.0.1',
        port: 4723,
        // basePath: '/wd/hub',
        relaxedSecurity: true,
        // ...
      }
    }]
  ],


  reporters: ['spec', ['cucumberjs-json', { jsonFolder: './report/' }]],

  cucumberOpts: {
    require: require('glob').sync('./tests/stepDefinitions/*.js'),
    ignoreUndefinedDefinitions: true,
    timeout: 60000
  },

  before: function () {
    require('expect-webdriverio');
    global.wdioExpect = global.expect
    const chai = require('chai');
    global.chai = chai;
    global.expect = chai.expect;
    const USERS = require("../tests/storage/users.json");
    global.USERS = USERS;
    const TEST_DATA = require("../tests/storage/testData.json");
    global.TEST_DATA = TEST_DATA;
    const cucumber = require('cucumber');
    global.Given = cucumber.Given;
    global.Then = cucumber.Then;
    global.When = cucumber.When;
    global.reporter = require('wdio-cucumberjs-json-reporter').cucumberJson;
  },

  afterStep(uri, feature, result) {
    if (!result.passed)
      cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  },
  onComplete(exitCode, config, capabilities, results) {
    const report = require('multiple-cucumber-html-reporter');
    report.generate({
      jsonDir: './report/',
      reportPath: './report/',
      openReportInBrowser: true,
      pageTitle: 'Vyoo Android app Functional Tests',
      pageFooter:
        '<div><p> &nbsp &nbsp &nbsp A report for Vyoo Android app functional tests</p></div>',
      durationInMS: true,
      reportName: 'Vyoo Android app Functional Tests',
    });
  }

};








