describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should contain a title, business categories, and buttons on page load', () => {
    cy.get('main')
      .contains('DiverCity: Inclusive Business Guide')
      .get('nav')
      .should('have.class', 'navigation')
      .get('div')
      .should('have.class', 'nav-buttons')
      .get('button')
      .should('contain', 'Home')
      .and('contain', 'Food & Drink')
      .and('contain', 'Shopping')
      .and('contain', 'Arts & Entertainment')
      .and('contain', 'Want to Visit')
      .get('form')
      .get('input')
      .get('button')
      .should('have.class', 'submit-button')
      .and('contain', 'SUBMIT')
      .get('h2')
      .contains('Pick your category')
      .get('h1').contains('Food & Drink')
      .get('h1').contains('Shopping')
      .get('h1').contains('Arts & Entertainment')
  })

  it('should indicate the city you are currently searching', () => {
    cy.get('h2')
      .contains('You\'re currently searching in Atlanta')
  })

  it('should contain a form to select a new search location', () => {
    cy.get('form input')
      .type('Denver')
      .get('.submit-button').click()
      .get('h2')
      .contains('You\'re currently searching in Denver')
  })
})
