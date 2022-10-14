///<reference types="cypress"/>
describe('HTML page test suite - Mocha hooks', () => {
    
    before(()=>{
        cy.log('Run the server locally')
    })

    after(()=>{
        cy.log('Kill the server')
    })

    beforeEach(()=>{
        cy.log('Navigate to login page')
    })

    it('should visit login page', function(){
        cy.log('website should have correct url')
    })

    it('should be able to login', function(){
        cy.log('Fill the username and password')
        cy.log('Should navigate to the login page')
    })


})
