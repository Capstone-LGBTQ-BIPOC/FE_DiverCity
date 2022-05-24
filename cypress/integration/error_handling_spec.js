describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=asdfasdfasdf&category=food', { forceNetworkError: true }).as('nonexistent city')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Dener&category=food', { fixture: 'noResults.json' }).as('no results')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })
  
  it('should display an error message if the city entered is misspelled', () => {
    cy.get('form input')
      .type('Dener')
      .get('.submit-button').click()
    cy.get('.category-button:first').click()
      .url('http://localhost:3000/food')
      .get('h3')
      .should('contain', 'No results for your search. Please check your spelling and try a new search.')
  })
  
  it('should display an error message if complete gibberish is entered for the city search.', () => {
      cy.get('form input')
        .type('asdfasdfasdf')
        .get('.submit-button').click()
      cy.get('.category-button:first').click()
        .url('http://localhost:3000/food')
        .get('h3')
        .should('contain', 'Oops, something went wrong! Please try again later.')
  })

  it('should display an error message for a 404 error', () => {
    cy.visit('http://localhost:3000/videogames')
      .contains('Page not found. Please return to home.')
  })

  it('should be able to go back to the homepage after seeing a 404 error', () => {
    cy.visit('http://localhost:3000/bar')
      .get('a').eq(6).click()
      .url('http://localhost:3000')
  })
})
