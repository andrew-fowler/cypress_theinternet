
describe('User can request a new password', function() {
  it('Given the user loads the landing page', function() {
    cy.visit('/')
  })
 
  it('And goes to the Forgotten Password page', function() {
      cy.get('a[href="/forgot_password"]').click()
  })

  it('And they specify an email address', function() {
      cy.get('#email').type("foo@bar.com")
  })

  it('When they submit the request', function(){
      cy.get('#form_submit').click()
  })

  it('Then the success message is displayed', function(){
      cy.contains("Your e-mail's been sent!").should('be.visible')
  })
})