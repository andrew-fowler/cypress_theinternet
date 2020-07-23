const indexPage = {
    loginLink: ()=> cy.get('a[href="/login"]'),
    forgottenPasswordLink: ()=> cy.get('a[href="/forgot_password"]'),
    windowsLink: ()=> cy.get('a[href="/windows"]')
};

export default indexPage;