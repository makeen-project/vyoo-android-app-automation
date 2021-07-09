Feature: Vyoo App - Switching community feature
  As a Vyoo App user,
  I should be able to switch between communities

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

  Scenario: As an existing user, I should be able to cancel the community selection
    When I navigate to community switching window
    And I select cancel on community switching window
    Then I should be back to the existing community homepage

  Scenario: As an existing user, I should be able to switch to another community
    When I navigate to community switching window
    And I select another community from the community list
    Then I should be on the new community homepage
