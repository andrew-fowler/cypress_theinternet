let indexPage = require('../model/index.page');
let loginPage = require('../model/login.page');

describe('Logging in with correct details succeeds', function() {
  it('Given the user loads the landing page', function() {
    cy.visit('/')
  })
 
  it('And goes to Form Authentication', function() {
      indexPage.loginLink().click();
  })

  it('When they attempt to login with correct details', function(){
      loginPage.usernameInput().type('tomsmith');
      loginPage.passwordInput().type('SuperSecretPassword!');
      loginPage.submitButton().click();
  })

  it('Then the user is logged in', function(){
        loginPage.successFlash().should('be.visible');
  })
})