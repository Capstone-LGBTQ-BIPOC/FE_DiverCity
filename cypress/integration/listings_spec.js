describe('listings view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=shopping', { fixture: 'sampleShoppingData.json' }).as('shopping results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/dKf_zc_gvlQJRXXZNkUNng', { fixture: 'singleBiz.json' }).as('single biz')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=asdfasdfasdf&category=food', { forceNetworkError: true }).as('nonexistent city')
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

  it('should display error handling if the city entered is misspelled', () => {
    cy.get('form input')
      .type('Dener')
      .get('.submit-button').click()
    cy.get('.category-card:first button').click()
      .url('http://localhost:3000/food')
      .get('h3')
      .should('contain', 'No results for your search. Please check your spelling and try a new search.')
  })

  it('should display error handling if complete gibberish is entered for the city search.', () => {
    cy.get('form input')
      .type('asdfasdfasdf')
      .get('.submit-button').click()
    cy.get('.category-card:first button').click()
      .url('http://localhost:3000/food')
      .get('h3')
      .should('contain', 'Oops, something went wrong! Please try again later.')
  })

  it('should change the url when viewing a listings page', () => {
    cy.get('.category-card:first button').click()
      .url('http://localhost:3000/food')
  })

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

  it('should only display businesses for a specific sub category after it is selected', () => {
    cy.get('.category-card:first button').click()
     .url('http://localhost:3000/food')
    cy.get('select').select('American (New)')
      .get('.business-card:first')
      .should('contain', 'Jelly')
    cy.get('select').select('Caribbean')
      .get('.business-card:first')
      .should('contain', 'Jamaican Grill')
  })

  it('should display information for a single business', () => {
    cy.get('button').eq(3).click()
      .url('http://localhost:3000/shopping')
    cy.get('button')
      .should('contain', 'Learn More').eq(2).click()
    cy.get('h2')
      .should('contain', 'Stanley Marketplace')
      .get('img')
      .should('have.attr', 'src')
      .url('https://s3-media1.fl.yelpcdn.com/bphoto/1qGXCCIqwJHV05leOS6yXw/o.jpg')
      .get('h3')
      .should('contain', 'Food Court')
      .get('h3')
      .should('contain', 'Location: 2501 Dallas St, Aurora, CO 80010')
      .get('h3')
      .should('contain', 'Contact:')
      .get('a')
      .should('contain', 'Visit Website')
      .should('have.attr', 'href')
      .url('https://www.yelp.com/biz/stanley-marketplace-aurora?adjust_creative=us0-GXhQzuMv9uLzOEXxpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=us0-GXhQzuMv9uLzOEXxpw')
  })
})