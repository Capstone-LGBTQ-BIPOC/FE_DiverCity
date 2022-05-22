describe('listings view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  // it('should display search results for the selected city with business name, image, and button', () => {
  //   cy.get('.category-card:first button').click()
  //     .get('.listings-container')
  //     .should('contain', 'Food & Drink')
  //     .get('.business-card:first')
  //     .should('contain', 'Jelly')
  //     .and('have.descendants', 'img')
  //     .and('have.descendants', 'button')
  // })

  // it('should display error handling if the city entered is misspelled', () => {
  //   cy.get('form input')
  //     .type('Dener')
  //     .get('.submit-button').click()
  //   cy.get('.category-card:first button').click()
  //     .url('http://localhost:3000/food')
  //     .get('h3')
  //     .should('contain', 'No results for your search. Please check your spelling and try a new search.')
  // })

  // it('should display error handling if complete gibberish is entered for the city search.', () => {
  //   cy.get('form input')
  //     .type('asdfasdfasdf')
  //     .get('.submit-button').click()
  //   cy.get('.category-card:first button').click()
  //     .url('http://localhost:3000/food')
  //     .get('h3')
  //     .should('contain', 'Oops, something went wrong! Please try again later.')
  // })

  // it('should change the url when viewing a listings page', () => {
  //   cy.get('.category-card:first button').click()
  //     .url('http://localhost:3000/food')
  // })

  it('should display sub menu if Show All is clicked', () => {
    cy.get('.category-card:first button').click()
      .url('http://localhost:3000/food')
    cy.get('select').select('Show All')
      .get('option')
        .should('contain', 'American (New)')
      .get('option')
        .should('contain', 'Breakfast & Brunch')
      .get('option')
        .should('contain', 'Caribbean')
      .get('option')
        .should('contain', 'Coffee & Tea')
      .get('option')
        .should('contain', 'Sandwiches')
  })
})