///<reference types="cypress"/>

describe('HTML Page Test Suite - FIXTURES', function() {
    
    beforeEach(() =>{
        cy.fixture('user').as('user')
    })

    it('Fixture test1', function(){
        cy.visit('cypress/index.html')
        cy.fixture('user').then(user =>{
            cy.log(user)
            cy.log(user.email)
            cy.log(user.password)
        })
    })

    it('Fixture test2', function(){
        cy.visit('cypress/index.html')
        cy.fixture('user').then(user =>{
            cy.get('#inputEmail').type(user.email)
            cy.get('#inputPassword').type(user.password)
            cy.contains('Sign in').click()
        })
    })

    it('Fixture test3 - beforeEach', function(){
        cy.visit('cypress/index.html')
        cy.get('@user').then(user =>{
            cy.log(user)
        })
    })

})