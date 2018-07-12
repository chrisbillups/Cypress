describe('create program', function () {
    it('launch qa acd create program', function () {
        cy.visit('https://qa.singlecomm.com')  //load site
        cy.get('input.re.loginUsername.focus2') //select usern box
            .type('test3_Chris')
        cy.get('input.re.loginPassword') //select pwd box
            .type('Singlecomm321')
        cy.get('input.buttonM.bBlue').click() //get sign in, click button
        cy.url()
            .should('include', '/dashboard')  // verify at dashboard
        
        cy.get(':nth-child(5) > a > :nth-child(2)').click()  // click OMNICHANNEL SETUP button
        
        cy.get('h4 > .btn').click()
        
        
        })
          
        
})
