const SELECTORS = require('../elements/createPostElements');
class CreatePostPage {

    get createPostCTA() {
        const selector = SELECTORS.ANDROID.CREATE_POST_CTA;
        console.log("post count:" + $$(selector).length);
        return $$(selector)[3];
    }

    get createPostTextField() {
        const selector = SELECTORS.ANDROID.CREATE_POST_TEXT_FIELD;
        return $(selector);
    }

    get postCTAButton() {
        const selector = SELECTORS.ANDROID.POST_CTA_BUTTON;
        return $(selector);
    }

    get cancelPostButton() {
        const selector = SELECTORS.ANDROID.CANCEL_POST_BUTTON;
        return $(selector);
    }

    get addYoutubeVideoLink() {
        const selector = SELECTORS.ANDROID.YOUTUBE_VIDEO_LINK;
      //  console.log("button:" + $$(selector).length);
        return $(selector);
    }

    // get addYoutubeVideoLinks() {
    //     const selector = SELECTORS.ANDROID.ADD_YOUTUBE_VIDEO_LINK;
    //     console.log("button:" + $$(selector).length);
    //     return $$(selector)[21];
    // }

    get youtubeUrlField() {
        const selector = SELECTORS.ANDROID.YOUTUBE_URL_FIELD;
        return $(selector);
    }

    get scrollPageUp() {
        const selector = SELECTORS.ANDROID.SCROLL_PAGE_UP;
        console.log("button photo:" + $$(selector).length);
        return $$(selector)[20];
    }

    get addPhotoOption() {
        const selector = SELECTORS.ANDROID.ADD_PHOTO_OPTION;
       // console.log("button photo:" + $$(selector).length);
        return $(selector);
    }

    get addPollOption() {
        const selector = SELECTORS.ANDROID.CREATE_POLL_OPTION;
       // console.log("poll button:" + $$(selector).length);
        return $(selector);
    }

    get pollquestion() {
        const selector = SELECTORS.ANDROID.POLL_QUESTION;
        return $(selector);
    }

    get optionOne() {
        const selector = SELECTORS.ANDROID.OPTION_ONE;
        return $(selector);
    }

    get optionTwo() {
        const selector = SELECTORS.ANDROID.OPTION_TWO;
        return $(selector);
    }

    get pollDoneButton() {
        const selector = SELECTORS.ANDROID.POLL_DONE_BUTTON;
        return $(selector);
    }

    get discardPostPopUp() {
        const selector = SELECTORS.ANDROID.DISCARD_POST_POP_UP;
        return $(selector);
    }

    get discardButton() {
        const selector = SELECTORS.ANDROID.DISCARD_BUTTON;
        return $(selector);
    }

    get createdPostText() {
        const selector = SELECTORS.ANDROID.CREATED_POST_TEXT;
        return $(selector);
    }

    clickOnCreatePostCTA() {
        driver.pause(2000);
        this.createPostCTA.waitForExist();
        this.createPostCTA.touchAction('tap');
    }

    selectCreatePostTextField() {
        this.createPostTextField.waitForExist();
        this.createPostTextField.touchAction('tap');
    }

    enterTextONTextField(type) {
        this.createPostTextField.setValue(TEST_DATA[type].text);
    }

    isPostCTAButtonDisplayed() {
        this.postCTAButton.waitForExist();
        return this.postCTAButton.isDisplayed();
    }

    clickOnCancelPostButton() {
        driver.pause(5000);
        this.cancelPostButton.waitForExist();
        this.cancelPostButton.touchAction('tap');
    }

    clickToScrollPageUp() {
        driver.pause(30000);
        this.scrollPageUp.waitForExist();
        this.scrollPageUp.touchAction('tap');
    }

    clickOnAddYoutubeVideoLink() {
        this.addYoutubeVideoLink.waitForExist();
        this.addYoutubeVideoLink.touchAction('tap');
    }

    clickOnYoutubeField() {
        this.youtubeUrlField.waitForExist();
        this.youtubeUrlField.touchAction('tap');
    }

    enterUrlONYoutubeUrlField(type) {
        this.youtubeUrlField.setValue(TEST_DATA[type].url);
    }  

    clickOnAddPhotoOption() {
        this.addPhotoOption.waitForExist();
        this.addPhotoOption.touchAction('tap');
    }

    clickOnCreatePollOption() {
        this.addPollOption.waitForExist();
        this.addPollOption.touchAction('tap');
    }
    
    isDiscardPopUpDisplayed() {
        this.discardPostPopUp.waitForExist();
        return this.discardPostPopUp.isDisplayed();
    }

    clickOnDiscardButton() {
        this.discardButton.waitForExist();
        this.discardButton.touchAction('tap');
    }

    clickOnPostCTAButton() {
        this.postCTAButton.waitForExist();
        this.postCTAButton.touchAction('tap');
    }

    isCreatedPostTextDisplayed() {
        this.createdPostText.waitForExist();
        return this.createdPostText.isDisplayed();
    }

    selectPollquestion() {
        this.pollquestion.waitForExist();
        this.pollquestion.touchAction('tap');
    }

    enterPollQuestion(type) {
        this.pollquestion.setValue(TEST_DATA[type].question);
    }

    selectOptionOne() {
        this.optionOne.waitForExist();
        this.optionOne.touchAction('tap');
    }

    enterOptionOne(type) {
        this.optionOne.setValue(TEST_DATA[type].option_one);
    }

    selectOptionTwo() {
        this.optionTwo.waitForExist();
        this.optionTwo.touchAction('tap');
    }

    enterOptionTwo(type) {
        this.optionTwo.setValue(TEST_DATA[type].option_two);
    }

    selectPollDoneButton() {
        this.pollDoneButton.waitForExist();
        this.pollDoneButton.touchAction('tap');
    }

}
module.exports = new CreatePostPage();