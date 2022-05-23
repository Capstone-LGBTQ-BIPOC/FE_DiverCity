describe('Going back functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/B2i4QJY03Iqo7gxdCnJbiw', { fixture: 'singleBiz2.json' }).as('single biz')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  it('should let you go back to the listings page from a single business view', () => {
    cy.get('button').eq(2).click()
      .url('http://localhost:3000/food')
    cy.get('button')
      .should('contain', 'Learn More').eq(3).click()
    cy.url('http://localhost:3000/biz/B2i4QJY03Iqo7gxdCnJbiw')
      .get('button')
        .should('contain', 'Go Back')
      .get('h2')
        .should('contain', 'Jamaican Grill')
      .get('button').eq(2).click()
    cy.url('http://localhost:3000/food')
  })
})