/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=dzMeMeqQeJhAbEhq8QL6KaiSEqkjbgWiItqeBBGk4EUS4j3CbcQMNAqO23ZaS8wg&agent_name=CYPRESS_AUTOMATED')  //load site

        // first n
        cy.get('#d96df361-4275-4cf8-a896-b0a2887e7733').type('ABBEY')
        // POSTAL CODE
        cy.get('#dd7aa667-6357-4153-9e16-5ca217d846a8').type('30334')
        // L NAME
        cy.get('#\\38 5e2ba04-cfe9-472e-ab2a-b11358e861f1').type('AUTOMATIC')
        // TELEPHONE
        cy.get('#\\35 890b7a1-a63e-48a4-8be1-816e16c21003').type('2155551212')
        // email
        cy.get('#ae3fa68d-1747-4570-b54e-1649017a43f4').type('ABBEY@ANYWHERE.COM')
        // CLICK FEMALE
        cy.get(':nth-child(9) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(4) > .ng-binding').click()
        // age
        cy.get('#bf7b78c0-e487-4c3d-a88d-84f4c6cecd04').type('75')
        // select 'ready to order'
        cy.get('#\\37 f5dc8f9-2e7f-4cb7-a12f-aa63da86c3f2').click()
        // next p
        cy.get('#form\\.next').click()
        // pick visa
        cy.get(':nth-child(2) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(3) > .ng-binding').click()
        // click credit
        cy.get('.fr-field > [style=""] > .ng-binding').click()
        // cc info
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.view_number').type('4111111111111111')
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_month').select('10')
        cy.get('#\\30 6dd4c97-9334-4fde-b59f-0d9d3714cf0a\\.exp_year').select('2023')
        // click verify
        cy.get('#\\30 4b6f316-5c42-40aa-8dea-5a017f8c5271').click()
        cy.wait(200)
        // verify confirmation message
        // cy.get(':nth-child(7) > .field > .field-narrative > .ng-pristine > .fr-field > .form-group > .fr-field-paragraph > .ng-scope').contains('Verify Successful')
        // next p
        cy.get('#form\\.next').click()
        // billing zip line1
        cy.get('#e29e3194-91b8-48a1-8fca-8378b0e9cf4c').type('90210')
        cy.get('#d2796088-6ee9-496b-bc6d-c1d01fe26dfe\\.line1').type('4923 WINDING BILL STREET')
        // next p
        cy.get('#form\\.next').click()
        // SHIPPING SAME BILLING - Y
        cy.get('#\\30 73888e4-cf85-45a0-90cb-7adfb15e8baa').click()
        // verify shipping/billing same
        cy.wait(100)
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(5)').contains('Beverly Hills, CA 90210')
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(5)').contains('Beverly Hills, CA 90210')
        // email
        // cy.get('#\\36 f0576b0-329b-4b68-8899-12f0d24c7471').type('HERE@ALL.COM')
        // next p
        cy.get('#form\\.next').click()
        // SELECT GIFT
        cy.get('#e3e676dc-513e-4f13-9956-7214621ac428').click()
        // next p
        cy.get('#form\\.next').click()
        // activit - n
        cy.get('.fr-field > :nth-child(4) > .ng-binding').click()
        // next p
        cy.get('#form\\.next').click()
        // activits rebuttal - y
        cy.get('#\\37 c8b19cb-7ac1-4b84-a119-a18b8b4bac63').click()
        // next p
        cy.get('#form\\.next').click()
        // tbb - no
        cy.get('#\\32 355949d-d703-46cf-907f-097bcb9af676').click()
        // next p
        cy.get('#form\\.next').click()
        // tbb rebuttal  - customer is fatigued
        cy.get(':nth-child(2) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(5) > .ng-binding').click()
        // next p
        cy.get('#form\\.next').click()
        // one pay - n
        cy.get('#\\32 b67c405-414e-4535-8e64-771c8b74f1b9').click()
        // next p
        cy.get('#form\\.next').click()
        // one pay rebuttal - n
        cy.get('#\\39 27c9a52-67a4-4d48-bf29-2c7c9892d27a').click()
        // next p
        cy.get('#form\\.next').click()
        // verity today cost
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains("$68.84")
        // verify total
        cy.get(':nth-child(3) > strong.ng-binding').contains('$109.29')
        // remove one 30 fsy 
        cy.get(':nth-child(3) > .field > .field-radio > ng-form.ng-valid > .fr-field > :nth-child(3) > .ng-binding').click()
        // verify total
        cy.wait(100)
        cy.get('.cart-totals-row > :nth-child(3)').contains('$103.86')
        // confirm order - y
        cy.get(':nth-child(12) > .field > .field-radio > ng-form.ng-pristine > .fr-field > :nth-child(3) > .ng-binding').click()
        // next p
        cy.get('#form\\.next').click()
        // coach consent - y
        cy.get('#\\39 b21a1f8-8531-45de-b362-d440f5abd6d7').click()
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