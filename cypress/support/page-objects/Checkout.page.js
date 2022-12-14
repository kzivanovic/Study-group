export class CheckoutPage {
   
    get FirstNameInput() {
        return cy.get('[data-test="firstName"]');
    }
    get LastnameInput(){
        return cy.get('[data-test="lastName"]');
    }
    get PostalCodeInput(){
        return cy.get('[data-test="postalCode"]');
    }

    get Continue(){
        return cy.get('[data-test="continue"]');
    }
    get Cancel(){
        return cy.get('[data-test="cancel"]');
    }
    get ErrorPrompt(){
        return cy.get('.error-message-container');
    }
    get CheckoutTitle(){
        return cy.get('.title');
    }
    get CartItem(){
        return cy.get('.cart_item');
    }
    get FinishButton(){
        return cy.get('[data-test="finish"]');
    }
    get CompleteHeader(){
        return cy.get('.complete-header');
    }
    get BackHome(){
        return cy.get('[data-test="back-to-products"]');
    }
}
export default new CheckoutPage ();