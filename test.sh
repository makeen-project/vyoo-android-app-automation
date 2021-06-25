$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --list
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install "system-images;android-29;google_apis;x86"
echo "no" | $ANDROID_HOME/cmdline-tools/latest/bin/avdmanager --verbose create avd --force --name "Android_device" --device "pixel" --package "system-images;android-29;google_apis;x86" --tag "google_apis" --abi "x86"
git clone https://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@github.com/makeen-project/vyoo-android-app-automation.git
cd vyoo-android-app-automation
npm install
npm install -g appium
adb start-server
$ANDROID_HOME/emulator/emulator @Android_device -no-audio -no-window &
sleep 45
appium &
npm run android.app
killall node
adb -s emulator-5554 emu kill