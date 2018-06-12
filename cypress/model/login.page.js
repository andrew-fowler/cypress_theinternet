var loginPage = {
    usernameInput: function(){return cy.get('#username')},
    passwordInput: function(){return cy.get('#password')},
    submitButton: function(){return cy.get('button[type="submit"]')},
    successFlash: function(){return cy.get('div[class="flash success"]')}
}

module.exports = loginPage;