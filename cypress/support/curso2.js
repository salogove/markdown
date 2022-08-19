
Cypress.Commands.add('step1', () => {
    cy.log('**** STEP 1')
    cy.get('body').should('not.have.text', 'Enterico Lata de 140 g')
    cy.get('#search').type('agility')
    // expect(response.body, 'the same data').to.deep.equal(expectedResults)
  })
  
  Cypress.Commands.add('step2', () => {
    cy.log('**** STEP 2')  
    cy.get('.amasty-xsearch-block-header')
      .should('be.visible')
      .and('have.text', 'MarcasProductos')
  })