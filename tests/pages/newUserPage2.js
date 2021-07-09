const SELECTORS = require('../elements/newUserElements');
class NewUserPage2 {

    get firstGoal() {
        const selector = SELECTORS.ANDROID.FIRST_GOAL;
        return $(selector);
    }

    get secondGoal() {
        const selector = SELECTORS.ANDROID.SECOND_GOAL;
        return $(selector);
    }

    get thirdGoal() {
        const selector = SELECTORS.ANDROID.THIRD_GOAL;
        return $(selector);
    }

    get goalsPageNextButton() {
        const selector = SELECTORS.ANDROID.GOALS_PAGE_NEXT_BUTTON;
        return $$(selector)[4];
    }

    get firstInterest() {
        const selector = SELECTORS.ANDROID.FIRST_INTEREST;
        return $(selector);
    }

    get secondInterest() {
        const selector = SELECTORS.ANDROID.SECOND_INTEREST;
        return $(selector);
    }

    get thirdInterest() {
        const selector = SELECTORS.ANDROID.THIRD_INTEREST;
        return $(selector);
    }

    get interestPageNextButton() {
        const selector = SELECTORS.ANDROID.INTEREST_PAGE_NEXT_BUTTON;
        return $$(selector)[5];
    }

    get vyooPageContinueButton() {
        const selector = SELECTORS.ANDROID.VYOO_PAGE_CONTINUE_BUTTON;
        console.log("button count:" + $$(selector).length);
        return $$(selector)[20];
    }

    get connectedNotNowButton() {
        const selector = SELECTORS.ANDROID.GET_CONNECTED_NOT_NOW_BUTTON;
        return $(selector);
    }

    selectFirstGoal() {
        this.firstGoal.waitForExist();
        this.firstGoal.touchAction('tap');
    }

    selectSecondGoal() {
        this.secondGoal.waitForExist();
        this.secondGoal.touchAction('tap');
    }

    selectThirdGoal() {
        this.thirdGoal.waitForExist();
        this.thirdGoal.touchAction('tap');
    }

    clickGoalsPageNextButton() {
        this.goalsPageNextButton.waitForExist();
        this.goalsPageNextButton.touchAction('tap');
    }

    selectFirstInterest() {
        this.firstInterest.waitForExist();
        this.firstInterest.touchAction('tap');
    }

    selectSecondInterest() {
        this.secondInterest.waitForExist();
        this.secondInterest.touchAction('tap');
    }

    selectThirdInterest() {
        this.thirdInterest.waitForExist();
        this.thirdInterest.touchAction('tap');
    }

    clickInterestPageNextButton() {
        this.interestPageNextButton.waitForExist();
        this.interestPageNextButton.touchAction('tap');
    }

    clickOnVyooPageContinueButton() {
        driver.pause(5000);
        this.vyooPageContinueButton.waitForExist();
        this.vyooPageContinueButton.touchAction('tap');
    }

    clickOnNotNowButton() {
        driver.pause(5000);
        this.connectedNotNowButton.waitForExist();
        this.connectedNotNowButton.touchAction('tap');
    }
}

module.exports = new NewUserPage2();

