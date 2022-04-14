export class navigate{
    
    //navigates to URL
    navigate(){
        cy.visit(Cypress.env('baseUrl'))
    }
    
}
