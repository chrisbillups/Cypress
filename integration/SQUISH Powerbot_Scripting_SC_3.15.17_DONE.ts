/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=PuWULPNweo1ZwafIO5OZ75hjStMPrdM04577rYqMXfBXG6hNvSPGGIVp6Pp7Y9bt&agent_name=CYPRESS_AUTOMATED')  //load site
        //WELCOME SLIDE
        cy.get('#\\35 17d1ef0-c310-4a81-9444-901d5080f167\\.given').type('JOHN')
        cy.get('#\\35 17d1ef0-c310-4a81-9444-901d5080f167\\.family').type('SNOW')
        cy.get('#a6abbed7-a374-470f-a473-cad122010f26').click() //yes
        cy.get('#\\33 4832216-8c9f-40dd-99fe-4bfd5826a576').type("liked the ease of use and the price")
        cy.get(':nth-child(6) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding > #\\38 5782c8f-b295-442a-9325-9fbc40a0c431').click() //2 story
        cy.get('#b2736252-fe14-4a47-9263-70c73e6f038a').click() // low foot traffic
        cy.get(':nth-child(8) > .field > .field-radio > ng-form.ng-pristine > .fr-field > [style=""] > .ng-binding > #\\36 e00fba4-14bd-46d4-ba16-82a3d9921712').click() //has pets
        cy.get('.field-radio > ng-form.ng-pristine > .fr-field').within(($form) => {
            cy.get('input:first').click()
        })
        cy.get('#\\34 a941a85-066b-4278-b41a-facc4264c746').type('about 70 percent of the floor is tile')
        cy.get('#e370bcbf-2ae3-4699-b542-3f4ff121da3a').type('19020')
        cy.get('#form\\.next').click()
        // MAIN OFFER SLIDE
        cy.get('#f06b230d-8851-4fd2-8af5-7e97b6350dc1').click() // yes
        cy.get('#\\32 d1dd56c-a848-4f27-9473-b42b554b815f').type('5')
        cy.get('#form\\.next').click()
        // cc capture slide
        cy.get('#\\37 39bbb7a-e9c7-4fcd-8974-979c323c22b0').click() // visa
        cy.get('#\\34 a2a4469-b838-4cc4-ba62-ae4d6fe79b53\\.view_number').type('4111111111111111')
        cy.get('#\\34 a2a4469-b838-4cc4-ba62-ae4d6fe79b53\\.exp_month').select('11')
        cy.get('#\\34 a2a4469-b838-4cc4-ba62-ae4d6fe79b53\\.exp_year').select('2024')
        cy.get('#\\34 a2a4469-b838-4cc4-ba62-ae4d6fe79b53\\.csc_present').type('122')
        // cy.wait(400)
        cy.get('#form\\.next').click()
        // billing info
        cy.get('#\\32 5263f7d-4572-4001-8d12-acfb4a34d89a\\.line1').type('432 TOBILL AVE')
        cy.get('#cd47af4e-24c0-4443-a224-c99d0488f92c').type('6095551234')
        cy.get('#\\35 a27cacc-6079-4572-a84c-e9637205e184').type('reachme@here.com')
        cy.get('#ba49d1bf-e7d5-4af3-a184-1b4c8464d6cc').click() // no
        cy.get('#\\30 37b1fe9-8c30-49c5-8e99-50e23d7ae1a1').type('30332') // ship zip
        cy.get('#\\30 4b843b5-a59a-4aaf-9541-f10ced72aa06\\.given').clear().type('JENNY')
        cy.get('#ad149c00-21e3-4bd8-9183-fa652194e3a3\\.line1').type('543 SENDMESTUFF SPOT')
        cy.get('#form\\.next').click()
        cy.get('#\\39 c222949-a7a0-4aff-9bd4-98a1ee1a4efb').click() // y
        cy.get('#\\36 756d6f8-7280-4e27-acd3-d0c94ee6947e').type('4')
        cy.get('#form\\.next').click()
        // close slide
        cy.get('#\\37 8295dbd-ccd2-4b20-82d6-0a826b8409d5').click() // y
        cy.get('#form\\.next').click()
        // dispo slide
        /* cy.get(':nth-child(1) > .list-unstyled > :nth-child(1)').contains("JONH SNOW")
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(1)').contains("JENNY SNOW")
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(5)').contains("Bensalem, PA 19020")
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(5)').contains("Atlanta, GA 30332")
        cy.get('.cart-totals-row > :nth-child(2) > .ng-binding').contains("$279.00")
        */
        cy.get('.form-control').select("SALE - SALE")
        cy.get('#form\\.finish').click()
        cy.get('.app-spinner-complete > .app-spinner-text').contains('Complete!')





    })
})