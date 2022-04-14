Feature: Pet Store API tests

    As a user,
    I want to test Pet Store API's 

    Scenario Outline: Verify creation and update of pet details
        Given I get "available" pets
        Then I post a new available pet "<id>" with "<name>" to the store
        And I update this pet "<id>" status to "sold"
        Then I delete this pet "<id>"

        Examples:
            | id   | name       |
            | 1000 | Black Cat  |
            | 1001 | Black Dog  |
            | 1002 | Black Bird |



    Scenario Outline: Verify creation and update of pet details using form data
        Given I post a new available pet "<id>" with "<name>" to the store
        And I update pet "<id>" status to "sold" using form data
        Then I delete this pet "<id>"

        Examples:
            | id   | name       |
            | 2020 | White Cat  |
            | 2021 | White Dog  |
            | 2022 | White Bird |