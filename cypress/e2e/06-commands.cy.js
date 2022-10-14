///<reference types="cypress"/>

describe('HTML Page Test Suite - COMMANDS', () => {

    it('URL command on the page', function(){
        cy.visit('cypress/index.html')
        cy.url().should('contain','index.html')
        cy.url().should('contain','cypress')                
    })

    it('TITLE command on the page', function(){
        cy.visit('cypress/index.html')
        cy.title().should('eql','Cypress v10')
           
    })

    it('GO command on the page', function(){
        cy.visit('cypress/index.html')
        cy.contains('About').click()
        // cy.wait(2000)
        cy.go('back') 
        // cy.wait(2000)
        cy.go('forward')  
        // cy.wait(2000)
        cy.go('back')  
    })

    it('COOKIES command on the page', function(){
        cy.visit('cypress/index.html')
        // cy.getCookie('username').should('have.property','value','Manjunatha')
        cy.setCookie('username','Manjunatha').should('have.property','value','Manjunatha')
        cy.setCookie('token','1234567890').should('have.property','value','1234567890')

        cy.getCookies().should('have.length',2)
        cy.clearCookies()
    })

    it('CLOCK command on the page', function(){

        const now = new Date(2022, 6, 8).getTime()
        cy.clock(now)
        cy.visit('cypress/index.html')
    })

    it('WRAP - its & invoke command on the page', function(){
        const car ={
            color: 'yellow',
            model: '2022',
            isNew: true,
            turnOn: function(){
                return 'the car is on'
            }
        }
        
        cy.wrap(car).should('have.a.property','color','yellow')
        cy.wrap(car).its('model')
        cy.wrap(car).its('color')
        cy.wrap(car).invoke('turnOn')

        cy.visit('cypress/index.html')
        cy.get('.course-list').its('length')
        cy.get('.course-list').invoke('text')
    })
    
    it('TEHN command on the page', function(){
        cy.visit('cypress/index.html')
        cy.url().then(url =>{
            cy.log(url)
        })
        cy.url().should('contain','cypress')

    })

    it('EXPECT command on the page', function(){
        const courses =[
            { id: 1, title: 'cypress' },
            { id: 2, title: 'jest' },
            { id: 3, title: 'playwright' },
            { id: 4, title: 'testcafe' }
        ]

        cy.wrap(courses).then (courses=>{
            expect(courses).to.have.length(4)
        })

        cy.wrap(courses).then (courses=>{
            expect(courses[0].title).to.contains('cypress')
        })

        cy.url().then (url=>{
            expect(url).to.contains('index.html')
        })

    })
    
    it('EACH command on the page', function(){
        cy.visit('cypress/index.html')
        cy.get('.course-list').each($element =>{
            cy.log($element.text())
            cy.wrap($element).should('contain','Cypress')
        })
           
    })

    // it('EACH command on the page', function(){
    //     cy.visit('cypress/index.html')
    //     cy.get(':nth-child(1) > .card-body').each($element =>{
    //         cy.log($element.text())
    //         cy.wrap($element).should('contain','GB')
    //     })
           
    // })


})
