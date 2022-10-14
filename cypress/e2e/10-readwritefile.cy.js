///<reference types="cypress"/>

describe.skip('HTML Page Test Suite - FIXTURES', function() {

    it('Fixture test1', function(){
        cy.visit('cypress/index.html')
        cy.readFile('example.txt')
        // cy.writeFile('example.txt','E2E Tests')
        cy.writeFile('example.txt',' - E2E Tests', { flag: 'a+' })
        cy.readFile('example.txt')
    })
})