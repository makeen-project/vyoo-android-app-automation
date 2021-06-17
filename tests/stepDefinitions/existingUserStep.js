const existingUserPage = require('../pages/existingUserPage');

Given(/^I launches the app$/, () => {
    driver.launchApp();
    existingUserPage.clickAllow();
});

Then(/^I should be landed on homepage$/, () => {
    expect(existingUserPage.isHomepageTextDisplayed()).to.equal(true);
});

When(/^I enter email id in (\w+)$/, (type) => {
    existingUserPage.clickNavigationEmailButton();
    existingUserPage.clickEmailAddressField();
    existingUserPage.enterEmailId(type);
    existingUserPage.clickEmailNextButton();
});

When(/^I enter otp$/, () => {
    existingUserPage.enterFirstNumber();
    existingUserPage.enterSecondNumber();
    existingUserPage.enterThirdNumber();
    existingUserPage.enterFourthNumber();
    existingUserPage.clickOTPNextButton();
});

Then(/^I should be on community selection page$/, () => {
    expect(existingUserPage.isCommunityPageTextDisplayed()).to.equal(true);
});

When(/^I select the existing community$/, () => {
    existingUserPage.selectExistingCommunity();
   // existingUserPage.clickAllow();
   existingUserPage.clickTurnOnLocation();
   // existingUserPage.clickRateApp();
});

Then(/^I should be able to navigate to the app homepage$/, () => {
    expect(existingUserPage.isAppHeaderTextDisplayed()).to.equal(true);
});
