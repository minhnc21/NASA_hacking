# Feature: Login

#   @tridLoginSuccess
#   Scenario Outline: as user set correct username and password, navigate to home page

#     Given load login page
#     When set "username" textField on "loginForm" is "dotam1236@gmail.com"
#     When set "password" textField on "loginForm" is "tester"
#     Then click "login" button on "loginForm" page

#     # Examples:
#     #   | username | password             | message                        |
#     #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |


Feature: Try to login for the first time

  Scenario: Login to the shop home page
    Given The user open the website then click on the login button
    When Fill on "<username>" and "<password>"
    Then Click on login and verify the page
    Examples:
      | username | password | 
      | batter   | undead   |
    