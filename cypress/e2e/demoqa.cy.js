describe('Tests for demoqa',()=>{
   it('Visit demoqa and check URL',()=>{
       cy.visit('https://demoqa.com')
       cy.url().should('eq','https://demoqa.com/')
   })
   it('Open Elements',()=>{
    cy.get('.category-cards > :nth-child(1)').click()
   })
   it(('Interact with Text Box'),()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Katarina')
    cy.get('#userEmail').type('test@test.com')
    cy.get('#submit').click()
    cy.get('.border').should('contain','Name')
    cy.get('.border').should('contain','Email')
   })
   it(('Interact with Checkbox'),()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('.rct-checkbox > .rct-icon').click()
    cy.get('#result').should('be.visible')
   })
   it(('Interact with Radio Buttons'),()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    cy.get('[id="yesRadio"]').click({force:true})
   })
})