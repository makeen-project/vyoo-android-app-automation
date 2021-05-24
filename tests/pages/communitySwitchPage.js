const SELECTORS = require('../elements/communitySwitchElements');
class CommunitySwitchPage {

    get unselectCommunityOne() {
        const selector = SELECTORS.ANDROID.UNSELECT_COMMUNITY_ONE;
        return $$(selector)[1];
    }

    get unselectCommunityTwo() {
        const selector = SELECTORS.ANDROID.UNSELECT_COMMUNITY_TWO;
        return $$(selector)[2];
    }

    get selectCommunityButton() {
        const selector = SELECTORS.ANDROID.SELECT_COMMUNITY_BUTTON;
        return $(selector);
    }

    get communitySwitchButton() {
        const selector = SELECTORS.ANDROID.COMMUNITY_SWITCH_BUTTON;
        return $(selector);
    }

    get cancelButton() {
        const selector = SELECTORS.ANDROID.CANCEL_BUTTON;
        return $(selector);
    }

    get addCommunity() {
        const selector = SELECTORS.ANDROID.ADD_COMMUNITY_BUTTON;
        return $(selector);
    }

    get joinCommunity() {
        const selector = SELECTORS.ANDROID.JOIN_COMMUNITY_BUTTON;
        return $$(selector)[1];
    }

    get newCommunityText() {
        const selector = SELECTORS.ANDROID.NEW_COMMUNITY_TEXT;
        return $(selector);
    }

    clickToUnselectCommunityOne() {
        this.unselectCommunityOne.waitForExist();
        this.unselectCommunityTwo.touchAction('tap');
    }

    clickToUnselectCommunityTwo() {
        this.unselectCommunityTwo.waitForExist();
        this.unselectCommunityTwo.touchAction('tap');
    }

    clickToSelectOneCommunity() {
        this.selectCommunityButton.waitForExist();
        this.selectCommunityButton.touchAction('tap');
    }

    selectSwitchCommunityButton() {
        this.communitySwitchButton.waitForExist();
        this.communitySwitchButton.touchAction('tap');
    }

    clickOnCancelButton() {
        this.cancelButton.waitForExist();
        this.cancelButton.touchAction('tap');
    }

    isExistingCommunityDisplayed() {
        this.communitySwitchButton.waitForExist();
        return this.communitySwitchButton.isDisplayed();
    }

    clickOnAddCommunity() {
        this.addCommunity.waitForExist();
        this.addCommunity.touchAction('tap');
    }

    clickOnJoinCommunity() {
        driver.pause(5000);
        this.joinCommunity.waitForExist();
        this.joinCommunity.touchAction('tap');
    }

    isNewCommunityTextDisplayed() {
        this.newCommunityText.waitForExist();
        return this.newCommunityText.isDisplayed();
    }

}
module.exports = new CommunitySwitchPage();
