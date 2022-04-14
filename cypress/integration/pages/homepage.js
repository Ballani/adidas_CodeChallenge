
export class homepage{

    // home page elements
    elements = {
        category: () => cy.get(".list-group-item"),
        clickOnProductLink: () =>  cy.get("#tbodyid").find('.card-title').find('a'),
        clickOnMenuOptions: () => cy.get('.nav-item').find('a')

        
    }

    //clicks on category
    selectCategory(categoryElement){
        this.elements.category().contains(categoryElement).click().wait(2000);
    }

    //click on product
    clickOnProduct(inputElement){
        this.elements.clickOnProductLink().contains(inputElement)
        .click()
        .wait(3000)
    }

    //click on home menu
    clickOnHomeMenu(menuOption){
        this.elements.clickOnMenuOptions().contains(menuOption+" ").click()
    }

    //click on Menu options
    clickOnMenuOptions(menuOption){
        this.elements.clickOnMenuOptions().contains(menuOption).click()
    }
    
  
}

