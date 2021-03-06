const NEW_USER_SELECTORS = {
    ANDROID: {

        COMMUNITY_PAGE_TEXT_NEW_USER: '//android.widget.TextView[@text="Try with another email address"]',
        COMMUNITY_URL_LINK: '//android.widget.TextView[@text="Enter your Community URL"]',
        COMMUNITY_URL_TEXT_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "commmunity-url")]]/preceding-sibling::android.widget.EditText',
        COMMUNITY_PAGE_NEXT_BUTTON: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Next")]]',
        PROFILE_DETAILS_PAGE_TEXT: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "First Name *")]]/preceding-sibling::android.widget.EditText',
        FIRST_NAME_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "First Name *")]]/preceding-sibling::android.widget.EditText',
        LAST_NAME_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Last Name *")]]/preceding-sibling::android.widget.EditText',
        PERSONAL_DETAILS_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        ADD_PHOTO_BUTTON: '//android.widget.Button[android.view.ViewGroup]',
        TAKE_A_PHOTO: '//android.widget.TextView[@text="Take a photo"]',
        ALLOW_PHOTO_CLICK_ACCESS: '//android.widget.Button[@text="ALLOW"]',
        ALLOW_AUDIO_ACCESS: '//android.widget.Button[@text="ALLOW"]',
        BACK_PHOTO: '//android.widget.Button',
        CLICK_PHOTO: '//android.widget.Button',
        ADD_PHOTO_PAGE_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        DATE_OF_BIRTH_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Date of Birth")]]/parent::android.widget.Button',
        YEAR_DROP_DOWN: '//android.view.View',
        DONE_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Done")]]',
        GENDER_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Gender")]]/parent::android.widget.Button',
        GENDER_PAGE_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        TURN_ON_LOCATION: '//android.widget.Button[android.widget.TextView[contains(@text, "Turn on location")]]',
        ALLOW_LOCATION_ACCESS: '//android.widget.Button[@text="ALLOW ONLY WHILE USING THE APP"]',
        PROFESSIONAL_DETAILS_PAGE_TEXT: '//android.widget.Button[android.widget.TextView[contains(@text, "Job title *")]]',
        JOB_TITLE: '//android.widget.Button[android.widget.TextView[contains(@text, "Job title *")]]',
        JOB_TITLE_SEARCH_BOX: '//android.widget.EditText[@text="Title (ex: UX Designer)"]',
        JOB_TITLE_SEARCH_RESULT: '//android.widget.Button[android.widget.TextView[contains(@text, "QA Specialist")]]',
        INDUSTRY_NAME: '//android.widget.Button[android.widget.TextView[contains(@text, "Industry *")]]',
        INDUSTRY_SEARCH_BOX: '//android.widget.EditText[@text="Industry (ex: Media)"]',
        INDUSTRY_SEARCH_RESULT: '//android.widget.Button[android.widget.TextView[contains(@text, "Online Media")]]',
        COMPANY_NAME: '//android.widget.Button[android.widget.TextView[contains(@text, "Company name *")]]',
        COMPANY_NAME_SEARCH_FIELD: '//android.widget.EditText[@text="Company (ex: Google)"]',
        COMPANY_NAME_SEARCH_RESULT: '//android.widget.Button[android.widget.TextView[contains(@text, "Makeen")]]',
        SHORT_INTRO_FIELD: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Write a short intro??? *")]]/preceding-sibling::android.widget.EditText',
        PROFILE_PAGE_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        CONTINUE_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Continue")]]',
        GOALS_PAGE_TEXT: '//android.widget.TextView[@text="What are your goals?"]',
        FIRST_GOAL: '//android.widget.Button[android.widget.TextView[contains(@text, "Tutoring")]]',
        SECOND_GOAL: '//android.widget.Button[android.widget.TextView[contains(@text, "Make new friends")]]',
        THIRD_GOAL: '//android.widget.Button[android.widget.TextView[contains(@text, "Networking")]]',
        GOALS_PAGE_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        FIRST_INTEREST: '//android.widget.Button[android.widget.TextView[contains(@text, "Sciences")]]',
        SECOND_INTEREST: '//android.widget.Button[android.widget.TextView[contains(@text, "Communications")]]',
        THIRD_INTEREST: '//android.widget.Button[android.widget.TextView[contains(@text, "Arts")]]',
        INTEREST_PAGE_NEXT_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Next")]]',
        VYOO_PAGE_CONTINUE_BUTTON: '//android.widget.Button[android.widget.TextView]/parent::android.view.ViewGroup',
        GET_CONNECTED_NOT_NOW_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Not now")]]',
    },
}

module.exports = NEW_USER_SELECTORS;