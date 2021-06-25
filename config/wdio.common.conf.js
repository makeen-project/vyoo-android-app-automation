exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',
  framework: 'cucumber',
  specs: [
    './tests/features/**/onboardingExistingUser.feature'
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
        address: '0.0.0.0',
        port: 4723,
        basePath: '/wd/hub',
        relaxedSecurity: true,
        // ...
      }
    }]
  ],


  reporters: ['allure', 'spec'],
  reporterOptions: {
    allure: {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
    }
},

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
  },

  afterStep: function (stepResult) {
    if (stepResult.status == "failed") {
      let screenshotPath = path.join(__dirname, '/screenshots');
      let screenshotName = stepResult.scenario + '-' + stepResult.text + '.png';
      let fileName = screenshotPath + screenshotName.replace(/\s/g, '');
      browser.saveScreenshot(fileName);
    }
  },

};
