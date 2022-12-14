import LandingPage from '../support/page-objects/Landing.page.js'
import InventoryPage from '../support/page-objects/Inventory.page.js'
import CartPage from '../support/page-objects/Cart.page'
import CheckoutPage from '../support/page-objects/Checkout.page.js'

describe('Swag Labs tests',()=>{
  beforeEach(()=>{
    LandingPage.openPage();
    LandingPage.login('standard_user','secret_sauce');
  })
    it('Error wih no data',()=>{
        InventoryPage.CartButton.click();
        CartPage.CheckoutButton.click();
        CheckoutPage.Continue.click();
        CheckoutPage.ErrorPrompt.should('have.text','Error: First Name is required');
    })    

    it('Successful shopping flow',()=>{  
        CartPage.ShopingCartContainer.click()
        CartPage.CartQuantity.should('not.exist')
        CartPage.ContinueShoppingButton.click()
        InventoryPage.AddToCartItem1.click();
        InventoryPage.BadgeIcon.should('be.visible') 
        InventoryPage.CartButton.click()
        CartPage.InventoryItemName.should('have.text','Sauce Labs Bike Light')
        CartPage.InventoryItemPrice.should('have.text','$9.99')
        CartPage.RemoveButton.should('be.visible')
        CartPage.ContinueShoppingButton.should('be.visible')
        CartPage.CheckoutButton.should('be.visible')
        CartPage.CheckoutButton.click()
        CheckoutPage.FirstNameInput.type('katarina')
        CheckoutPage.LastnameInput.type('barjaktarovic')
        CheckoutPage.PostalCodeInput.type('11090')
        CheckoutPage.Continue.click()
        CheckoutPage.CheckoutTitle.should('have.text','Checkout: Overview')
        CheckoutPage.CartItem.should('contain','Sauce Labs Bike Light')
        CheckoutPage.FinishButton.click()
        CheckoutPage.CompleteHeader.should('have.text','THANK YOU FOR YOUR ORDER')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        CheckoutPage.BackHome.should('be.visible')
        CheckoutPage.BackHome.click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        InventoryPage.BadgeIcon.should('not.exist')

    })


     it('Removing items from bag',()=>{
        InventoryPage.AddToCartItem1.click()
        InventoryPage.BadgeIcon.should('be.visible')
        InventoryPage.CartButton.click()
        CartPage.RemoveButton.click()
        InventoryPage.BadgeIcon.should('not.exist')
      })
      it('Continue Shoping',()=>{
        InventoryPage.AddToCartItem1.click()
        InventoryPage.ShopingCartContainer.click()
        CartPage.ContinueShoppingButton.click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        InventoryPage.BadgeIcon.should('have.text','1')
      }) 
  
}) 
