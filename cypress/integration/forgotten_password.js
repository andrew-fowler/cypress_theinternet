let indexPage = require('../model/index.page');
let forgottenPasswordPage = require('../model/forgottenPassword.page.js');

describe('User can request a new password', function() {
  it('Given the user loads the landing page', function() {
    cy.visit('https://the-internet.herokuapp.com/');
  });
 
  it('And goes to the Forgotten Password page', function() {
      indexPage.forgottenPasswordLink().click();
  });

  it('And they specify an email address', function() {
      forgottenPasswordPage.emailInput().type("foo@bar.com");
  });

  it('When they submit the request', function(){
      forgottenPasswordPage.submitButton().click();
  });

  it('Then the success message is displayed', function(){
      forgottenPasswordPage.successMessage().should('be.visible');
  });
});