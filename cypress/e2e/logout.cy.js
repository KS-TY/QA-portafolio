describe('Logout - SauceDemo', () => {

  it('Should allow user to logout successfully', () => {
    cy.login()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

})
