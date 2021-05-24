const communitySwitchPage = require('../pages/communitySwitchPage');
const existingUserPage = require('../pages/existingUserPage');

When(/^I unselect other communities$/, () => {
    communitySwitchPage.clickToUnselectCommunityOne();
   // communitySwitchPage.clickToUnselectCommunityTwo();
});

When(/^I select one community$/, () => {
    communitySwitchPage.clickToSelectOneCommunity();
    existingUserPage.clickTurnOnLocation();
    existingUserPage.clickRateApp();
});

When(/^I navigate to community switching window$/, () => {
    communitySwitchPage.selectSwitchCommunityButton();
});

When(/^I select cancel on community switching window$/, () => {
    communitySwitchPage.clickOnCancelButton();
});

Then(/^I should be back to the existing community homepage$/, () => {
    expect(communitySwitchPage.isExistingCommunityDisplayed()).to.equal(true);
});

When(/^I select another community from the community list$/, () => {
    communitySwitchPage.clickOnAddCommunity();
    communitySwitchPage.clickOnJoinCommunity();
});

Then(/^I should be on the new community homepage$/, () => {
    expect(communitySwitchPage.isNewCommunityTextDisplayed()).to.equal(true);
});
