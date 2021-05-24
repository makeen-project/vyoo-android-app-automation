const SELECTORS = require('../elements/newUserElements');
class NewUserPage1 {

    get turnOnLocation() {
        const selector = SELECTORS.ANDROID.TURN_ON_LOCATION;
        return $(selector);
    }

    get allowLocationAccess() {
        const selector = SELECTORS.ANDROID.ALLOW_LOCATION_ACCESS;
        return $(selector);
    }

    get professionalDetailsPageText() {
        const selector = SELECTORS.ANDROID.PROFESSIONAL_DETAILS_PAGE_TEXT;
        return $(selector);
    }

    get jobTitle() {
        const selector = SELECTORS.ANDROID.JOB_TITLE;
        return $(selector);
    }

    get jobTitleSearchBox() {
        const selector = SELECTORS.ANDROID.JOB_TITLE_SEARCH_BOX;
        return $(selector);
    }

    get jobTitleSearchResult() {
        const selector = SELECTORS.ANDROID.JOB_TITLE_SEARCH_RESULT;
        return $(selector);
    }

    get industryName() {
        const selector = SELECTORS.ANDROID.INDUSTRY_NAME;
        return $(selector);
    }

    get industrySearchBox() {
        const selector = SELECTORS.ANDROID.INDUSTRY_SEARCH_BOX;
        return $(selector);
    }

    get industrySearchResult() {
        const selector = SELECTORS.ANDROID.INDUSTRY_SEARCH_RESULT;
        return $(selector);
    }

    get companyName() {
        const selector = SELECTORS.ANDROID.COMPANY_NAME;
        return $(selector);
    }

    get companyNameSearchbox() {
        const selector = SELECTORS.ANDROID.COMPANY_NAME_SEARCH_FIELD;
        return $(selector);
    }

    get companyNameSearchResult() {
        const selector = SELECTORS.ANDROID.COMPANY_NAME_SEARCH_RESULT;
        return $(selector);
    }

    get shortIntroField() {
        const selector = SELECTORS.ANDROID.SHORT_INTRO_FIELD;
        return $(selector);
    }

    get profilePageNextButton() {
        const selector = SELECTORS.ANDROID.PROFILE_PAGE_NEXT_BUTTON;
        return $$(selector)[3];
    }

    get continueButton() {
        const selector = SELECTORS.ANDROID.CONTINUE_BUTTON;
        return $(selector);
    }

    get goalsPageText() {
        const selector = SELECTORS.ANDROID.GOALS_PAGE_TEXT;
        return $(selector);
    }

    selectTurnOnLocation() {
        this.turnOnLocation.waitForExist();
        this.turnOnLocation.touchAction('tap');
    }

    clickOnAllowLocationAccess() {
        this.allowLocationAccess.waitForExist();
        this.allowLocationAccess.touchAction('tap');
    }

    isProfessionalDetailsPageDisplayed() {
        this.professionalDetailsPageText.waitForExist();
        return this.professionalDetailsPageText.isDisplayed();
    }

    clickOnJobTitleField() {
        this.jobTitle.waitForExist();
        this.jobTitle.touchAction('tap');
    }

    clickOnJobTitleSearchBox() {
        this.jobTitleSearchBox.waitForExist();
        this.jobTitleSearchBox.touchAction('tap');
    }

    enterJobTitleDetails(type) {
        this.jobTitleSearchBox.setValue(TEST_DATA[type].job_title);
    }

    selectJobTitleSearchResult() {
        this.jobTitleSearchResult.waitForExist();
        this.jobTitleSearchResult.touchAction('tap');
    }

    clickOnIndustryNameField() {
        this.industryName.waitForExist();
        this.industryName.touchAction('tap');
    }

    clickOnIndustrySearchBox() {
        this.industrySearchBox.waitForExist();
        this.industrySearchBox.touchAction('tap');
    }

    enterIndustryDetails(type) {
        this.industrySearchBox.setValue(TEST_DATA[type].industry_name);
    }

    selectIndustryNameSearchResult() {
        this.industrySearchResult.waitForExist();
        this.industrySearchResult.touchAction('tap');
    }

    clickCompanyNameField() {
        this.companyName.waitForExist();
        this.companyName.touchAction('tap');
    }

    clickCompanyNameSearchBox() {
        this.companyNameSearchbox.waitForExist();
        this.companyNameSearchbox.touchAction('tap');
    }

    enterCompanyNameDetails(type) {
        this.companyNameSearchbox.setValue(TEST_DATA[type].company_name);
    }

    selectCompanyNameSearchResult() {
        this.companyNameSearchResult.waitForExist();
        this.companyNameSearchResult.touchAction('tap');
    }

    clickShortIntroField() {
        this.shortIntroField.waitForExist();
        this.shortIntroField.touchAction('tap');
    }

    enterShortIntroDetails(type) {
        this.shortIntroField.setValue(TEST_DATA[type].short_intro);
    }

    clickProfilePageNextButton() {
        this.profilePageNextButton.waitForExist();
        this.profilePageNextButton.touchAction('tap');
    }

    clickONContinueButton() {
        this.continueButton.waitForExist();
        this.continueButton.touchAction('tap');
    }

    isGoalsPageTextDisplayed() {
        this.goalsPageText.waitForExist();
        return this.goalsPageText.isDisplayed();
    }

}

module.exports = new NewUserPage1();

