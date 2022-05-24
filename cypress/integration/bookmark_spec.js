describe('Bookmark functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=undefined', { fixture: 'sampleShoppingData.json' }).as('shopping results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/dKf_zc_gvlQJRXXZNkUNng', { fixture: 'singleBiz1.json' }).as('single biz')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  it('should let you bookmark pages', () => {
    cy.get('button').eq(3).click()
      .url('http://localhost:3000/shopping')
    cy.get('button')
      .should('contain', 'Bookmark').eq(3).click()
      .get('button').eq(5).click()
      .get('button').eq(7).click()
  })

  it('should let you bookmark in a single business view', () => {
    cy.get('button').eq(3).click()
      .url('http://localhost:3000/shopping')
    cy.get('button')
      .should('contain', 'Learn More').eq(2).click()
    cy.url('http://localhost:3000/biz/dKf_zc_gvlQJRXXZNkUNng')
  })
})