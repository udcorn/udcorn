/// <reference types='cypress'/>

describe ('Mouse hover', function (){

    it('Mouse hover ', function (){

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})

    })
})