describe('verify shift status', function () {
    it('verify shift status', function () {
        
        cy.visit('https://qa.singlecomm.com')  //load site
        cy.get('input.re.loginUsername.focus2') //select usern box
            .type('test3_Chris')
        cy.get('input.re.loginPassword') //select pwd box
            .type('Singlecomm321')
        cy.get('input.buttonM.bBlue').click() //get sign in, click button
        cy.url()
            .should('include', '/dashboard')  // verify at dashboard
        
        cy.get('.nav > :nth-child(3) > a')  // open shift manager
        cy.get('.shift-manager-embed')
        window.open('file:///C:/Users/itsmecb/Documents/CONTRACT_WORK/singlecomm/OMNICHANNEL/CHRIS%20JUNE7%20CAMP/index.html')
    })
          
        
})