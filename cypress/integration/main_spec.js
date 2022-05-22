describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=denver&category=food', { fixture: 'sampleFoodData.json' }).as('denver businesses')
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

  it('should contain a form to select a new search location', () => {
    cy.get('form')
      .contains('You\'re currently searching in Cedar Rapids')
      .get('input').type('Denver')
      .get('.submit-button').click()
      .get('form')
      .contains('You\'re currently searching in Denver')
      .get('.curr-location-button').click()
      .get('form')
      .contains('You\'re currently searching in Cedar Rapids')
  })
})
