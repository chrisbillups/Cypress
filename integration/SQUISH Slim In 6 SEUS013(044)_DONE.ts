/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=yngAvHVUaKVX3iD0QBf4FTgPJXV5W3nIDHtbfeIcoabtTZwrFmzFYWkvD0RWw7mB&agent_name=CYPRESS_AUTOMATED')  //load site

        //f name
        cy.get('#d96df361-4275-4cf8-a896-b0a2887e7733').type('TINA')
        // postal code
        cy.get('#dd7aa667-6357-4153-9e16-5ca217d846a8').type('V3S3Y7')
        // L NAME
        cy.get('#\\39 bc3b9d2-fffa-480b-8319-ec98835b56c8').type('AUTOMATION')
        // EMAIL
        cy.get('#e722c500-084a-4a56-b34a-7870a9498ac7').type('AUTO@RUN.COM')
        // CLICK FEMALE
        cy.get(':nth-child(9) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding > #\\38 5acf9c8-d9d7-494b-8da7-94b597141889').click()
        // AGE
        cy.get('#\\34 b93662f-dddd-4034-95ec-085a07271ad5').type('50')
        // surprise bonus - y
        cy.get('ng-form.ng-pristine > .fr-field > [style=""] > .ng-binding > #\\38 8a05ed4-58b7-4dd4-909f-e20d10a6f6de').click()
        // NEXT p
        cy.get('#form\\.next').click()
        // verify today cost
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains("$58.88")
        // click VISA
        cy.get('[style=""] > .field > .field-radio > ng-form.ng-pristine > .fr-field').within(($form) => {
            cy.get("input:first").click()
        })
        cy.get('ng-form.ng-dirty > .fr-field > :nth-child(3) > .ng-binding').click()
        // select DONT KNOW
        cy.get('ng-form.ng-pristine > .fr-field > :nth-child(5) > .ng-binding').click()
        // cc info
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.view_number').type('4111111111111111')
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_month').select('9')
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_year').select('2019')
        // click VERIFY btn
        cy.get('#\\37 7788871-233f-47a2-9c12-07619e10f6d3').click()
        // verify confirmation shown
        cy.get(':nth-child(6) > .field > .field-narrative > .ng-pristine > .fr-field > .form-group > .fr-field-paragraph > .ng-scope').contains('Verify Successful\\.')
        // NEXT P
        cy.get('#form\\.next').click()
        // billing zip
        cy.get('#e29e3194-91b8-48a1-8fca-8378b0e9cf4c').type('M5P2N7')
        // bill addr
        cy.get('#d2796088-6ee9-496b-bc6d-c1d01fe26dfe\\.line1').type('24 BILLINGLY WAY')
        cy.get('#d2796088-6ee9-496b-bc6d-c1d01fe26dfe\\.line2').type('SUITE 112')
        // VERRIFY bill CITY/STATE IN CART
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(5)').contains('TORONTO, ON M5P 2N7')
        // tel #
        cy.get('#\\35 bb141f0-1581-4609-a9f2-8b3235c98a75').type('6095551212')
        // NEXT P
        cy.get('#form\\.next').click()
        // shipping same s biling?  n
        cy.get('#\\34 4ae117c-8372-46cd-967b-604054fae4c1').click()
        // ship address
        cy.get('#c47b5023-1263-405d-86b9-cca2fddbc7eb\\.line1').type('421 SENDSTUFF PLACE')
        // next p
        cy.get('#form\\.next').click()
        // fitness level 8
        cy.get('#\\35 7cabd7f-0d0a-4597-b158-cdd697fe6ce1').click()
        // main goal - get ripped
        cy.get('#\\34 4b05214-ac19-409f-909a-52cfdcd5e0f2').click()
        // weight to lose - 65
        cy.get('#cefe3ca8-584a-4e6d-9670-daaaeea1afe1').type('65')
        // how soon?  6-12 month
        cy.get('#ead06e73-1ce9-458e-837b-39ffde203138').click()
        // next p
        cy.get('#form\\.next').click()
        // activit - y
        cy.get('#fff7a210-def5-4dd2-bf4d-7932123f97e1').click()
        // next p
        cy.get('#form\\.next').click()
        // 2nd activit - yes to 2
        cy.get('#\\32 c2cf45a-6ded-4080-8eaf-ad95552e41b8').click()
        // next p
        cy.get('#form\\.next').click()
        // tbb - y
        cy.get('#\\39 7a656a5-b5ec-4e03-b5b5-5392b55e8652').click()
        // next p
        cy.get('#form\\.next').click()
        // super video - y
        cy.get('#\\35 f5cb827-e592-49eb-bf6f-6f83b755fa9c').click()
        // next p
        cy.get('#form\\.next').click()
        // one pay - y
        cy.get('#b50721ae-43eb-4d0c-9e48-42fb7f958659').click()
        // verify total
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains('$160.15')
        // next p
        cy.get('#form\\.next').click()
        // lifetime w - y
        cy.get('#dca570c2-93e3-4009-9e13-ebd03ef8363a').click()
        // verify total 
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains('$173.55')
        // next p
        cy.get('#form\\.next').click()
        // rush - y
        cy.get('#bd69d53c-342d-410f-9cb5-2d3b0647f546').click()
        // next p
        cy.get('#form\\.next').click()
        // order confirmed?  y
        cy.get(':nth-child(11) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(3) > .ng-binding > #\\30 eb9f94d-49c3-4d10-bcd2-88fa365a7b7e').click()
        // next p
        cy.get('#form\\.next').click()
        // next p
        cy.get('#form\\.next').click()
        // next p
        cy.get('#form\\.next').click()
        // dispo - sale - sale
        cy.get('.form-control').select('SALE - SALE')
        cy.get('#form\\.finish').click()
        cy.get('.app-spinner-complete > .app-spinner-text').contains('Complete!')

    })
})