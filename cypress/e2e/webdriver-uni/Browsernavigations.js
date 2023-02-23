describe("Validate webdriveruni home page links",() =>{
    it("confirm links redirect to the correct pages",()=>{
    

   cy.visit("http://www.webdriveruniversity.com")
   cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
   cy.url().should('include','contactus')
   cy.go('back')
   cy.reload()
   cy.url().should('include','http://www.webdriveruniversity.com')
   cy.go('forward')
   cy.url().should('include','contactus')
   cy.go('back')
   cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
   cy.url().should('include','mou')
   cy.go('back')
    });})