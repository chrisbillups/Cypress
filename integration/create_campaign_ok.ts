/// <reference types="Cypress" />

describe('create program and campaign', function () {
    it('launch qa acd create program then campaign', function () {
        cy.visit('https://omnichannel-campaign-creator-qa.singlecomm.net/#/programs?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudElkIjoiYWMyNmRlMWYtMjc3Yi00Y2YyLWFlZDAtYTkwNmM3ZmUzZWE1IiwiY2xpZW50SWQiOi0xLCJjbHVzdGVyIjoicWEiLCJleHAiOjE1MzI3MzIwNDIsImlzcyI6IlNpbmdsZUNvbW0gU1NPIiwiaWF0IjoxNTMyNjk2MDEyfQ.mPwr1pBLBqvPHQJ4ihb9u25MJZYlnGAOk5W1B3QIDMc')  //load site
        cy.get('li').contains('Campaigns').click()  
        // CLICK PROGRAM TAB

        //CREATE CAMPAIGN WITH NEW PROGRAM
        cy.get('li').contains('Campaigns').click()  
        // CLICK PROGRAM TAB
        cy.get('h4 > .btn').click()
        // CLICK NEW CAMP BTN
            .wait(200) // WAIT 2 SEC
            cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-footer > .btn-default').click().wait(200)
        cy.pause()
    
        cy.get('h4 > .btn').click() //click new campaign again
        
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(1) > #verifyName')
        // CLICK CAMP NAME TEXT BOX
            .type('CHRIS CAMP CYPRESS')
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-body > form.ng-untouched > :nth-child(2) > #verifyDesc')
        // CLICK CAMPAIGN DESC TEXT BOX
            .type('DESCRIPTION ENTERED BY CYPRESS')
        cy.get(':nth-child(3) > .form-control')
        // CLICK ASSIGN TO PROGRAM DROPDOWN
            .select('CHRIS CYPRESS PROGRAM')
        cy.get('.modal-campaign-new > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        // click CREATE button

    })
          
        
})