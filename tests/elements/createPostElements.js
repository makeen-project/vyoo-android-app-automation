const CREATE_POST_SELECTORS = {
    ANDROID: {

        CREATE_POST_CTA: '//android.view.ViewGroup[android.view.ViewGroup]/parent::android.widget.Button',
        CREATE_POST_TEXT_FIELD: '//android.widget.EditText[@text = "Type here what’s on your mind…"]',
        POST_CTA_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Post")]]',
        CANCEL_POST_BUTTON: '//android.view.ViewGroup[android.view.ViewGroup]/parent::android.widget.Button',
        YOUTUBE_VIDEO_LINK: '//android.widget.TextView[@text = "Add YouTube video"]',
       // ADD_YOUTUBE_VIDEO_LINK: '//android.widget.Button',
        YOUTUBE_URL_FIELD: '//android.widget.EditText[@text = "Paste YouTube video URL here…"]',
        DISCARD_POST_POP_UP: '//android.widget.TextView[@text = "Discard Post?"]',
        DISCARD_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Discard")]]',
        CREATED_POST_TEXT: '//android.widget.TextView[@text = "Jeet Adhikari posted in creating a board for testing long text"]',
        SCROLL_PAGE_UP: '//android.widget.Button',
        ADD_PHOTO_OPTION: '//android.widget.TextView[@text = "Add Photo/Video"]',
        CREATE_POLL_OPTION: '//android.widget.TextView[@text = "Create Poll"]',
        POLL_QUESTION: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Ask a question... *")]]/preceding-sibling::android.widget.EditText',
        OPTION_ONE: '//android.widget.EditText[@text = "Option 1"]',
        OPTION_TWO: '//android.widget.EditText[@text = "Option 2"]',
        POLL_DONE_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Done")]]',
    },

}

module.exports = CREATE_POST_SELECTORS;