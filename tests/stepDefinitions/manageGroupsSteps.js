const manageGroupsPage = require('../pages/manageGroupsPage');
const existingUserPage = require('../pages/existingUserPage');

When(/^I tap on Humburger menu$/, () => {
    manageGroupsPage.selectHumburgerMenu();
    driver.pause(10000);
    manageGroupsPage.swipeDownPage();
});

When(/^I select groups button$/, () => {
    manageGroupsPage.clickOnGroupButton();
    driver.pause(1000);
});

Then(/^I should be on groups page$/, () => {
    driver.pause(1000);
    expect(manageGroupsPage.verifyGroupPageTitle()).to.equal(true);
});

When(/^I click to create groups$/, () => {
    driver.pause(1000);
    manageGroupsPage.clickToAddGroup();
});

When(/^I cancel the group creation$/, () => {
    manageGroupsPage.clickToCancelGroupCreation();
});

When(/^I enter group name in (\w+)$/, (type) => {
    manageGroupsPage.clickOnGroupNameField();
    manageGroupsPage.enterGroupName(type);
    driver.back();
});

When(/^I enable the group chat$/, () => {
    manageGroupsPage.clickToEnableGroupChat();
    manageGroupsPage.swipeDownPage();
    manageGroupsPage.swipeDownPage();
    manageGroupsPage.swipeDownPage();
});

When(/^I write the group description in (\w+)$/, (type) => {
    manageGroupsPage.clickOnGroupDescriptionField();
    manageGroupsPage.enterGroupDescription(type);
    driver.back();
});

When(/^I write the group rules in (\w+)$/, (type) => {
    manageGroupsPage.clickOnGroupRulesField();
    manageGroupsPage.enterGroupRules(type);
    driver.back();
});

When(/^I select the group location$/, () => {
    manageGroupsPage.clickOnGroupLocationButton();
    manageGroupsPage.clickOnGroupLocationSearchButton();
    manageGroupsPage.enterLocationDetailsInSearchField();
    manageGroupsPage.selectGroupLocationSearchResult();
});

When(/^I create the group$/, () => {
    manageGroupsPage.clickOnCreateGroupButton();
});

Then(/^I should see the group listed in the group section$/, () => {
    driver.pause(1000);
    expect(manageGroupsPage.isCreatedGroupDisplayed()).to.equal(true);
    driver.back();
    driver.back();
});

When(/^I select to view the existing group$/, () => {
    manageGroupsPage.selectToViewExistingGroup();
});

When(/^I select to delete the group$/, () => {
    manageGroupsPage.selectGroupOptionButton();
    manageGroupsPage.clickOnDeleteGroupbutton();
});

When(/^I confirm the delete pop up$/, () => {
    manageGroupsPage.clickOnRemoveGroupConfirmButton();
   // driver.pause(5000);
   // existingUserPage.clickRateApp();
});

