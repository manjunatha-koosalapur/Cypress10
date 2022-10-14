///<reference types="cypress"/>

describe('HTML Page Test Suite - ASYNC & VARIABLES', function() {
    
    beforeEach(function () {
        cy.url().as('url')
    })

    it('ALIAS test1 on the login page', function(){
        cy.visit('cypress/index.html')
        cy.get('@url')
    })

    it('ALIAS test2 on the login page', function(){
        cy.visit('cypress/index.html')
        cy.get('@url')
    })

    it('ALIAS test3 on the login page', function(){
        cy.log(this.url)
    })

})    