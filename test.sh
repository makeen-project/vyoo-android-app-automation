Run the below commands to run the framework

clone the repo 
`npm install`
`npm install -g appium`
`$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --list`
`$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install "system-images;android-29;google_apis;x86_64"`
`echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager --verbose create avd --force --name "Google_Pixel_Android_10" --device "pixel" --package "system-images;android-29;google_apis;x86_64" --tag "google_apis" --abi "x86_64"`
`emulator -list-avds`
`emulator @Google_Pixel_Android_10`
`npm run android.app`