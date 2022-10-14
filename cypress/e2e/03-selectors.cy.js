///<reference types="cypress"/>
describe('HTML page test suite - Selectors', () => {
 
    it('should load html page', function(){
        cy.visit('cypress/index.html')
        cy.log('should load the page correctly')
        cy.get('h1')                                //Find Element using Tag name
        cy.get('#header1')                          //Find Element using ID
        cy.get('.header1')                          //Find Element using Class name
        cy.get('h1.header1')                        //Find Element using Class name
        cy.get('.course-list > .list1')             //Find Element using Children name
        cy.get('.course-list').children('.list1')   //Find Element using Children name
        cy.get('li').first()            //List Items and find the first element
        cy.get('li').last()             //List Items and find the last element
        cy.get('li').eq(0)              //List Items and find first element
        cy.get('li').filter('.web')     //Find Element using filter command
        cy.get('li').filter('.api')
        cy.get('.course-list .list1').next() //Find Element using siblings
        cy.get('.course-list .list2').prev()
        cy.get('.course-list .list1').nextAll()
        cy.get('.course-list .list1').nextUntil('.list6')
        cy.get('.course-list .list10').prevAll()
        cy.get('.course-list .list10').prevUntil('.list1')
        cy.contains('Mocha')               //Find Element using Text (not recommended)
        cy.contains('JEST')
        cy.get('[data-cy="JEST Course"]')  //Find Element using Attributes (best practice)    
        cy.get('.list4', {timeout:800000})
    
    
    })
    

})
