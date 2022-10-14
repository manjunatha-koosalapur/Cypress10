///<reference types="cypress"/>

describe('HTML Page Test Suite - FIXTURES', function() {
    
    beforeEach(() =>{
        cy.fixture('user').then(user =>{
            user.email='koosalpaur@testemail.com'
        }).as('user')
    })


    it('Fixture - update fixture data', function(){
        cy.visit('cypress/index.html')
        cy.get('@user').then(user =>{
            cy.log(user)
        })
    })

})