Feature: Vyoo App - Onboarding journeys for existing user
  As a Vyoo App existing user,
  I should be able to navigate to the app

  Scenario: As an existing user, I should be able to see the homepage
    Given I launches the app
    Then I should be landed on homepage

  Scenario: As an existing user, I should be able to navigate to the community selection page
    When I enter email id in existing_user_format
    And I enter otp
    Then I should be on community selection page

  Scenario: As an existing user, I should be able to navigate to the app
    When I select the existing community
    Then I should be able to navigate to the app homepage
