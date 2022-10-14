///<reference types="cypress"/>
describe(' Browser inputs ', () => {

    // it('should override the current time', function(){
    //     const date = new Date (2020, 3, 10).getTime() //return timestamp
    //     cy.clock(date)
    //     cy.log(date)
    // })

    it(' should load login page', function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it(' should fill username ', ()=>{
        cy.get('#user_login').as('login')            //alias
        cy.get('@login').clear()
        cy.get('@login').type('TestLogin', {delay: 100})
    })
    
    it(' should fill password ', ()=>{
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('TestPassword', {delay: 100})
    })

    it(' should mark checkbox ', ()=>{
        cy.get('input[type="checkbox"]').click()
        cy.wait(4000)
    })

    it(' should submit login form ', ()=>{
      cy.contains('Sign in').click()
    })

    it(' should display error message ', ()=>{
      cy.get('.alert-error')
        .should('be.visible')
        .and('contain','Login and/or password are wrong.')
      
      cy.clearCookies({log: true})
      cy.clearLocalStorage('your item', {log: true})
    })

})