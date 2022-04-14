export class cartpage{

    //cart page elements
    elements = {
        placeOrderBtn: () => cy.get(".btn-success"),
        cartPageHeading: ()=>cy.get('h2'),
        deleteProductFromCart: ()=>cy.get('#tbodyid').find('.success'),
        orderSuccessMessage: ()=>cy.get('.lead'),
        orderConfirmBtn: ()=>cy.get('.btn-primary')
       }

       //clicks on place order
       placeOrder(){
        this.elements.placeOrderBtn().click().wait(1000)
        }

        //verify user on cart page
        verifyUseronCartPage(){
            this.elements.cartPageHeading().contains('Products').should('exist')
        }

        //delete product on cart page
        deleteProductFromCart(productToDelete){
            this.elements.deleteProductFromCart().contains(productToDelete).next().next().contains('Delete').click()
            cy.wait(2000)
            this.elements.deleteProductFromCart().contains(productToDelete).should('not.exist')
        }

        //logs order details
        verifyOrderSuccess(){
            this.elements.orderSuccessMessage().invoke('text').then(($ele) =>cy.log($ele))
            this.elements.orderConfirmBtn().contains('OK').click()
        }



        
}