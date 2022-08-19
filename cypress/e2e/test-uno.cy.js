import '../support/curso2'

describe('empty spec', () => {
  it('passes', () => {

    cy.visit('https://www.agrocampo.com.co/')

    cy.step1()
    
    cy.step2()
  
  
    cy.log('**** STEP 3')
    cy.get('.product-item-link').should('contain', 'Enterico Lata de 140 g')


    cy.log('**** STEP 4WWWWWWWWWWWWWW')
  })
})