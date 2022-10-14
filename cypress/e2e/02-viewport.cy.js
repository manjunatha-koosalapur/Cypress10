///<reference types="cypress"/>
describe('HTML page test suite - Viewports', () => {
    
    ['macbook-16','ipad-mini','iphone-x','samsung-s10'].forEach(size =>{

    it('should load html page on ' + size, function(){
        cy.viewport(size)
        cy.visit('cypress/index.html')
        cy.log('should load the page correctly')
    })
    

})

})
