describe('first test', () => {
  it('Go to work.co', () => {
    cy.visit('https://www.work.co')

    })

    it('Check headline',() => {
      cy.get('[data-test-id="header-title-text"]').should('have.text','We design and ship digital products that transform companies.')
  })
  })