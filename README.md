# Vyoo Android Mobile app automation Framework
Automation Framework for Vyoo Android App

# Prerequisite:
  1. Java version: `11.0.11`
  2. Node.js version: `v12.16.2`
  3. NPM installation
  4. Verify above prerequite by java --version, node -v and npm -v
  5. Install appium with this command `npm install -g appium`

  # Creating virtual android device through command line

1. List All System Images Available for Download: `$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --list`
2. Download Image: `$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install "system-images;android-29;google_apis;x86"`
3. Create Emulator: `echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager --verbose create avd --force --name "Android_device" --device "pixel" --package "system-images;android-29;google_apis;x86" --tag "google_apis" --abi "x86"`
4. For a list of AVD name: `emulator -list-avds`
5. Run the emulator: `$ANDROID_HOME/emulator/emulator @Android_device`

# To run the framework use following steps:-
  1. Clone this repository using `git clone https://github.com/makeen-project/vyoo-android-app-automation.git`
  2. Run command `yarn install` or `npm install`, to install all dependencies.
  3. Create App folder in current directory if it's missing and download Vyoo dev app and put .apk file in app folder.
  4. Follow the above steps to create a virtual device
  5. Run `$ANDROID_HOME/emulator/emulator @Android_device` this command to start the emulator
  6. Add configuration of the emulator in device desired capabilities in `wdio.android.config.js`
  7. Run command `npm run android.app` to run android test

# Notes:-
  1. To get device udid type following command "adb devices" and copy serial id in second line.
  2. Install appium from :- http://appium.io/docs/en/about-appium/getting-started/
  3. Install Android Studio from :- https://developer.android.com/studio/
