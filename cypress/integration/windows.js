let indexPage = require('../model/index.page');
let windowsPage = require('../model/windows.page');

describe('User can launch a new window', function() {
    it('Given the user loads the landing page', function() {
        cy.visit('/')
    })

    it('And goes to the new windows page', function() {
        indexPage.windowsLink().click()
    })

    it('When they select to create a new window', function() {
        windowsPage.newWindowLink().click()
    })

    it('Then a new window is created', function(){
        //  aaand I give up.  
        //  Cypress doesn't support tabs.  
        //  Wtf.
    })
})