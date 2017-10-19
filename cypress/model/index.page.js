var indexPage = {
    loginLink: function(){return cy.get('a[href="/login"]')},
    forgottenPasswordLink: function(){return cy.get('a[href="/forgot_password"]')},
}

module.exports = indexPage