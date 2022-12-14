export class InventoryPage {
    openPage() {
        cy.visit('/inventory.html');
    }
    get CartButton() {
        return cy.get('.shopping_cart_link');
    }
    get AddToCartItem1(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }
    get BadgeIcon(){
        return cy.get('.shopping_cart_badge');
    }
    get AddToCartItem2(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    get ShopingCartContainer(){
        return cy.get('#shopping_cart_container');
    }
     
}
export default new InventoryPage ();