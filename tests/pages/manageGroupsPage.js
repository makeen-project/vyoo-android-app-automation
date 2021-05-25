const SELECTORS = require('../elements/manageGroupsElements');
class ManageGroupsPage {

    get humburgerMenu() {
        const selector = SELECTORS.ANDROID.HUMBURGER_MENU;
        return $(selector);
    }

    get groupButton() {
        const selector = SELECTORS.ANDROID.GROUP_BUTTON;
        return $(selector);
    }

    get groupPageTitle() {
        const selector = SELECTORS.ANDROID.GROUP_PAGE_TITLE;
        return $(selector);
    }

    get addGroupButton() {
        const selector = SELECTORS.ANDROID.ADD_GROUP_BUTTON;
        console.log("count"+$$(selector).length);
        return $$(selector)[15];
    }

    get cancelGroupButton() {
        const selector = SELECTORS.ANDROID.CANCEL_GROUP_BUTTON;
        return $(selector);
    }

    get groupName() {
        const selector = SELECTORS.ANDROID.GROUP_NAME;
        return $(selector);
    }

    get enableGroupchat() {
        const selector = SELECTORS.ANDROID.ENABLE_GROUP_CHAT;
        return $(selector);
    }

    get groupDescription() {
        const selector = SELECTORS.ANDROID.GROUP_DESCRIPTION;
        return $(selector);
    }

    get groupRules() {
        const selector = SELECTORS.ANDROID.GROUP_RULES;
        return $(selector);
    }

    get groupLocationButton() {
        const selector = SELECTORS.ANDROID.GROUP_LOCATION_BUTTON;
        return $(selector);
    }

    get groupLocationSearchButton() {
        const selector = SELECTORS.ANDROID.GROUP_LOCATION_SEARCH_BUTTON;
        return $(selector);
    }

    get groupLocationSearchResult() {
        const selector = SELECTORS.ANDROID.GROUP_LOCATION_SEARCH_RESULT;
        return $(selector);
    }

    get groupCreateButton() {
        const selector = SELECTORS.ANDROID.GROUP_CREATE_BUTTON;
        return $(selector);
    }

    get createdGroupDetails() {
        const selector = SELECTORS.ANDROID.CREATED_GROUP;
        return $(selector);
    }

    get viewExistingGroup() {
        const selector = SELECTORS.ANDROID.VIEW_EXISTING_GROUP;
        return $(selector);
    }

    get groupOptionButton() {
        const selector = SELECTORS.ANDROID.GROUP_OPTION_BUTTON;
        return $(selector);
    }

    get deleteGroupButton() {
        const selector = SELECTORS.ANDROID.DELETE_GROUP_BUTTON;
        return $(selector);
    }

    get removeGroupConfirmButton() {
        const selector = SELECTORS.ANDROID.REMOVE_GROUP_CONFIRM_BUTTON;
        return $(selector);
    }

    selectHumburgerMenu() {
        this.humburgerMenu.waitForExist();
        this.humburgerMenu.touchAction('tap');
    }

    clickOnGroupButton() {
        this.groupButton.waitForExist();
        this.groupButton.touchAction('tap');
    }
    
    verifyGroupPageTitle() {
        this.groupPageTitle.waitForExist();
        return this.groupPageTitle.isDisplayed();
    }

    clickToAddGroup() {
        this.addGroupButton.waitForExist();
        this.addGroupButton.touchAction('tap');
    }

    clickToCancelGroupCreation() {
        this.cancelGroupButton.waitForExist();
        this.cancelGroupButton.touchAction('tap');
    }

    clickOnGroupNameField() {
        this.groupName.waitForExist();
        this.groupName.touchAction('tap');
    }

    enterGroupName(type) {
        this.groupName.setValue(TEST_DATA[type].group_name);
    }

    clickToEnableGroupChat() {
        this.enableGroupchat.waitForExist();
        this.enableGroupchat.touchAction('tap');
    }

    clickOnGroupDescriptionField() {
        this.groupDescription.waitForExist();
        this.groupDescription.touchAction('tap');
    }

    enterGroupDescription(type) {
        this.groupDescription.setValue(TEST_DATA[type].group_desc);
    }

    clickOnGroupRulesField() {
        this.groupRules.waitForExist();
        this.groupRules.touchAction('tap');
    }

    enterGroupRules(type) {
        this.groupRules.setValue(TEST_DATA[type].group_rules);
    }

    clickOnGroupLocationButton() {
        this.groupLocationButton.waitForExist();
        this.groupLocationButton.touchAction('tap');
    }

    clickOnGroupLocationSearchButton() {
        this.groupLocationSearchButton.waitForExist();
        this.groupLocationSearchButton.touchAction('tap');
    }

    enterLocationDetailsInSearchField() {
        this.groupLocationSearchButton.setValue("Kolkata");
    }

    selectGroupLocationSearchResult() {
        this.groupLocationSearchResult.waitForExist();
        this.groupLocationSearchResult.touchAction('tap');
    }

    clickOnCreateGroupButton() {
        this.groupCreateButton.waitForExist();
        this.groupCreateButton.touchAction('tap');
    }

    isCreatedGroupDisplayed() {
        this.createdGroupDetails.waitForExist();
        return this.createdGroupDetails.isDisplayed();
    }

    swipeDownPage () {
        driver.touchPerform([
            { action: 'press', options: { x: 400, y: 1000 }},
            { action: 'wait', options: 400 },
            { action: 'moveTo', options: { x: 400, y: 200 }},
            { action: 'release' }
        ]);
    }

    selectToViewExistingGroup() {
        this.viewExistingGroup.waitForExist();
        this.viewExistingGroup.touchAction('tap');
    }

    selectGroupOptionButton() {
        driver.pause(1000);
        this.groupOptionButton.waitForExist();
        this.groupOptionButton.touchAction('tap');
    }

    clickOnDeleteGroupbutton() {
        this.deleteGroupButton.waitForExist();
        this.deleteGroupButton.touchAction('tap');
    }

    clickOnRemoveGroupConfirmButton() {
        this.removeGroupConfirmButton.waitForExist();
        this.removeGroupConfirmButton.touchAction('tap');
    }

}
module.exports = new ManageGroupsPage();
