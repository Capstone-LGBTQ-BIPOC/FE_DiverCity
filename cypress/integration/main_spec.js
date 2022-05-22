describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.visit('http://localhost:3000')
  })

  it('should contain a title, business categories, and buttons on page load', () => {
    cy.get('main')
      .should('contain', 'DiverCity: Inclusive Business Guide')
      .and('contain', 'Pick your category')
      .get('h1').contains('Food & Drink')
      .get('h1').contains('Shopping')
      .get('h1').contains('Arts & Entertainment')
      .get('.category-button').should('have.length', 3).and('contain', 'View All')
  })

  it('should indicate the city you are currently searching', () => {
    cy.get('form')
      .contains('You\'re currently searching in Cedar Rapids')
  })

  it('should contain a form to select a new search location', () => {
    cy.get('form input')
      .type('Denver')
      .get('.submit-button').click()
      .get('form')
      .contains('You\'re currently searching in Denver')
  })

  it('should allow you to change the city back to your current location', () => {
    cy.get('form input')
      .type('Denver')
      .get('.submit-button').click()
      .get('form')
      .contains('You\'re currently searching in Denver')
      .get('.curr-location-button').click()
      .get('form')
      .contains('You\'re currently searching in Cedar Rapids')
  })
})
