let loginPage = {
    usernameInput: ()=> cy.get('#username'),
    passwordInput: ()=> cy.get('#password'),
    submitButton: ()=> cy.get('button[type="submit"]'),
    successFlash: ()=> cy.get('div[class="flash success"]'),
    failureFlash: ()=> cy.get('div[class="flash error"]')
};

export default loginPage;