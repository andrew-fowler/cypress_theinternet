
describe('Logging in with correct details succeeds', function() {
  it('Given the user loads the landing page', function() {
    cy.visit('/')
  })
 
  it('And goes to Form Authentication', function() {
      cy.get('a[href="/login"]').click()
  })

  it('When they attempt to login with correct details', function(){
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')
      cy.get('button[type="submit"]').click()
  })

  it('Then the user is logged in', function(){
      cy.get('div[class="flash success"]').should('be.visible')
  })

})