# Feature: Vyoo App - create post feature
#     As a Vyoo App user,
#     I should be able to manage events in the app

#     Scenario: As an existing user, I should be able to see the homepage
#         Given I launches the app
#         Then I should be landed on homepage

#     Scenario: As an existing user, I should be able to navigate to the community selection page
#         When I enter email id in user_associted_with_more_communities
#         And I enter otp
#         Then I should be on community selection page

#     Scenario: As an existing user, I should be able to navigate to the app
#         When I unselect other communities
#         And I select one community
#         Then I should be able to navigate to the app homepage
    
#     Scenario: As an existing user, I should be able to navigate to event section
#         When I tap on Humburger menu
#         And I select events
#         Then I should be on events page
    
#     Scenario: As an existing user, I should be able to verify if there is no events in events page
#         When I tap on Humburger menu
#         And I select events
#         Then I should be able to verify if there is no events in the page
    
#     Scenario: As an existing user, I should be able to discard from event creation
#         When I tap on Humburger menu
#         And I select events
#         And I click to create events
#         And I cancel the event creation
#         And I dismiss the pop up
#         Then I should be on events page
    
#     Scenario: As an existing user, I should be able to create events
#         When I tap on Humburger menu
#         And I select events
#         And I click to create events
#         And I enter event name as event_name
#         And I 