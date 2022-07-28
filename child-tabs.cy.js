/// <reference types='cypress'/>


// reference: https://www.tutorialspoint.com/handling-child-tabs-with-cypress


describe('Hnaldling child tabs in the same tab', function (){

    it ('change new page tab the same browser tab', function (){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    // removing target attribute form hte link with removeAttr()

        cy.get('a[id="opentab"]')
        .invoke('removeAttr', 'target').click()

    // assertin to verify the current page on tab 
        cy.url().should('eq', 'https://www.rahulshettyacademy.com/') 

    // moving back to the main tab 
        cy.go('back')
    
    })
})