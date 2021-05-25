Feature: Vyoo App - Manage Groups feature
    As a Vyoo App user,
    I should be able to manage groups in the app

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

    Scenario: As an existing user, I should be able to navigate to group section
        When I tap on Humburger menu
        And I select groups button
        Then I should be on groups page

    Scenario: As an existing user, I should be able to discard from group creation
        When I select groups button
        And I click to create groups
        And I cancel the group creation
        And I dismiss the pop up
        Then I should be on groups page

    Scenario: As an existing user, I should be able to create groups
        When I select groups button
        And I click to create groups
        And I enter group name in group_details
        And I enable the group chat
        And I write the group description in group_details
        And I write the group rules in group_details
        And I select the group location
        And I create the group
        Then I should see the group listed in the group section

    Scenario: As an existing user, I should be able to delete the create group
        When I select groups button
        And I select to view the existing group
        And I select to delete the group
        And I confirm the delete pop up
        Then I should be on groups page
