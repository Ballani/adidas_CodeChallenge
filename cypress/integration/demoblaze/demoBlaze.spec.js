import { navigate } from "../pages/navigate";
import { homepage } from "../pages/homepage";
import { productpage } from "../pages/productpage";
import { cartpage } from "../pages/cartpage";
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

// initializing objects
const navigateUtils = new navigate;
const homeUtils = new homepage;
const producUtils = new productpage;
const cartUtils = new cartpage;

// Navigates to URL
Given(/I open url/, () => {
    navigateUtils.navigate()
})

//Clicks on category to navigate
When(/I navigate to category "([^"]+)"/,(categoryElement)=>{
    homeUtils.selectCategory(categoryElement)
})

// Clicks on links
When(/I click on "([^"]+)"/, (inputElement ) => {
   
    if(inputElement==="Add to cart"){
        producUtils.addToCart()
        }
       else if(inputElement==="Place Order"){
        cartUtils.placeOrder()
        }
    else if(inputElement==="Dell i7 8gb"){
        cy.scrollTo('bottom')
        homeUtils.clickOnProduct(inputElement)}
    else{
        homeUtils.clickOnProduct(inputElement)}
})

// clicks on menu options
And(/I click on menu option "([^"]+)"/,(menuOption)=>{
    if(menuOption==="Home"){
        homeUtils.clickOnHomeMenu(menuOption)}
    else{
        homeUtils.clickOnMenuOptions(menuOption)
    }
})

//Verifies user is on cart 
And(/I verify user in cart page/,()=>{
    cartUtils.verifyUseronCartPage()
})

//Delete item from cart
Then(/I delete "([^"]+)" from cart/,(productToDelete)=>{
    cartUtils.deleteProductFromCart(productToDelete)
})

//Fills User form 
Then(/I enter details in userform/,()=>{
    cy.get('#name').type(Cypress.env('userName'))
    cy.get('#country').type(Cypress.env('country'))
    cy.get('#city').type(Cypress.env('city'))
    cy.get('#card').type(Cypress.env('card'))
    cy.get('#month').type(Cypress.env('month'))
    cy.get('#year').type(Cypress.env('year'))
    cy.get('.btn-primary').contains('Purchase').click()
})

// verifies order creation and logs order details
Then(/I verify order creation/,()=>{
   cartUtils.verifyOrderSuccess()
})


