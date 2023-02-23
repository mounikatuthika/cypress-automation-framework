///<reference types="Cypress" />
describe("Verifying variables,commands and jquery commands",() =>{
    it("Navigate to specific page",()=>{
    
    //cypress code
    cy.visit("https://www.automationteststore.com/")
    /*const Makeuplink=cy.get("a[href*='product/category&path=']").contains("Makeup")
    Makeuplink.click();
    const skincarelink=cy.get("a[href*='product/category&path=']").contains("Skincare")
    
    skincarelink.click();*/
    //recommended approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()
   // cy.get("a[href*='product/category&path=']").contains("Skincare").click()
   cy.get("h1.heading1").then(($headerText)=>{
    const headerText=$headerText.text()
    cy.log("Found header text:"+ headerText)
    expect(headerText).is.eq('Makeup')
   })    
    });
    it.only("Validate properties of the contact us page",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //Uses cypress command and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
        //jquery approach
cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
    const firstNameText=text.find('#field_11').text()
    expect(firstNameText).to.contain('First name')
    })
    //embedded commands(closure)
    cy.get('#field_11').then(fnText=>{
    cy.log(fnText.text())
    cy.log(fnText)
    });
    
        });
})