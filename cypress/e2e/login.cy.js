describe('Tes cases for Swag Labs',()=>{
    it('Open URL check Check page title',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
    })
    it('Invalid Login',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').click().type('zivanovic@work.co')
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

    })
    it('Valid Login',()=>{
        cy.get('[data-test="username"]').click().clear()
        cy.get('[data-test="password"]').click().clear()
        cy.get('[data-test="username"]').click().type('standard_user')
        cy.get('[data-test="password"]').click().type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain','inventory.html')
    })
    it('Logout',()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('eq','https://www.saucedemo.com/')
    })
})