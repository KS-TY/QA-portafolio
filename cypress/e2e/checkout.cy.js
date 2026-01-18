describe('Checkout flow - SauceDemo', () => {

  it('Should complete a purchase successfully', () => {
    cy.login()
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Juan')
    cy.get('[data-test="lastName"]').type('Castillo')
    cy.get('[data-test="postalCode"]').type('110111')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })

})
