/// <reference types= 'cypress'/>

describe ('UI page elements', function(){

    it('page UI elements', function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    //  cy.get('[for="radio1"]').cy.get('[type="radio"].XyzTypeRadio').first().check()

// CHECKBOXES 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
// getting all the checkboxes      
//SHOULD assertion   
        cy.get('input[type="checkbox"]').check(['option2','option3'])


// DROPDOWN - Static and Dynamic 
        // static drop down tagelement is 'SELECT'
        cy.get('select').select('option2').should('have.value','option2')

        //cy.get('#dropdown-class-example').click()

        cy.request('https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20220721&st=env')


// DROPDOWN - Dynamic 

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text()==='India') {
                cy.wrap($e1).click()
                //$e1.click()
            }
        })
        cy.get ('#autocomplete').should('have.value','India')
    
// Visibility and invisibility of elements 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    
// radio button
        cy.get('[value="radio2"]').check().should('be.checked') 
    })
})