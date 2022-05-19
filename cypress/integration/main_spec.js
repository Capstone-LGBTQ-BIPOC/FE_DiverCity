describe('DiverCity homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://immense-falls-83363.herokuapp.com/api/v1/businesses?location=denver}&category=shopping', {fixture: 'sampleBusinessesData.json' })
    cy.visit('http://localhost:3000')
  })
})
