var indexPage = {
    loginLink: function(){return cy.get('a[href="/login"]')},
    forgottenPasswordLink: function(){return cy.get('a[href="/forgot_password"]')},
    windowsLink: function(){return cy.get('a[href="/windows"]')},
}

module.exports = indexPage;