const newUserPage = require('../pages/newUserPage');
const existingUserPage = require('../pages/existingUserPage');
const newUserPage1 = require('../pages/newUserPage1');
const newUserPage2 = require('../pages/newUserPage2');

When(/^I enter email id for new user$/, () => {
    existingUserPage.clickNavigationEmailButton();
    existingUserPage.clickEmailAddressField();
    existingUserPage.enterEmailIdForNewUser();
    existingUserPage.clickEmailNextButton();
});

Then(/^I should be landed on community selection page$/, () => {
    expect(newUserPage.isNewUserCommunityTextDisplayed()).to.equal(true);
});

When(/^I enter the link details for (\w+)$/, (type) => {
    newUserPage.clickCommunityUrlLink();
    newUserPage.clickCommunityUrlTextfield();
    newUserPage.enterCommunityUrl(type);
    newUserPage.clickCommunityPageNextButton();
});

Then(/^I should be navigated to profile details screen$/, () => {
    expect(newUserPage.isProfileDetailsTextDisplayed()).to.equal(true);
});

When(/^I enter first name in (\w+)$/, (type) => {
    newUserPage.enterFirstName(type);
});

When(/^I enter last name in (\w+)$/, (type) => {
    newUserPage.enterLastName(type);
    newUserPage.clickPersonalDetailsNextButton();
});

When(/^I upload profile photo$/, () => {
    newUserPage.clickAddPhotoButton();
    newUserPage.clickTakePhotoButton();
    newUserPage.clickAllowPhotoAccess();
    newUserPage.clickAllowAudioAccess();
    driver.pause(10000);
    newUserPage.clickPhotoClickButton();
    driver.pause(10000);
    newUserPage.clickAddPhotoPageNextButton();
});

When(/^I enter date of birth$/, () => {
    newUserPage.clickOnDateOfBirthField();
    driver.pause(10000);
    newUserPage.selectYear();
    driver.pause(10000);
    newUserPage.clickDoneButton();
});

When(/^I select Gender$/, () => {
    newUserPage.clickOnGenderField();
    newUserPage.clickDoneButton();
    driver.pause(10000);
    newUserPage.clickGenderPageNextButton();
});

When(/^I turn on location$/, () => {
    newUserPage1.selectTurnOnLocation();
    newUserPage1.clickOnAllowLocationAccess();
});

Then(/^I should be navigated to professional details screen$/, () => {
    expect(newUserPage1.isProfessionalDetailsPageDisplayed()).to.equal(true);
});

When(/^I enter job title in (\w+)$/, (type) => {
    newUserPage1.clickOnJobTitleField();
    newUserPage1.clickOnJobTitleSearchBox();
    newUserPage1.enterJobTitleDetails(type);
    newUserPage1.selectJobTitleSearchResult();
});

When(/^I enter Industry in (\w+)$/, (type) => {
    newUserPage1.clickOnIndustryNameField();
    newUserPage1.clickOnIndustrySearchBox();
    newUserPage1.enterIndustryDetails(type);
    newUserPage1.selectIndustryNameSearchResult();
});

When(/^I enter Company name in (\w+)$/, (type) => {
    newUserPage1.clickCompanyNameField();
    newUserPage1.clickCompanyNameSearchBox();
    newUserPage1.enterCompanyNameDetails(type);
    newUserPage1.selectCompanyNameSearchResult();
});

When(/^I enter short intro in (\w+)$/, (type) => {
    newUserPage1.clickShortIntroField();
    newUserPage1.enterShortIntroDetails(type);
    newUserPage1.clickProfilePageNextButton();
    newUserPage1.clickONContinueButton();
});

Then(/^I should see goals page$/, () => {
    expect(newUserPage1.isGoalsPageTextDisplayed()).to.equal(true);
});

When(/^I add my goals$/, () => {
    newUserPage2.selectFirstGoal();
    newUserPage2.selectSecondGoal();
    newUserPage2.selectThirdGoal();
    newUserPage2.clickGoalsPageNextButton();
});

When(/^I add my interests$/, () => {
    newUserPage2.selectFirstInterest();
    newUserPage2.selectSecondInterest();
    newUserPage2.selectThirdInterest();
    newUserPage2.clickInterestPageNextButton();
    newUserPage2.clickOnVyooPageContinueButton();
    driver.pause(3000);
    newUserPage2.clickOnNotNowButton();
});
