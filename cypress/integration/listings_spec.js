describe('Listings view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=shopping', { fixture: 'sampleShoppingData.json' }).as('shopping results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/dKf_zc_gvlQJRXXZNkUNng', { fixture: 'singleBiz1.json' }).as('single biz')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  it('should display search results for the selected city with business name, image, and button', () => {
    cy.get('.category-button:first').click()
      .get('.listings-container')
      .should('contain', 'Food & Drink')
      .get('div')
      .should('contain', 'Jelly')
      .and('have.descendants', 'img')
      .and('have.descendants', 'button')
  })

  it('should change the url when viewing a listings page', () => {
    cy.get('.category-button:first').click()
      .url('http://localhost:3000/food')
  })

  it('should display sub menu if Show All is clicked', () => {
    cy.get('.category-button:first').click()
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
    cy.get('.category-button:first').click()
     .url('http://localhost:3000/food')
    cy.get('select').select('American (New)')
      .get('div')
      .should('contain', 'Jelly')
    cy.get('select').select('Caribbean')
      .get('div')
      .should('contain', 'Jamaican Grill')
  })
})