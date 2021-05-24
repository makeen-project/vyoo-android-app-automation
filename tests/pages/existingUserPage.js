const SELECTORS = require('../elements/existingUserElements');
class ExistingUserPage {

    get allowAccess() {
        const selector = SELECTORS.ANDROID.ALLOW_ACCESS;
        return $(selector);
    }

    get homepageText() {
        const selector = SELECTORS.ANDROID.HOMEPAGE_TEXT;
        return $(selector);
    }

    get emailAddressButton() {
        const selector = SELECTORS.ANDROID.EMAIL_ADDRESS_BUTTON;
        return $(selector);
    }

    get emailAddressField() {
        const selector = SELECTORS.ANDROID.EMAIL_ADDRESS_FIELD;
        return $(selector);
    }

    get emailNextButton() {
        const selector = SELECTORS.ANDROID.EMAIL_NEXT_BUTTON;
        return $(selector);
    }

    get otpNextButton() {
        const selector = SELECTORS.ANDROID.OTP_NEXT_BUTTON;
        return $$(selector)[1];
    }

    get firstNumber() {
        const selector = SELECTORS.ANDROID.OTP_1ST_NUMBER;
        return $(selector);
    }

    get secondNumber() {
        const selector = SELECTORS.ANDROID.OTP_2ND_NUMBER;
        return $(selector);
    }

    get thirdNumber() {
        const selector = SELECTORS.ANDROID.OTP_3RD_NUMBER;
        return $(selector);
    }

    get fourthNumber() {
        const selector = SELECTORS.ANDROID.OTP_4TH_NUMBER;
        return $(selector);
    }

    get commuinityPageText() {
        const selector = SELECTORS.ANDROID.COMMUNITY_PAGE_TEXT;
        return $(selector);
    }

    get enterCommunityButton() {
        const selector = SELECTORS.ANDROID.ENTER_COMMUNITY_BUTTON;
        return $(selector);
    }

    get turnONLocation() {
        const selector = SELECTORS.ANDROID.TURN_ON_LOCATION;
        return $(selector);
    }

    get rateApp() {
        const selector = SELECTORS.ANDROID.RATE_APP;
        return $(selector);
    }

    get appHeaderText() {
        const selector = SELECTORS.ANDROID.APP_HEADER_TEXT;
        return $(selector);
    }

    clickAllow() {
        this.allowAccess.waitForExist();
        this.allowAccess.touchAction('tap');
    }

    isHomepageTextDisplayed() {
        this.homepageText.waitForExist();
        return this.homepageText.isDisplayed();
    }

    clickNavigationEmailButton() {
        this.emailAddressButton.waitForExist();
        this.emailAddressButton.touchAction('tap');
    }

    clickEmailAddressField() {
        this.emailAddressField.waitForExist();
        this.emailAddressField.touchAction('tap');
    }

    enterEmailId(type) {
        this.emailAddressField.setValue(USERS[type].email);
    }

    enterEmailIdForNewUser() {
       this.emailAddressField.setValue("jeet+"+(0|Math.random()*9e6).toString(36)+"@makeen.io");
    }

    clickEmailNextButton() {
        this.emailNextButton.waitForExist();
        this.emailNextButton.touchAction('tap');
    }
   
    clickOTPNextButton() {
            this.otpNextButton.waitForExist();
            this.otpNextButton.touchAction('tap');
        }

    enterFirstNumber() {
        this.firstNumber.waitForExist();
        this.firstNumber.pressKeyCode(8);
    }

    enterSecondNumber() {
        this.secondNumber.waitForExist();
        this.secondNumber.pressKeyCode(9);
    }

    enterThirdNumber() {
        this.thirdNumber.waitForExist();
        this.thirdNumber.pressKeyCode(10);
    }

    enterFourthNumber() {
        this.fourthNumber.waitForExist();
        this.fourthNumber.pressKeyCode(11);
    }

    isCommunityPageTextDisplayed() {
        this.commuinityPageText.waitForExist();
        return this.commuinityPageText.isDisplayed();
    }

    selectExistingCommunity() {
        this.enterCommunityButton.waitForExist();
        this.enterCommunityButton.touchAction('tap');
    }

    clickTurnOnLocation() {
        this.turnONLocation.waitForExist();
        this.turnONLocation.touchAction('tap');
    }

    clickRateApp() {
        this.rateApp.waitForExist();
        this.rateApp.touchAction('tap');
    }

    isAppHeaderTextDisplayed() {
        this.appHeaderText.waitForExist();
        return this.appHeaderText.isDisplayed();
    }

}
module.exports = new ExistingUserPage();