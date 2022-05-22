describe('DiverCity homepage flow', () => {
  it('should be able to visit the page and view the Title, business categories and buttons', () => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' })
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=denver&category=food', { fixture: 'sampleFoodData.json' })
    cy.visit('http://localhost:3000')
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