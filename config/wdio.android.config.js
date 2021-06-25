const path = require('path');
let rootPath = path.join(__dirname, '../');
const { config } = require('./wdio.common.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities

config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',

        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        //Add the Device name and Android version as per execution
        'appium:deviceName': 'Google_Pixel_Android_10',
        'appium:platformVersion': '10',
        'appium:orientation': 'PORTRAIT',

        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',

        // The path to the app
        'appium:app': rootPath + 'app/app-vyoo-universal-dev.apk',

        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': false,

        'appium:isHeadless': true,

        'appium:newCommandTimeout': 240,

        'appium:ignoreHiddenApiPolicyError': true
    },
];

exports.config = config;