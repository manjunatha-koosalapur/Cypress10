///<reference types="cypress"/>

describe('XYZ bank - Customer', function(){
    it('Customer login', function(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.contains('Customer Login').click()
        cy.get('#userSelect').select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()
    })

    it('Customer deposit', function(){
        // cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        // cy.contains('Customer Login').click()
        // cy.get('#userSelect').select('Harry Potter')
        // cy.get('form.ng-valid > .btn').click()
        cy.contains('Deposit').click()
        cy.get('.form-control').type(6000)
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('be.visible').and('contain','Deposit Successful')
        // cy.get('.error').should('contain', 'Deposit Successful')
    })

    it.skip('Customer withdrawl', function(){
        cy.get('.home').click()
        cy.contains('Customer Login').click()
        cy.get('#userSelect').select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()
        cy.contains('Transactions').click()
        cy.contains('Withdrawl').click()
        cy.get('.form-control').type(4000)
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('be.visible').and('contain','Transaction successful')
        // cy.wait(4000)
        cy.get('.borderM > :nth-child(3)').should('be.visible').and('contain','Balance : 2000')
        cy.contains('Withdrawl').click()
        cy.get('.form-control').type(4000)
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('be.visible')
            .and('contain','Transaction Failed. You can not withdraw amount more than the balance')

        cy.contains('Withdrawl').click()
        cy.get('.form-control').type(2000)
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.borderM > :nth-child(3)').should('be.visible').and('contain','Balance : 0')    
    })

    it('Customer logout', function(){
        cy.get('.logout').should('be.visible').and('contain','Logout')
        cy.get('.logout').click()
        cy.get('.logout').should('not.be.visible')
        cy.get('.home').click()
    })
})

describe('XYZ bank - Bank Manager', function(){
    it('Add customer', function(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.contains('Bank Manager Login').click()
        cy.contains('Add Customer').click()
        cy.get(':nth-child(1) > .form-control').type('FName')
        cy.get(':nth-child(2) > .form-control').type('LName')
        cy.get(':nth-child(3) > .form-control').type(2468)
        cy.get('form.ng-dirty > .btn').click()
    })

    it('Open account', function(){
        cy.contains('Open Account').click()
        cy.get('#userSelect').select('FName LName')
        cy.get('#currency').select('Dollar')
        cy.contains('Process').click()
        cy.contains('Customers').click()
        cy.get(':nth-child(6) > :nth-child(4) > .ng-binding')
            .should('be.visible').and('contain','1016')
    })

    it('Delete account', function(){
        cy.get(':nth-child(6) > :nth-child(5) > button').click()
    })

    it('Navigate to home page', function(){
        cy.get('.home').click()
    })
})