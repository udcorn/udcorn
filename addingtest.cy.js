/// <reference types="cypress"/>

describe('cy visit ', function () {
    it ('it should open the site', function (){
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise');


        cy.get('input.search-keyword').type('ca')
        
//alising 
        cy.get('.products').as('productlocator')
        cy.wait(2000)

        cy.get(':nth-child(4) > .product-action > button').click({force: true})

//iterating through the names and selecting selected name actions
        cy.get('.products').find('.product').each(($e1, index, $list) => {
        
        const textVeg= $e1.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
            cy.wrap($e1).find('button').click({force: true})
        }
// REPEATING LINES, 

//        cy.get('@productlocator').find('.product').get($e1).click({force: true})

//use select
// {force: true} cy.get('[disabled]').click({force: true}) 
    })

// REP. LINES
    cy.get('.cart-icon > img').click({force: true})
    cy.get('.tada')
    cy.get ('.cart-preview > .action-block > button').click()
    //cy.contains('PROCEED TO CHECKOUT').click()
    // cy.get('button').click()
    cy.get(':nth-child(14)').click()

})  

})