/// <reference types="Cypress" />

describe('create program and campaign', function () {
    it('launch qa acd create program then campaign', function () {
        cy.visit('https://omnichannel-campaign-creator-qa.singlecomm.net/#/programs?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiYWMyNmRlMWYtMjc3Yi00Y2YyLWFlZDAtYTkwNmM3ZmUzZWE1IiwiY2xpZW50SWQiOi0xLCJjbHVzdGVyIjoicWEiLCJleHAiOjE1MzI3MzIwNDIsImlzcyI6IlNpbmdsZUNvbW0gU1NPIiwiaWF0IjoxNTMyNjk2MDEyfQ.mPwr1pBLBqvPHQJ4ihb9u25MJZYlnGAOk5W1B3QIDMc')  //load site
        cy.get('li').contains('Programs').click()  
        // CLICK PROGRAM TAB
        cy.get('h4 > .btn').click()  
        //CLICK NEW PROGRAM BUTTON
        cy.get('.modal-program-new > .modal-dialog > .modal-content > .modal-footer > .btn-default').click() 
        //CLICK CANCEL
         cy.get('h4 > .btn').click()  
        //CLICK NEW PROGRAM BUTTON
        cy.get('.modal-program-new > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > .form-group > #verifyName').click()
            .type('CHRIS CYPRESS PROGRAM') 
            // CLICK TEXT AREA ADD TEXT
        cy.get('.modal-program-new > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() 
        //CREATE PROGRAM

        /* VERIFY PROGRAM
        cy.get('#search-box').type('CHRIS DEMO')
        cy.get('#program-list').should('include', 'DEMO')
        cy.get('#program-list > tr > :nth-child(1)')
            .should('include','DEMO') */

 /*
        //CREATE CAMPAIGN WITH NEW PROGRAM
        cy.get('li').contains('Campaigns').click()  
        // CLICK PROGRAM TAB
        cy.get('h4 > .btn').click()
        // CLICK NEW CAMP BTN
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-footer > .btn-default')
        // CLICK CANCEL
        cy.get('h4 > .btn').click()
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(1) > #verifyName')
        // CLICK CAMP NAME TEXT BOX
            .type('CHRIS CAMP CYPRESS')
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(2) > #verifyDesc')
        // CLICK CAMPAIGN DESC TEXT BOX
            .type('DESCRIPTION ENTERED BY CYPRESS')
        cy.get(':nth-child(3) > .form-control')
        // CLICK ASSIGN TO PROGRAM DROPDOWN
            .select('CHRIS CAMP CYPRESS')

*/

            
    
    })
          
        
})