///<reference types="cypress"/>

describe('OrangeHRM E2E Test Suite - CypressGitHubIntegration ', function(){
    it('Login', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.visit('baseUrl')  //** added base URL in cypress.config.js file**/
        // cy.visit('/')        //** we can use / instead of baseUrl**/
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('contain','orangehrm')
        
    })

})
