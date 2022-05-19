describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be able to visit the page and view the Title, business categories and buttons', () => {
    cy.contains('DiverCity: Inclusive Business Guide')
    cy.contains('Pick your category')
    cy.get('h1').contains('Food & Drink')
    cy.get('h1').contains('Shopping')
    cy.get('h1').contains('Arts & Entertainment')
    cy.get('button').should('have.length', 3).and('contain', 'View All')
  })
})
