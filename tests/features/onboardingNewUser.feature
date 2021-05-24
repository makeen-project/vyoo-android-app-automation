Feature: Vyoo App - Onboarding journeys for new user
  As a Vyoo App new user,
  I should be able to complete the onboarding process

  Scenario: As a new user, I should be able to see the homepage
    Given I launches the app
    Then I should be landed on homepage

  Scenario: As a new user, I should be able to navigate to the community selection page
    When I enter email id for new user
    And I enter otp
    Then I should be landed on community selection page
  
  Scenario: As a new user, I should be able to enter community details successfully
    When I enter the link details for community_url
    Then I should be navigated to profile details screen
  
  Scenario: As a new user, I should be able to enter personal details
    When I enter first name in personal_details
    And I enter last name in personal_details
    And I upload profile photo
    And I enter date of birth
    And I select Gender
    And I turn on location
    Then I should be navigated to professional details screen

  Scenario: As a new user, I should be able to enter professional details
    When I enter job title in my_profile_details
    And I enter Industry in my_profile_details
    And I enter Company name in my_profile_details
    And I enter short intro in my_profile_details
    Then I should see goals page

  Scenario: As a new user, I should be able to navigate to the app homepage
    When I add my goals
    And I add my interests
    Then I should be able to navigate to the app homepage
    