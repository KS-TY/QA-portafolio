describe('Login - SauceDemo', () => {

  it('Should login with valid credentials', () => {
    cy.login()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('Should show error with invalid credentials', () => {
    cy.login('fake_user', 'wrong_pass')
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

})
