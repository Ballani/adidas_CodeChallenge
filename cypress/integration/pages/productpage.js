export class productpage{

    //product page elements
    elements = {
        addToCartBtn: () => cy.get(".btn-success"),
    }

    //adds to cart
    addToCart(){
        this.elements.addToCartBtn().click().wait(1000).type('{enter}')
    }
  
}