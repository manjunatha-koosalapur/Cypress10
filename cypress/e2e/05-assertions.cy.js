///<reference types="cypress"/>

describe('HTML Page Test Suite - ASSERTIONS', () => {

    it('SHOULD HAVE TEXT assertion on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.course-list > .list1').should('have.text','Cypress')                
    })

    it('SHOULD CONTAIN assertion on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.course-list').should('contain','Cypress')                
    })

    it('SHOULD BE VISIBLE assertion on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.list11').should('have.text','sql')
        cy.get('.list11').should('not.be.visible')                 
    })

    it('SHOULD HAVE CLASS assertion on the page', function(){
        cy.visit('cypress/index.html')
        // cy.get('#detox').should('have.class','mobile')                 
    })

    it('SHOULD HAVE CSS assertion on the page', function(){
        cy.visit('cypress/index.html')
        // cy.get('.trigger-button').trigger('mouseover')
        //     .should('have.css','background-color','rgb(255, 0, 0)')
        cy.get('.trigger-button').trigger('mouseover')
            .should('have.css','background-color').and('eql','rgb(255, 0, 0)')                 
    })

    it('SHOULD BE ENABLED assertion on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#inputEmail').should('be.enabled')  
        // cy.get('#inputEmail').should('be.disabled') 
        
    })

    it('SHOULD HAVE VALUE assertion on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#inputEmail').type('manjunatha@testEmail.com')
            .should('have.value','manjunatha@testEmail.com')   
        
    })

    it('SHOULD BE SELECETD/CHECKED/FOCUSSED on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('#courses').select('playwright').should('have.value','playwright')
        cy.get('.container > [type="text"]').focus().should('be.focused')
        cy.get('#Tester').check().should('be.checked')

    })


})