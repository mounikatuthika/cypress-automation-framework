///<reference types="Cypress" />
describe("Verify checkbox via webdriveruni",() =>{
   beforeEach(() => {
      cy.navigateTo_webdriveruni_checkbox_page();
      // cy.visit("/")
      // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true}) 
   });

    it("Check and validate checkbox",{
      retries:{
         runMode:2,
         openMode:1
         }
         },()=>{

 //  cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
 cy.get('#checkboxes > :nth-child(1) > input').as('option1')
 cy.get('@option1').check()
 cy.get('@option1').should('be.checked')
    });
    it("UnCheck and validate checkbox",()=>{
        cy.get(':nth-child(5) > input').as('option3')
      cy.get('@option3').uncheck()
      cy.get('@option3').should('not.be.checked')
         });
         it("Check multiple and validate checkbox",()=>{
            cy.get("input[type='checkbox']").as('checks')
            cy.get('@checks').check(["option-1","option-2","option-3"])
            cy.get('@checks') .should('be.checked')
             });
})
