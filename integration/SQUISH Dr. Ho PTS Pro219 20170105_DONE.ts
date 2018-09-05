/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=utgRVG43Ir8o2nQGQZ8PIGfpFiejeq8JKIbp51PkIfqGtM2KwEi9Cm16rm7iQ9sG&agent_name=CYPRESS_AUTOMATED')  //load site

        // name
        cy.get('#\\32 27d8bc9-8395-46a6-b826-601bab144947\\.given').type("MEGA")
        cy.get('#\\32 27d8bc9-8395-46a6-b826-601bab144947\\.family').type("TRON")
        // call recordn prompt
        cy.get('[style=""] > .ng-binding > #\\31 14a4ce5-4123-4a8e-bb4a-d250dcd9d84f').click()
        // phone prompt -> yes
        cy.get('ng-form.ng-pristine > .fr-field > [style=""] > .ng-binding > #\\31 14a4ce5-4123-4a8e-bb4a-d250dcd9d84f').click()
        cy.get('#bcbd06de-efad-443c-8d47-db753decc246').type('6095551212')
        // select male
        cy.get('#acee09c5-aadd-475e-8023-b68330d0dfa6').click()
        // select female
        // cy.get('#f1b86cc2-1c18-442f-86e0-b90e81666f77').click()
        // model selection -> digital pro
        cy.get('#\\30 c2d7ec5-7e39-4175-9e3a-0319fc60ead7').click()
        // select one pay
        cy.get('#\\34 3f4f278-541f-4989-82c6-3977e2b0f2c7').click()
        // verify total of $239.98 in cart
        //cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').should("have.attr", "strong.ng-binding", "$239.98")

        // cy.get('div.cart-col').should("have.attr", "strong.ng-binding", "$239.98")
        // click yes pain therapy
        cy.get('#\\38 1f574d4-f3e4-42e2-8703-28ae99e3907b').click()
        // how many
        cy.get('#\\30 ff7f1e6-6bae-4c13-a232-4f0a9da2fdd7').type('2')
        // verify cost
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains("$719.94")
                //next page
        cy.get('form').contains('Next').click()
        // billing zip
        cy.get('#ba5b5c5f-5784-4b7b-b724-58fb305f58f6').type('19057')
        // enter address line 1/2
        cy.get('#\\37 b6a6eb4-8651-4ee3-aa94-9f5c0dceb227\\.line1').type("155 Rittenhouse Cir")
        cy.get('#\\37 b6a6eb4-8651-4ee3-aa94-9f5c0dceb227\\.line2').type("PO Box 111")
        //email
        cy.get('#\\32 f7c0f26-9b04-48fb-a7d4-8e0541063a81').type("here@there.com")
        // click ship same as bill - yes
        cy.get('#ed7aa2ce-afba-4fbd-b47a-e54e62912e02').click()
        // verify shipping
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(2)').contains("155 Rittenhouse Cir")
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(3)').contains("PO Box 111")
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(5)').contains("Levittown, PA 19057")
        // next p
        cy.get('form').contains('Next').click()
        //select visa
        cy.get('#\\38 1c156e0-05fb-4a26-a3dc-005f8e34825c').click()
        //enter cc
        cy.get('#\\30 b50ea39-0272-48b3-a997-25689ee26f56\\.view_number').type("4111111111111111")
        // month
        cy.get('#\\30 b50ea39-0272-48b3-a997-25689ee26f56\\.exp_month').select("10")
        // year
        cy.get('#\\30 b50ea39-0272-48b3-a997-25689ee26f56\\.exp_year').select("2025")
        // next p
        cy.get('form').contains('Next').click()
        //mobility cream - yes
        cy.get('#\\37 9a20d5c-5ca7-4004-87c0-4ef699854956').click()
        // next p
        cy.get('form').contains('Next').click()
        // mob cream subscrp - yes
        cy.get('#\\36 f8d2b21-d8fe-49f4-b387-c28af8a4481b').click()
        // next p
        cy.get('form').contains('Next').click()
        // ultimate upgrade - yes
        cy.get('#\\36 35abd37-8d9d-42c7-b61f-bc45cdc8151e').click()
        // 7 pay
        cy.get('#\\37 4bd9e50-d0fe-43b5-ac38-04e0ad933625').click()
        // next p
        cy.get('form').contains('Next').click()
        // mob sup sub - yes
        cy.get('#\\39 0c7d57e-cd1d-4f9e-88cf-370ece1fa59f').click()
        // next p
        cy.get('form').contains('Next').click()
        // extended warranty - yes
        cy.get('#\\30 7fdc381-155f-4f64-b931-c025be9d4eed').click()
        // next p
        cy.get('form').contains('Next').click()
        // express - y
        cy.get('#\\31 f36c3c6-f75d-49fd-b997-b1a2692fffe0').click()
        // next p
        cy.get('form').contains('Next').click()
        // verify today cost
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains("$713.68")
        // verify 7pay
        cy.get('.pull-right > .text-semi-bold').contains("7-Pay (USD)")
        // verity total
        cy.get(':nth-child(3) > strong.ng-binding').contains("$980.68 USD")
        // confirm order - y
        cy.get('#e15be402-8363-447b-bdbd-a95f7f884eb9').click()
        cy.wait(100)
        // next p
        cy.get('#form\\.next').click()
        // select dispo
        cy.get('.form-control').select("SALE - SALE")
        cy.get('form').contains('Finish').click() 




    })
})