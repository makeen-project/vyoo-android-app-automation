const SELECTORS = require('../elements/newUserElements');
class NewUserPage {

    get newUserCommunityPageText() {
        const selector = SELECTORS.ANDROID.COMMUNITY_PAGE_TEXT_NEW_USER;
        return $(selector);
    }

    get communityUrlLink() {
        const selector = SELECTORS.ANDROID.COMMUNITY_URL_LINK;
        return $(selector);
    }

    get communityUrlTextField() {
        const selector = SELECTORS.ANDROID.COMMUNITY_URL_TEXT_FIELD;
        return $(selector);
    }

    get communityPageNextButton() {
        const selector = SELECTORS.ANDROID.COMMUNITY_PAGE_NEXT_BUTTON;
        return $(selector);
    }

    get profileDetailsPageText() {
        const selector = SELECTORS.ANDROID.PROFILE_DETAILS_PAGE_TEXT;
        return $(selector);
    }

    get firstNameField() {
        const selector = SELECTORS.ANDROID.FIRST_NAME_FIELD;
        return $(selector);
    }

    get lastNameField() {
        const selector = SELECTORS.ANDROID.LAST_NAME_FIELD;
        return $(selector);
    }

    get personalDetailsNextButton() {
        const selector = SELECTORS.ANDROID.PERSONAL_DETAILS_NEXT_BUTTON;
        return $(selector);
    }

    get addPhotoButton() {
        const selector = SELECTORS.ANDROID.ADD_PHOTO_BUTTON;
        return $(selector);
    }

    get takeAPhotoButton() {
        const selector = SELECTORS.ANDROID.TAKE_A_PHOTO;
        return $(selector);
    }

    get photoClickButton() {
        const selector = SELECTORS.ANDROID.CLICK_PHOTO;
        return $$(selector)[2];
    }

    get allowPhotoClickAccess() {
        const selector = SELECTORS.ANDROID.ALLOW_PHOTO_CLICK_ACCESS;
        return $(selector);
    }

    get allowAudioAccess() {
        const selector = SELECTORS.ANDROID.ALLOW_AUDIO_ACCESS;
        return $(selector);
    }

    get addPhotoPageNextButton() {
        const selector = SELECTORS.ANDROID.ADD_PHOTO_PAGE_NEXT_BUTTON;
        return $$(selector)[1];
    }

    get dateOfBirthField() {
        const selector = SELECTORS.ANDROID.DATE_OF_BIRTH_FIELD;
        return $(selector);
    }

    get yearDropDown() {
        const selector = SELECTORS.ANDROID.YEAR_DROP_DOWN;
        return $$(selector)[2];
    }

    get doneButtton() {
        const selector = SELECTORS.ANDROID.DONE_BUTTON;
        return $(selector);
    }

    get genderField() {
        const selector = SELECTORS.ANDROID.GENDER_FIELD;
        return $(selector);
    }

    get genderPageNextButton() {
        const selector = SELECTORS.ANDROID.GENDER_PAGE_NEXT_BUTTON;
        return $$(selector)[2];
    }

    isNewUserCommunityTextDisplayed() {
        this.newUserCommunityPageText.waitForExist();
        return this.newUserCommunityPageText.isDisplayed();
    }

    clickCommunityUrlLink() {
        this.communityUrlLink.waitForExist();
        this.communityUrlLink.touchAction('tap');
    }

    clickCommunityUrlTextfield() {
        this.communityUrlTextField.waitForExist();
        this.communityUrlTextField.touchAction('tap');
    }

    enterCommunityUrl(type) {
        this.communityUrlTextField.setValue(USERS[type].url);
    }

    clickCommunityPageNextButton() {
        this.communityPageNextButton.waitForExist();
        this.communityPageNextButton.touchAction('tap');
    }

    isProfileDetailsTextDisplayed() {
        this.profileDetailsPageText.waitForExist();
        return this.profileDetailsPageText.isDisplayed();
    }

    clickFirstNameField() {
        this.firstNameField.waitForExist();
        this.firstNameField.touchAction('tap');
    }

    enterFirstName(type) {
        this.firstNameField.setValue(USERS[type].firstName);
    }

    clickLastNameField() {
        this.lastNameField.waitForExist();
        this.lastNameField.touchAction('tap');
    }

    enterLastName(type) {
        this.lastNameField.setValue(USERS[type].lastName);
    }

    clickPersonalDetailsNextButton() {
        this.personalDetailsNextButton.waitForExist();
        this.personalDetailsNextButton.touchAction('tap');
    }

    clickAddPhotoButton() {
        this.addPhotoButton.waitForExist();
        this.addPhotoButton.touchAction('tap');
    }

    clickTakePhotoButton() {
        this.takeAPhotoButton.waitForExist();
        this.takeAPhotoButton.touchAction('tap');
    }

    clickPhotoClickButton() {
        this.photoClickButton.waitForExist();
        this.photoClickButton.touchAction('tap');
    }

    clickAllowPhotoAccess() {
        this.allowPhotoClickAccess.waitForExist();
        this.allowPhotoClickAccess.touchAction('tap');
    }

    clickAllowAudioAccess() {
        this.allowAudioAccess.waitForExist();
        this.allowAudioAccess.touchAction('tap');
    }

    clickAddPhotoPageNextButton() {
        this.addPhotoPageNextButton.waitForExist();
        this.addPhotoPageNextButton.touchAction('tap');
    }

    clickOnDateOfBirthField() {
        this.dateOfBirthField.waitForExist();
        this.dateOfBirthField.touchAction('tap');
    }

    selectYear() {
        this.yearDropDown.waitForExist();
        this.yearDropDown.touchAction([
                { action: 'press', x: 10, y: 10 },
                { action: 'wait', ms: 1000 },
                { action: 'moveTo', x: 0, y: 1100 },
                'release'
            ])
    }

    clickDoneButton() {
        this.doneButtton.waitForExist();
        this.doneButtton.touchAction('tap');
    }

    clickOnGenderField() {
        this.genderField.waitForExist();
        this.genderField.touchAction('tap');
    }

    clickGenderPageNextButton() {
        this.genderPageNextButton.waitForExist();
        this.genderPageNextButton.touchAction('tap');
    }

}
module.exports = new NewUserPage();