/// <reference types='cypress'/>

describe('child window', function(){

    it('child window test', function (){

        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });        
        
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        
    
        cy.get('#opentab').then(function(el){
            const url=el.prop('href')
            cy.log(url)
            cy.visit('www.google.com')
        })
    })
})
