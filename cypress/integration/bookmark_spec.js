describe('Bookmark functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.geoplugin.net/json.gp', { fixture: 'sampleGeoData.json' }).as('location data')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=shopping', { fixture: 'sampleShoppingData.json' }).as('shopping results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=Denver&category=food', { fixture: 'sampleFoodData.json' }).as('food results')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/dKf_zc_gvlQJRXXZNkUNng', { fixture: 'singleBiz1.json' }).as('single biz')
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses/B2i4QJY03Iqo7gxdCnJbiw', { fixture: 'singleBiz2.json' }).as('single biz')
    cy.visit('http://localhost:3000')
      .get('form input').type('Denver')
      .get('.submit-button').click()
  })

  // it('should let you bookmark pages', () => {
  //   cy.get('button').eq(2).click()
  //     .url('http://localhost:3000/shopping')
  //   cy.get('button')
  //     .should('contain', 'Bookmark').eq(8).click()
  //     .get('button').eq(10).click()
  // })

  // it('should let you view your bookmarks', () => {
  //   cy.get('button').eq(1).click()
  //     .url('http://localhost:3000/food')
  //     .get('button')
  //     .get('button').eq(8).click()
  //     .get('button').eq(10).click()
  //     .get('button').eq(12).click()
  //     .get('button').eq(4).click()
  //   cy.url('http://localhost:3000/bookmarks')
  //     .get('.bookmarks-container')
  //     .get('.saved-businesses')
  //     .should('contain', 'Jelly')
  //     .and('contain', 'Jamaican Grill')
  //     .and('contain', 'Denver Biscuit Co.')
  // })

  it('should let you remove bookmarks in listings view', () => {
    cy.get('button').eq(2).click()
      .url('http://localhost:3000/shopping')
    cy.get('button')
      .should('contain', 'Bookmark').eq(8).click()
      .and('contain', 'Un-Bookmark')
      .get('button').eq(8).click()
      .should('contain', 'Bookmark')
      .get('button').eq(10).click().click()
  })
    
    // .get('button').eq(4).click()
    // .url('http://localhost:3000/bookmarks')
    // .get('button').eq(8).click()
    // .get('button').eq(8).click()
    // it('should let you view a single business from the bookmarks page', () => {
  //   cy.get('button').eq(1).click()
  //     .url('http://localhost:3000/food')
  //     .get('button').eq(10).click()
  //     .get('button').eq(4).click()
  //     .url('http://localhost:3000/bookmarks')
  //     .get('button').eq(7).click()
  //   cy.url('http://localhost:3000/biz/B2i4QJY03Iqo7gxdCnJbiw')
  //     .get('h2')
  //     .should('contain', 'Jamaican Grill')
  // })
})