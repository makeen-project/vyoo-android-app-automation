# Vyoo Android Mobile app automation Framework
Automation Framework for Vyoo Android App

# Prerequisite:
  1. Java 
  2. Node.js installation
  3. NPM installation
  4. Verify above prerequite by java --version, node -v and npm -v

# To run the framework use following steps:-
  1. Clone this repository using "git clone https://github.com/makeen-project/vyoo-android-app-automation.git".
  2. Run command "yarn install" or "npm Install", to install all dependencies.
  3. This framwork auto start/stop the appium.
  5. Create App folder in current directory if it's missing and download Vyoo dev app and put .apk file in app folder.
  6. Add configuration of the device attached to your computer in device desired capabilities in "wdio.android.config.js"
  7. Run command "npm run android.app" to run android test
  8. After tests "allure-results" folder will be generated, which will contain test results.
  9. To view test reports navigate to root directory of repository and run command "allure generate -c allure-results/ && allure open"**

# Notes:-
  1. To get device udid type following command "adb devices" and copy serial id in second line.
  2. Install appium from :- http://appium.io/docs/en/about-appium/getting-started/
  3. Install Android Studio from :- https://developer.android.com/studio/
  4. To use allure commands, you need to install allure, use command: npm install @wdio/allure-reporter --save-dev