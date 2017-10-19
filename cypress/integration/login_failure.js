
describe('Logging in with incorrect details fails', function() {
  it('Given the user loads the landing page', function() {
    cy.visit('/')
  })
 
  it('And goes to Form Authentication', function() {
      cy.get('a[href="/login"]').click()
  })

  it('When they attempt to login with incorrect details', function(){
      cy.get('#username').type('incorrect username')
      cy.get('#password').type('incorrect password')
      cy.get('button[type="submit"]').click()
  })

  it('Then the user is not logged in', function(){
      cy.get('div[class="flash success"]').should('not.be.visible')
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')
  })

})