/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=NejhWAgQf9bFqEfheBSFUgUXp2QQnnHloC3X3bFBAQEDCfLdzajP2bysTr5KqhZf&agent_name=CYPRESS_AUTOMATED')  //load site

        // f name
        cy.get('#d96df361-4275-4cf8-a896-b0a2887e7733').type("JOHNNY")
        // POSTAL code
        cy.get('#dd7aa667-6357-4153-9e16-5ca217d846a8').type("96071")
        // SELECT FEMALE
        cy.get('#\\38 5acf9c8-d9d7-494b-8da7-94b597141889').click()
        // select ready to order
        cy.get('#\\37 f2c9a8d-abd5-469e-a330-9e4fd6090e90').click()
        cy.get('#form\\.next').click()
        // verify total
        cy.get(':nth-child(3) > strong.ng-binding').contains("$53.46 USD")
        // select visa
        cy.get(':nth-child(2) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(3) > .ng-binding > #\\39 4641ec1-d508-4552-8760-34efc3e03667').click()
        // select debit
        cy.get('ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding > #\\34 b6a3844-d97d-48cb-b192-4957dc66db92').click()
        // enter cc info
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.view_number').type("4111111111111111")
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_month').select("9")
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_year').select("2026")
        // hit verify button
        cy.get('#b178dec5-7c2c-4c01-891f-f7db86d80917').click() 
        // verify successful
        cy.get(':nth-child(7) > .field > .field-narrative > .ng-pristine > .fr-field > .form-group > .fr-field-paragraph > .ng-scope').contains("Verify Successful")
        // next p
        cy.get('#form\\.next').click()
        // l name
        cy.get('#\\38 bc77626-9253-453c-958f-b7a7fe78ad68\\.family').type("AUTOMATED")
        //ZIP
        cy.get('#e29e3194-91b8-48a1-8fca-8378b0e9cf4c').type("30334")
        // ADDRESS
        cy.get('#d2796088-6ee9-496b-bc6d-c1d01fe26dfe\\.line1').type("812 Station Ave")
        cy.get('#d2796088-6ee9-496b-bc6d-c1d01fe26dfe\\.line2').type('Apt A8')
        // telephhone
        cy.get('#\\35 bb141f0-1581-4609-a9f2-8b3235c98a75').type('4045551212')
        // age enter 0
        cy.get('#f4b5d501-9fb8-4ef2-a607-26f257274ca6').type('0')
        // next p
        cy.get('#form\\.next').click()
        // shipping same as billing -> no
        cy.get('#\\34 4ae117c-8372-46cd-967b-604054fae4c1').click()
        // shipping address
        cy.get('#c47b5023-1263-405d-86b9-cca2fddbc7eb\\.line1').type("88 Peachtree Drive")
        // email
        cy.get('#\\36 f0576b0-329b-4b68-8899-12f0d24c7471').type('findme@here.com')
        // next p
        cy.get('#form\\.next').click()
        // check 5 prob quest
        cy.get('#\\38 8e5c950-dc04-4f8f-abb8-05e1908159e7').click()
        // select 'challenge myself'
        cy.get('#c18e47a0-9105-4f8a-b99c-a0a7810a6a2c').click()
        // weight to lose
        cy.get('#cefe3ca8-584a-4e6d-9670-daaaeea1afe1').type('65')
        // how soon?  by new year
        cy.get('#\\33 f1ab301-13d5-4e2f-a529-6645b2318e25').click()
        // next p
        cy.get('#form\\.next').click()
        // ult results - y
        cy.get('#\\35 f5cb827-e592-49eb-bf6f-6f83b755fa9c').click()
        // next p
        cy.get('#form\\.next').click()
        // activit - y
        cy.get('#fff7a210-def5-4dd2-bf4d-7932123f97e1').click()
        // next p
        cy.get('#form\\.next').click()
        // 30 day trial - y
        cy.get('#\\32 c2cf45a-6ded-4080-8eaf-ad95552e41b8').click()
        // next p
        cy.get('#form\\.next').click()
        // bb on demand - y
        cy.get('#\\39 7a656a5-b5ec-4e03-b5b5-5392b55e8652').click()
        // next p
        cy.get('#form\\.next').click()
        // cc last 4 
        cy.get('#\\35 9927d41-26af-4d21-a3f3-420edbab2ed8').type('1111')
        // verify YES visible
        cy.get('#c43e044f-e31b-4015-9b6f-5b73f25478e9').should("be.visible")
            .click()
        // next p
        cy.get('#form\\.next').click()
        // one pay - no
        cy.get(':nth-child(2) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding > #\\32 b67c405-414e-4535-8e64-771c8b74f1b9').click()
        cy.wait(100)
        // confirm?  no
        cy.get('ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding > #\\32 b67c405-414e-4535-8e64-771c8b74f1b9').click()
        // next p
        cy.get('#form\\.next').click()
        // lifetime - y
        cy.get('#dca570c2-93e3-4009-9e13-ebd03ef8363a').click()
        // next p
        cy.get('#form\\.next').click()
        // reg e confirm
        cy.get('#\\38 3512dd5-f6f6-440b-84c9-a2bdb6e81957').type('1111')
        // verify YES shown
        cy.get('#\\35 eee840b-56e9-4613-a79d-68859b0e260c').should("be.visible")
            .click()
        // next p
        cy.get('#form\\.next').click()
        // order confirmed - y
        cy.get(':nth-child(13) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(3) > .ng-binding > #\\30 eb9f94d-49c3-4d10-bcd2-88fa365a7b7e').click()
        // next p
        cy.get('#form\\.next').click()
        // next p
        cy.get('#form\\.next').click()
        // next p
        cy.get('#form\\.next').click()
        // select dispo
        cy.get('.form-control').select("ORDER - ORDER")
        cy.wait(100)
        cy.get('#form\\.finish').click()

        
        




    })    
})