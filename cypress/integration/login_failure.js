import indexPage from "../model/index.page";
import loginPage from "../model/login.page";

describe('Logging in with incorrect details fails', function() {
    it('Given the user loads the landing page', function() {
        cy.visit('/');
    });

    it('And goes to Form Authentication', function() {
        indexPage.loginLink().click();
    });

    it('When they attempt to login with incorrect details', function(){
        loginPage.usernameInput().type('incorrect username');
        loginPage.passwordInput().type('incorrect password!');
        loginPage.submitButton().click();
    });

    it('Then the user is not logged in', function(){
        loginPage.failureFlash().should('be.visible');
        loginPage.usernameInput().should('be.visible');
        loginPage.passwordInput().should('be.visible');
    });
})