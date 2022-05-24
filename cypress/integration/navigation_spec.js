describe('Navigation bar', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=undefined', { fixture: 'sampleShoppingData.json' }).as('shopping results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=entertainment', { fixture: 'sampleEntertainmentData.json' }).as('entertainment results')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  it('should let you go to the Food & Drink page through the navigation bar', () => {
    cy.get('button').eq(1).click()
      .url('http://localhost:3000/food')
      .get('h2')
      .contains('Food & Drink')
  })

  it('should let you go to the Shopping page through the navigation bar', () => {
    cy.get('button').eq(2).click()
      .url('http://localhost:3000/shopping')
      .get('h2')
      .contains('Shopping')
  })

  it('should let you go to the Ars & Entertainment page through the navigation bar', () => {
    cy.get('button').eq(3).click()
      .url('http://localhost:3000/entertainment')
      .get('h2')
      .contains('Arts & Entertainment')
  })

  it('should let you go back to the homepage through the navigation bar', () => {
    cy.get('button').eq(3).click()
      .url('http://localhost:3000/entertainment')
      .get('button').eq(0).click()
      .url('http://localhost:3000')
  })
})