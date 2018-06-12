var forgottenPasswordPage = {
    emailInput: function(){return cy.get('#email')},
    submitButton: function(){return cy.get('#form_submit')},
    successMessage: function(){return cy.contains(`Your e-mail's been sent!`)}
}

module.exports = forgottenPasswordPage;