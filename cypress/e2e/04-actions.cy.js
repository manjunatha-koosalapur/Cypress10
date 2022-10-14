///<reference types="cypress"/>

describe('HTML Page Test Suite - ACTIONS', () => {

    it('CLICK on the  page', function(){
        cy.visit('cypress/index.html')
        cy.get('.invoice-button').eq(2).click()                 
        // cy.get('.invoice-button').click({ multiple: true })
        // cy.get('.invoice-button').click({force : true})
    })

    it('TYPE on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#inputEmail').type('manjunatha@testEmail.com')                 
        cy.get('#inputPassword').type('password')
        // cy.get('[name="coverdInput"]').type('Hello', {force:true, delay: 6000})
        cy.contains('Sign in').click()
    })

    it('SELECT on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#courses').select('playwright')                 
    })

    it('CHECK & UNCHECK check-box on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#Banana').check().wait(2000)
        cy.get('#Banana').uncheck()
        cy.get('[type="checkbox"]').check()             //Checks all check-boxes
        cy.get('[type="checkbox"]').check(['Banana','Nuts']) //Checks check-boxes mentioned in array
    })

    it('CHECK & UNCHECK radio button on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#Tester').check().wait(2000)
        // cy.get('#Tester').uncheck()
    })

    it('CLEAR text on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#inputEmail').type('manjunatha@testEmail.com')                 
        cy.get('#inputEmail').clear()
    })

    it('DOUBLE CLCIK & RIGHT CLICK text on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('[value="Click me"]').rightclick()                
        cy.get('[value="Right Click"]').dblclick()
    })

    it('FOCUS & BLUR field on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.container > [type="text"]').focus()
        cy.get('.container > [type="text"]').blur()                
    })

    it('MOUSE HOVER & LONG PRESS field on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.trigger-button').trigger('mouseover')
        cy.get('.trigger-button').trigger('mousedown')
        cy.wait(4000)
        cy.get('.trigger-button').trigger('mouseup')
    })

})
