describe('Test cases for W&Co', () => {
  
  it('Go to work.co and check headline', () => {
    // cy.viewport('macbook-15')
    cy.visit('https://www.work.co')
    cy.title().should('eq','Work & Co | Digital Product Agency')
    cy.get('[data-test-id="header-title-text"]').should('have.text','We design and ship digital products that transform companies.')

    })
  it('Click on logo Red and check URL', () => {
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.url().should('eq', 'https://work.co/grid/');
  })

  it('Expertise & Capabilities',()=>{
    cy.get('data-test-id="grid-expertise-capabilities-link"').click()
    cy.url().should('eq', 'https://work.co/clients/');
  })
  
  it('Select Practise Areas',()=>{
    cy.get('[data-test-id="global-menu-btn"]').click()
    cy.get('[data-test-id="grid-practice-areas-link"]').click()
    cy.url().should('eq', 'https://work.co/company/');
  })
  it('Go back to homepage',()=>{
    cy.get('[data-test-id="global-menu-btn"]').click() 
  })
  it('Subscribe to Newsletter',()=>{
    cy.get('[data-test-id="footer-subscribe-newsletter-link"]').click()
    cy.get('[data-test-id="newsletter-subscribe-submit"]').should('be.disabled')
    cy.get('[data-test-id="newsletter-email-textfield"]').click().type('zivanovic@work.co')
    cy.get('[data-test-id="newsletter-subscribe-submit"]').should('be.enabled')


  })
  it('Check Disclaimer',()=>{
    cy.get('.Subscribe-gdprDisclaimer').should('contain','We only send emails when we have something to say.')
    cy.get('span').contains('Privacy Policy').parent().should('have.attr','href','https://mailchimp.com/legal/privacy/')
    cy.get('span').contains('Terms').parent().should('have.attr','href','https://mailchimp.com/legal/terms/')
    cy.get('[data-test-id="global-menu-btn"]').click()


  })

  it('Choose Belgarde lead position',()=>{
    cy.get('[data-test-id="grid-careers-link"]').click()
    cy.get('[data-test-id="grid-item-technology-link"]').click()
    cy.get('[data-test-id="technology-grid-subitem-link-lead-developer-belgrade"]').click()
  })
  it('Apply for a role Belgrade',()=>{
    cy.get('[data-test-id="form-technology-belgrade-lead-developer-first_name-text"]').click().type('Katarina')
    cy.get('[data-test-id="form-technology-belgrade-lead-developer-last_name-text"]').click().type('Barjaktarovic')
    cy.get('[data-test-id="form-technology-belgrade-lead-developer-email-email"]').click().type('test@test.com')
    cy.get('[data-test-id="form-technology-belgrade-lead-developer-phone-tel"]').click().type('*******')
    cy.get('[data-test-id="form-technology-belgrade-lead-developer-question_36310376-text"]').click().type('https://www.linkedin.com/in/katarina-zivanovic-aa06143a/')
    cy.get('.SubmitButton').should('be.enabled')
    cy.get('[data-test-id="global-menu-btn"]').click()
  })

it('Open global form',()=>{
  cy.get('[data-test-id="grid-careers-link"]').click()
  cy.get('.Breadcrumbs-arrow').click()
  cy.get('[data-test-id="grid-item-technology-link"]').click()
  cy.get('a').should('have.class', 'Link Markdown-link').contains('submit your application').click({force:true})


})
it.only('Submit Global Form',()=>{
  cy.visit('https://work.co/careers/operations/global-studio/general-application/')
  cy.get('[data-test-id="form-operations-global-studio-general-application-first_name-text"]').click().type('Katarina')
  cy.get('[data-test-id="form-operations-global-studio-general-application-last_name-text"]').click().type('Zivanovic')
  cy.get('[data-test-id="form-operations-global-studio-general-application-file"]').first().attachFile('dummy.pdf')
  cy.get('.FormFileInputField-label--hasValue').first().should('contain',('dummy.pdf'))
  cy.get('[data-test-id="form-operations-global-studio-general-application-file"]').eq(1).selectFile('cypress/fixtures/dummy.pdf',{force:true})
  cy.get('.FormFileInputField-label--hasValue').eq(1).should('contain',('dummy.pdf'))
})

})