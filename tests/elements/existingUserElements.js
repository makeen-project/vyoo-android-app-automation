const EXISTING_USER_SELECTORS = {
    ANDROID: {

        ALLOW_ACCESS: '//android.widget.Button[@text="ALLOW"]',
        HOMEPAGE_TEXT: '//android.widget.TextView[@text="Continue with email address"]',
        EMAIL_ADDRESS_BUTTON: '//android.widget.TextView[@text="Continue with email address"]',
        EMAIL_ADDRESS_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Email address *")]]/preceding-sibling::android.widget.EditText',
        EMAIL_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        OTP_1ST_NUMBER: '//android.widget.Button[android.widget.TextView[contains(@text, "1")]]',
        OTP_2ND_NUMBER: '//android.widget.Button[android.widget.TextView[contains(@text, "2")]]',
        OTP_3RD_NUMBER: '//android.widget.Button[android.widget.TextView[contains(@text, "3")]]',
        OTP_4TH_NUMBER: '//android.widget.Button[android.widget.TextView[contains(@text, "4")]]',
        OTP_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        COMMUNITY_PAGE_TEXT: '//android.widget.TextView[@text="Join new community with URL"]',
        ENTER_COMMUNITY_BUTTON: '//android.widget.TextView[@text="Enter selected Community"]',
        TURN_ON_LOCATION: '//android.widget.Button[@text="ALLOW ONLY WHILE USING THE APP"]',
        RATE_APP: '//android.widget.Button[@text="NO, THANKS"]',
        APP_HEADER_TEXT: '//android.widget.TextView[@text="Jeet, check out the best matches"]'
    },

}

module.exports = EXISTING_USER_SELECTORS;