const forgottenPasswordPage = {
    emailInput: ()=> cy.get('#email'),
    submitButton: ()=> cy.get('#form_submit'),
    successMessage: ()=> cy.contains(`Your e-mail's been sent!`)
};

export default forgottenPasswordPage;