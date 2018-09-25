/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=RcsPO5Ck48RHbkxqSkaFsNGu21Ub48DVbW8rEa6E45rErj33hkMMMtz03u07Yag3&agent_id=CYPRESS_AUTOMATED')  //load site
        // WELCOME slide
        cy.get('#\\39 89f7611-4946-4b48-91a3-87fbe0d4ed56\\.given').type("TINA")
        cy.get('#\\39 89f7611-4946-4b48-91a3-87fbe0d4ed56\\.family').type("AUTOGIRL")
        cy.get('#e01180e4-3e0d-473c-94a0-9bdd88dca837').click()
        // phone - y
        
        cy.get('#\\32 8eb0cbe-0d6c-4110-8744-5102923e99f6').click()
        cy.get('#\\32 ed1e864-5e8e-41d4-9838-ad620c83fd17').type('2155551212')
        cy.wait(200)
        // gender - f
        cy.get('#\\36 f3addf3-7c38-44f2-9805-63b1cb7e1f37').click()
        // 4 pay
        cy.get('#\\37 7f543e1-1955-4103-b933-40151227568b').click()
        /// add - y
        cy.get('[style=""] > .ng-binding > #\\35 098189e-dabb-4b6b-8692-2f58e8b13c4a').click()
        
        cy.get('#\\33 1c6fbb4-3c1e-4475-8624-130643c46bda').type('5')
        cy.get('#form\\.next').click()
        // CC SLIDE
        cy.get('#c2245dc9-4cab-4705-b334-14f5381afd0c').click()
        cy.get('#\\38 784a5c0-a57e-4725-9a98-bdf6041a250f\\.view_number').type('4111111111111111')
        cy.get('#\\38 784a5c0-a57e-4725-9a98-bdf6041a250f\\.exp_month').select('10')
        cy.get('#\\38 784a5c0-a57e-4725-9a98-bdf6041a250f\\.exp_year').select('2025')
        cy.get('#form\\.next').click()
        // BILLING SLIDE
        cy.get('#c737a131-8ce2-4079-aad9-b961bdf5ee5a').type('M5P2N7')
        cy.get('#\\30 da08cbf-efd1-45b1-a28b-8a1bbb9a045e\\.line1').type('4 BILLME PLACE')
        cy.get('#\\36 3fc8609-d3e5-4a2d-a054-a680d96a3f1e').type('TINA@AUTOGIRL.COM')
        // BILL SAME AD SHIPPING? Y
        cy.get('#c1cbf7bd-a40a-45f0-9940-ebb187837658').click()
        cy.get('#form\\.next').click()
        // UPSELLS SLIDE
        cy.get('#\\30 13efd4f-fc52-41e2-8c6e-09c27d218a99').click() // yes
        cy.get('#form\\.next').click()
        // UPSELLS CONT
        cy.get('#e19b6294-de6e-4aa7-a2a0-4812beb1a3cb').click() // yes
        cy.get('#\\38 e614279-a6e9-4ae2-84f0-24ee9f116d82').click() // yes
        cy.get('#form\\.next').click()
        // ORDER CONFIRMED
        cy.get('#a0106bbf-beb6-4583-90be-f226ec83c787').click()  // yes
        cy.get('#form\\.next').click()
        // DISPO SLIDE
        // cy.get(':nth-child(3) > strong.ng-binding').contains('788.38 CAD')
        cy.get('.form-control').select('SALE - SALE')
        cy.get('#form\\.finish').click()
        cy.get('.app-spinner-complete > .app-spinner-text').contains('Complete!')
  
        
        

        
    })
})