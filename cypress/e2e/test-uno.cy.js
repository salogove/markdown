

describe('empty spec', () => {
  it('passes', () => {

    cy.visit('https://www.agrocampo.com.co/')

    cy.log('**** STEP 1')

    cy.get('body').should('not.have.text', 'Enterico Lata de 140 g')
    

    cy.get('#search').type('agility')

    
    cy.log('**** STEP 2')
  
    cy.get('.amasty-xsearch-block-header')
      .should('be.visible')
      .and('have.text', 'MarcasProductos')
    
  
    cy.log('**** STEP 3')
    cy.get('.product-item-link').should('contain', 'Enterico Lata de 140 g')


    cy.log('**** STEP 4')
  })
})