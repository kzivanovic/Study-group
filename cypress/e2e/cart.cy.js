describe('Swag Labs tests',()=>{
  beforeEach(()=>{
    cy.login('standard_user','secret_sauce')
  })
    it('Error wih no data',()=>{
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('.error-message-container').should('have.text','Error: First Name is required');
    })    

    it('Successful shopping flow',()=>{  
        cy.get('#shopping_cart_container').click()
        cy.get('.cart_quantity').should('not.exist')
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_badge').should('be.visible') 
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('have.text','Sauce Labs Bike Light')
        cy.get('.inventory_item_price').should('have.text','$9.99')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="continue-shopping"]').should('be.visible')
        cy.get('[data-test="checkout"]').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('katarina')
        cy.get('[data-test="lastName"]').type('barjaktarovic')
        cy.get('[data-test="postalCode"]').type('11090')
        cy.get('[data-test="continue"]').click()
        cy.get('.title').should('have.text','Checkout: Overview')
        cy.get('.cart_item').should('contain','Sauce Labs Bike Light')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        cy.get('[data-test="back-to-products"]').should('be.visible')
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('.shopping_cart_badge').should('not.exist')

    })


     it('Removing items from bag',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')
      })
      it('Continue Shoping',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('#shopping_cart_container').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('.shopping_cart_badge').should('have.text','1')
      }) 
  
}) 
