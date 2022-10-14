///<reference types="cypress"/>

describe('HTML Page Test Suite - ASYNC & VARIABLES', () => {
//sync run
    it('SYNC CALL on the login page', function(){
        cy.visit('cypress/index.html')
        cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
            .should('have.value','Downloading...')
    })

    //async run
    it('ASYNC CALL on the login page', function(){
        
        // const currentURL = ''    
        let currentURL = ''
        cy.visit('cypress/index.html')
        cy.url().then(url => {
            currentURL = url
            expect(currentURL).to.contains('index.html')
        })

        // expect(currentURL).to.contains('index.html')
    })

    //variables
    it('VARIABLES on the login page', function(){
        
        cy.visit('cypress/index.html')
        cy.url().as('url')
        cy.get('@url')
    })


})