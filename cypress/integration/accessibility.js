import {scanForProblems} from 'accessibilityjs'

let errors = []

function a11yCheck() {
    cy.document().then(function(document){
        scanForProblems(document, function(error){
            errors.push(error);
        });
    });
}

describe('No accessibility errors are present', function() {
    it('Given I navigate to the landing page', function() {
        cy.visit('/');
    })

    it('When I check the page for accessibility', function() {
        a11yCheck();
    })

    it('Then no errors are present', function() {
        console.log(`${errors.length} accessibility errors present`);
        expect(errors).to.have.lengthOf(0);
        console.log(errors);
    })
})