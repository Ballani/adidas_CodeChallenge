Feature: Web Automation Tests on DemoBlaze Ecom Website

    As a user,
    I want to test DemoBlaze Ecom Website


    Scenario Outline: Add Laptops to cart and delete product in cart before placing order
        Given I open url
        When I navigate to category "<productCategory>"
        And I click on "<productOne>"
        Then I click on "Add to cart"
        And I click on menu option "Home"
        When I navigate to category "<productCategory>"
        Then I click on "<productTwo>"
        And I click on "Add to cart"
        Then I click on menu option "Cart"
        And I verify user in cart page
        Then I delete "<productTwo>" from cart
        When I click on "Place Order"
        And I enter details in userform
        Then I verify order creation

        Examples:
            | productCategory | productOne   | productTwo        |
            | Laptops         | Sony vaio i5 | Dell i7 8gb       |
            | Phones          | Nexus 6      | Samsung galaxy s6 |

    Scenario Outline: Add Laptops to cart and place an order
        Given I open url
        When I navigate to category "<productCategory>"
        And I click on "<productOne>"
        Then I click on "Add to cart"
        And I click on menu option "Home"
        When I navigate to category "<productCategory>"
        Then I click on "<productTwo>"
        And I click on "Add to cart"
        Then I click on menu option "Cart"
        And I verify user in cart page
        When I click on "Place Order"
        And I enter details in userform
        Then I verify order creation
        Examples:
            | productCategory | productOne   | productTwo        |
            | Laptops         | Sony vaio i5 | Dell i7 8gb       |
            | Phones          | Nexus 6      | Samsung galaxy s6 |

    Scenario Outline: Add different category products to cart and place an order
        Given I open url
        When I navigate to category "<productCategoryOne>"
        And I click on "<productOne>"
        Then I click on "Add to cart"
        And I click on menu option "Home"
        When I navigate to category "<productCategoryTwo>"
        Then I click on "<productTwo>"
        And I click on "Add to cart"
        Then I click on menu option "Cart"
        And I verify user in cart page
        When I click on "Place Order"
        And I enter details in userform
        Then I verify order creation
        Examples:
            | productCategoryOne | productOne   | productCategoryTwo | productTwo   |
            | Laptops            | Sony vaio i5 | Phones             | Nexus 6      |
            | Monitors           | ASUS Full HD | Phones             | Nexus 6      |
            | Laptops            | Sony vaio i5 | Laptops            | Sony vaio i5 |
    
    
       Scenario Outline: Add Laptops, Mobile and Monitor to cart and place an order
        Given I open url
        When I navigate to category "<productCategoryOne>"
        And I click on "<productOne>"
        Then I click on "Add to cart"
        And I click on menu option "Home"
        When I navigate to category "<productCategoryTwo>"
        Then I click on "<productTwo>"
        And I click on "Add to cart"
        And I click on menu option "Home"
        When I navigate to category "<productCategoryThree>"
        Then I click on "<productThree>"
        And I click on "Add to cart"
        Then I click on menu option "Cart"
        And I verify user in cart page
        When I click on "Place Order"
        And I enter details in userform
        Then I verify order creation
        Examples:
            | productCategoryOne | productOne   | productCategoryTwo | productTwo | productCategoryThree | productThree |
            | Laptops            | Sony vaio i5 | Phones             | Nexus 6    | Monitors             | ASUS Full HD |





