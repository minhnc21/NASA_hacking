Feature: Login

  @tridLoginSuccess
  Scenario Outline: as user set correct username and password, navigate to home page

    Given load login page
    When set "username" textField on "loginForm" is "dotam1236@gmail.com"
    When set "password" textField on "loginForm" is "tester"
    Then click "login" button on "loginForm" page

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
