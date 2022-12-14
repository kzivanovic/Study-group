export class CartPage {
    openPage() {
        cy.visit('/cart.html');
    }
    get CartButton() {
        return cy.get('.shopping_cart_link');
    }
    get CheckoutButton(){
        return cy.get('[data-test="checkout"]');
    }
    get RemoveButton(){
        return cy.get('[data-test="remove-sauce-labs-bike-light"]')
    }

    get ContinueShoppingButton(){
        return cy.get('[data-test="continue-shopping"]');
    }
    get ShopingCartContainer(){
        return cy.get('#shopping_cart_container');
    }
    get CartQuantity(){
        return cy.get('.cart_quantity');
    }
    get InventoryItemName(){
        return cy.get('.inventory_item_name')
    }
    get InventoryItemPrice(){
        return cy.get('.inventory_item_price')
    }
    
}
export default new CartPage ();