///<reference types="Cypress" />
describe("Verify radio button via webdriveruni",() =>{

    it("Check specific radio buttons",()=>{
   cy.visit("http://www.webdriveruniversity.com")
   cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
 cy.get('#dropdowm-menu-1').select('Python')
 cy.get('#dropdowm-menu-2').select('Maven').should('have.value','Maven')
 cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
    });
})