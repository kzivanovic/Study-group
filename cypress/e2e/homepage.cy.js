describe('Test cases for W&Co', () => {
  it('Go to work.co', () => {
    cy.visit('https://www.work.co')

    })

    it('Check headline',() => {
      cy.get('[data-test-id="header-title-text"]').should('have.text','We design and ship digital products that transform companies.')
  })
  it('Click on logo Red and check URL', () => {
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.url().should('eq', 'https://work.co/grid/');
  })

  it('Select Clients',()=>{
    cy.get('[data-test-id="grid-select-clients-link"]').click()
    cy.url().should('eq', 'https://work.co/clients/');
  })
  
  it('Select Expertise and Capabilities',()=>{
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-practice-areas-link"]').click()
    cy.url().should('eq', 'https://work.co/company/');
  })

  })