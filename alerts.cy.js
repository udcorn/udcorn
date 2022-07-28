/// <reference types='cypress'/>

//const { should } = require("chai");

// reference: https://www.tutorialspoint.com/handling-alerts-with-cypress

describe('Windows alerts pop-ups', function () {
    // test case
    it('Alert pop-ups', function (){
       // launch the url
       cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
       // click on submit button to produce the alert pop up
       cy.get('input[type="submit"]').click();
    
// // Windows alerts -> Window:alert 

// cy.on('window:alert', (txt) =>{
//     expect(txt).to.contains('Your full name cannot be blank.')
// })

// cy.on('window:confirm', (txt)=> {
//     expect(txt).to.contains('Your full name cannot be blank.')

// })

// triggering windows: alert event with on
        const windowAlert =  cy.on('window:alert', (txt)=>{
    //mocha assertions 
            expect(txt).to.contains('Your full name cannot be blank.')
        })
//windows: alert event with confirm 
        cy.on('window:confirm', (txt) => {
    //mocha assertions 
            expect(txt).to.contains('You are submitting information to an external page.')
       })
        console.log(windowAlert)
    


    }); 
});