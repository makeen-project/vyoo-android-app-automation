Feature: Vyoo App - create post feature
    As a Vyoo App user,
    I should be able to create post in the app

    Scenario: As an existing user, I should be able to see the homepage
        Given I launches the app
        Then I should be landed on homepage

    Scenario: As an existing user, I should be able to navigate to the community selection page
        When I enter email id in user_associted_with_more_communities
        And I enter otp
        Then I should be on community selection page

    Scenario: As an existing user, I should be able to navigate to the app
        When I unselect other communities
        And I select one community
        Then I should be able to navigate to the app homepage

    Scenario: As an existing user, I should be able to cancel of creating a post
        When I click on create post CTA
        And I discard the post
        Then I should be able to navigate to the app homepage

    Scenario: As an existing user, I should be able to cancel of creating a post after entering some data
        When I click on create post CTA
       # And I write some_random_text
        And I add youtube_url
        And I discard the post
        Then I should see the confirmation dialog
        When I dismiss the pop up
        Then I should be able to navigate to the app homepage

    Scenario: As an existing user, I should be able to verify that the Post CTA should be enabled when there is some data in the post
        When I click on create post CTA
       # And I write some_random_text
        And I add youtube_url
        Then the post CTA should be enabled
        When I discard the post
        Then I should see the confirmation dialog
        When I dismiss the pop up
        Then I should be able to navigate to the app homepage


    Scenario: As a exisiting user, I should be able to create a post
        When I click on create post CTA
        #And I write some_random_text
        And I add youtube_url
        #And I add photo in the post
        #  And I add a gif
        And I click on create poll option
        And I enter poll quesion in poll_question_details
        And I add the poll in the post
        And I click on Post CTA
        Then the post should be created
