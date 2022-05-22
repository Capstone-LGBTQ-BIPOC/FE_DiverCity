describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=denver&category=food', { fixture: 'sampleFoodData.json' }).as('denver businesses')
    cy.visit('http://localhost:3000')
  })

  it('should contain a title, business categories, and buttons on page load', () => {
    cy.contains('DiverCity: Inclusive Business Guide')
    cy.get('input').type('Denver')
    cy.get('.submit-button').click()
    cy.contains('You\'re currently searching in Denver')
    cy.get('.curr-location-button').click()
    cy.contains('You\'re currently searching in Cedar Rapids')
    cy.contains('Pick your category')
    cy.get('h1').contains('Food & Drink')
    cy.get('h1').contains('Shopping')
    cy.get('h1').contains('Arts & Entertainment')
    cy.get('.category-button').should('have.length', 3).and('contain', 'View All')
  })
})
