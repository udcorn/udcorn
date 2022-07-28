/// <reference types="cypress"/>

const { keyword } = require("color-convert");

describe('cy visit ', function () {
    it ('it should open the site', function (){
        cy.visit('https://www.rahulshettyacademy.com/seleniumPractise');
//            cy.visit ('https://www.google.com')

    cy.get('input.search-keyword').type('ca')
    //cy.get('.search-keyword').type('ca')
    //cy.wait(5000)
    cy.get('.product:visible').should('have.length',4)


// alising 
    cy.get('.products').as('productlocator')
    
    // top and decended elements
    cy.get('@productlocator').find('.product').should('have.length', 4).then(function(){
        console.log('printing the products after the all the products are found')
        cy.log('cylog')
    })
    //cy.get('.products').should("have.descendants", ".product")

    // add to cart 
    //cy.get('.products').should('have.descendants','product').eq(2).contains('ADD TO CART')
    cy.wait(2000)
    cy.get('@productlocator').find('.product').contains('Capsicum').get(':nth-child(3) > .product-action > button').click()
//CLICKS (iterating through each element and clicking $e1.click])    
//    cy.get('.product-action > button').click()

// iterating through the names and selecting selected name actions
//promises
    cy.get('.products').find('.product').each(($e1, index, $list) => {
        const textVeg= $e1.find('h4.product-name').text()
        if (textVeg.includes('Cashews')){
            cy.wrap($e1).find('button').click()
        }
    })

   
//asyc 
//alising
//Jquery&cypress

//assert if the logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')


// print logs 
cy.get('.brand').then(function(logoelement){
    cy.log(logoelement.text())
})



})

}) 