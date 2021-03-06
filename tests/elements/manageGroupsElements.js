const MANAGE_GROUPS_SELECTORS = {
    ANDROID: {

       HUMBURGER_MENU: '//android.widget.Button[@content-desc="Hamburger, tab, 6 of 6"]',
       GROUP_BUTTON: '//android.widget.Button[@content-desc="Tap to open Groups"]',
       GROUP_PAGE_TITLE: '//android.widget.TextView[@text="Groups"]',
       ADD_GROUP_BUTTON: '//android.widget.Button',
       CANCEL_GROUP_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Cancel")]]',
       GROUP_NAME: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Group name *")]]/preceding-sibling::android.widget.EditText',
       ENABLE_GROUP_CHAT: '//android.widget.Switch[@text="OFF"]' ,
       GROUP_DESCRIPTION: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "What is this group about? *")]]/preceding-sibling::android.widget.EditText',
       GROUP_RULES: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "What are the rules of this group? *")]]/preceding-sibling::android.widget.EditText',
       GROUP_LOCATION_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Select a location *")]]',
       GROUP_LOCATION_SEARCH_BUTTON: '//android.widget.EditText[@text="Search"]',
       GROUP_LOCATION_SEARCH_RESULT: '//android.widget.Button[android.widget.TextView[contains(@text, "Kolkata, West Bengal, India")]]',
       GROUP_CREATE_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Create Group")]]',
       CREATED_GROUP: '//android.widget.TextView[@text= "New group for testing0"]',
       VIEW_EXISTING_GROUP: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "New group for testing")]]/parent::android.view.ViewGroup/parent::android.widget.Button',
       GROUP_OPTION_BUTTON: '//android.widget.Button[android.widget.ImageView]',
       DELETE_GROUP_BUTTON: '//android.view.ViewGroup[android.widget.TextView[contains(@text, "Delete Group")]]/parent::android.view.ViewGroup/parent::android.widget.Button',
       REMOVE_GROUP_CONFIRM_BUTTON: '//android.widget.Button[android.widget.TextView[contains(@text, "Delete")]]',






    },

}

module.exports = MANAGE_GROUPS_SELECTORS;