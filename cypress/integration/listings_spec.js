describe('listings view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  it('should display search results for the selected city with business name, image, and button', () => {
    cy.get('.category-card:first button').click()
      .get('.listings-container')
      .should('contain', 'Food & Drink')
      .get('.business-card:first')
      .should('contain', 'Jelly')
      .and('have.descendants', 'img')
      .and('have.descendants', 'button')
  })
})