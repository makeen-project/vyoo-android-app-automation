const createPostPage = require('../pages/createPostPage');
const newUserPage = require('../pages/newUserPage');

When(/^I click on create post CTA$/, () => {
    createPostPage.clickOnCreatePostCTA();
});

When(/^I write (\w+)$/, (type) => {
    createPostPage.selectCreatePostTextField();
    createPostPage.enterTextONTextField(type);
    driver.pause(2000);
    driver.back();
    driver.pause(2000);
});

Then(/^the post CTA should be enabled$/, () => {
    expect(createPostPage.isPostCTAButtonDisplayed()).to.equal(true);
});

When(/^I discard the post$/, () => {
    createPostPage.clickOnCancelPostButton();
});

When(/^I add (\w+)$/, (type) => {
    createPostPage.clickOnAddYoutubeVideoLink();
    createPostPage.clickOnYoutubeField();
    createPostPage.enterUrlONYoutubeUrlField(type);
});

When(/^I add photo in the post$/, () => {
    createPostPage.clickToScrollPageUp();
    createPostPage.clickOnAddPhotoOption();
    newUserPage.clickTakePhotoButton();
    newUserPage.clickAllowPhotoAccess();
    newUserPage.clickAllowAudioAccess();
    newUserPage.clickBackPhotoButton();
    driver.pause(10000);
    newUserPage.clickPhotoClickButton();
    driver.pause(10000);
});

When(/^I click on create poll option$/, () => {
    createPostPage.clickToScrollPageUp();
    createPostPage.clickOnCreatePollOption();

});

When(/^I enter poll quesion in (\w+)$/, (type) => {
    createPostPage.selectPollquestion();
    createPostPage.enterPollQuestion(type);
    createPostPage.selectOptionOne();
    createPostPage.enterOptionOne(type);
  //  createPostPage.selectOptionTwo();
  //  createPostPage.selectOptionOne();
    createPostPage.enterOptionTwo(type);
});

When(/^I add the poll in the post$/, () => {
    createPostPage.selectPollDoneButton();

});

Then(/^I should see the confirmation dialog$/, () => {
    expect(createPostPage.isDiscardPopUpDisplayed()).to.equal(true);
});

When(/^I dismiss the pop up$/, () => {
    createPostPage.clickOnDiscardButton();
});

When(/^I click on Post CTA$/, () => {
    createPostPage.clickOnPostCTAButton();
});

Then(/^the post should be created$/, () => {
    expect(createPostPage.isCreatedPostTextDisplayed()).to.equal(true);
});
