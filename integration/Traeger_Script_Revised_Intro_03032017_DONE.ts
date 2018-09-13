/// <reference types="Cypress" />
describe('complete script', function () {
    it('complete script', function () {
        cy.visit('https://qa.singlecomm.net/deploy/index.html?token=gXKBXRJlEDtv9d18YnUwn0EAsmXSxLdGEOOq7jTVDUyySyaPFd77qdlTW60UIJYD&agent_name=CYPRESS_AUTOMATED')  //load site
        // recording - y
        cy.get('#cc44990a-3fa7-4bd1-b98e-e4d0636c05f4').click()
        // experience - some
        cy.get('#\\37 67fde0e-e7f1-4c11-a5ee-eaaf5735546a').click()
        // next slide
        cy.get('#form\\.next').click()
        // main offer - 3 paym
        cy.get('#d2168526-df6a-422e-9b32-64eabc4280db').click()
        // how many? - 3
        cy.get('#c363e028-99c8-4e90-8c05-9953df14ca9d').type('3')
        // next slide
        cy.get('#form\\.next').click()
        // credit? - visa
        cy.get('#\\34 f52f37a-767c-4681-b7e5-7d26a54a741a').click()
        // first last n
        cy.get('#\\32 0ab09ee-c330-4366-8d91-e1b554972916\\.given').type('TONY')
        cy.get('#\\32 0ab09ee-c330-4366-8d91-e1b554972916\\.family').type('THETIGER')
        // cc info
        cy.get('#\\39 513f460-b34b-4ba7-832d-9b92611cc169\\.view_number').type('4111111111111111')
        cy.get('#\\39 513f460-b34b-4ba7-832d-9b92611cc169\\.exp_month').select('10')
        cy.get('#\\39 513f460-b34b-4ba7-832d-9b92611cc169\\.exp_year').select('2025')
        cy.get('#\\39 513f460-b34b-4ba7-832d-9b92611cc169\\.csc_present').type('123')

        // next slide
        cy.get('#form\\.next').click()
        // shipping zip info
        cy.get('#e7e6071f-4998-41d7-ade9-84a69b005ede').type('30334')
        cy.get('#ea61e1b8-9cc8-4053-aa3c-e5afbf8fc36a\\.given').type('LUCKY')
        cy.get('#ea61e1b8-9cc8-4053-aa3c-e5afbf8fc36a\\.family').type('CHARMS')
        cy.get('#\\39 689d750-cbee-4b67-b608-a1ad54143892\\.line1').type('248 SHIPMY WAY')
        cy.get('#\\31 2b25320-7556-4d80-99bd-7d60e1debc57').type('4045551212')
        // next slide
        cy.get('#form\\.next').click()
        // bill same ship? - n
        cy.get('#\\34 9903b0f-abb4-40ea-960e-85ed1c59a243').click()
        // bill info 
        cy.get('#\\36 9fbaab0-c0d7-4a73-ac25-3f4c7c81d0f1\\.given').type('COOKIE')
        cy.get('#\\36 9fbaab0-c0d7-4a73-ac25-3f4c7c81d0f1\\.family').type('CRISP')
        cy.get('#dda7e540-1d2e-42d9-bce0-39c5d5bf4bb3').type('19057')
        cy.get('#fc43e9b1-b11c-4e5a-bc5c-0b1e43d7f381\\.line1').type('456 BILLTHIS WAY')
        cy.get('#\\36 55a91a1-61ca-4c37-b520-711bd2329ac7').type('CEREAL@HERE.COM')
        // next slide
        cy.get('#form\\.next').click()
        // upsell - y
        cy.get('#\\38 db96af2-0a1a-4000-9846-052e9fbde8c9').click()
        // of bundles
        cy.get('#\\39 1da1d43-8bed-4f5e-9ab1-83b3587c93ad').type('2')
        // next slide
        cy.get('#form\\.next').click()
        // verify 3 pay
        cy.get('.pull-right > .text-semi-bold').contains('3-Pay (USD)')
        // one pay - y
        cy.get('#\\35 317a9c9-2935-4490-8e4a-4e3223a3e0a0').click()
        // verify 1 pay
        cy.get('.pull-right > .text-semi-bold').contains('1-Pay (USD)')
        // verify today
        cy.get('.cart-totals-row > :nth-child(1) > .ng-binding').contains('$2,467.69')
        // next slide
        cy.get('#form\\.next').click()
        // order confirm - y
        cy.get('#\\39 ae197a0-ffcf-49c9-9765-6ba8ff978246').click()
        // next slide
        cy.get('#form\\.next').click()
        // click authorize
        cy.get('#\\30 278af10-9b88-474a-9457-17476dcfc1ef').click()
        // verify "order successfull" disp
        cy.get(':nth-child(5) > .field > .field-narrative > .ng-pristine > .fr-field > .form-group > .fr-field-paragraph > :nth-child(1)').contains("Order Successful!")
        // next slide
        cy.get('#form\\.next').click()
        // next slide
        cy.get('#form\\.next').click()
        // select dispo
        cy.get('.form-control').select('SALE - SALE')
        cy.get('#form\\.finish').click()
        cy.get('.app-spinner-complete > .app-spinner-text').contains('Complete!')












    })
})