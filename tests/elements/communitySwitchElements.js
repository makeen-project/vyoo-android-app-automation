const COMMUNITIY_SWITCH_SELECTORS = {
    ANDROID: {

     //   UNSELECT_COMMUNITY_ONE: '//android.widget.Button[android.view.ViewGroup]/parent::android.view.ViewGroup',
       UNSELECT_COMMUNITY_TWO: '//android.widget.Button[android.view.ViewGroup]/parent::android.view.ViewGroup',
        SELECT_COMMUNITY_BUTTON: '//android.widget.TextView[@text="Enter selected Communities"]',
        COMMUNITY_SWITCH_BUTTON: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "professionalcommunity")]]/parent::android.widget.Button',
        CANCEL_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Cancel")]]',
        ADD_COMMUNITY_BUTTON: '//android.view.ViewGroup[android.view.ViewGroup[android.widget.TextView[contains(@text, "Add Community")]]]/parent::android.widget.Button',
        JOIN_COMMUNITY_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Join")]]',
        NEW_COMMUNITY_TEXT: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "newtest")]]/parent::android.widget.Button',

    },
}

module.exports = COMMUNITIY_SWITCH_SELECTORS;