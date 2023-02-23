///<reference types="Cypress" />
describe("Test contact us form via webdriveruni",() =>{
    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruni_homepage")+"/Contact-Us/contactus.html")
    });
    before(() => {
        cy.fixture('Userdeatils').then(function(data){
           // this.data=data;
           globalThis.data=data;
        })
       
    });
    it.only("should be able to submit a successful submission via contact us formas all requrired",()=>{
    
    //cypress code
    //cy.visit("http://www.webdriveruniversity.com/")
   // cy.get('#contact-us > .thumbnail > .section-title').click()
//    cy.visit("http://www.webdriveruniversity.com")
//    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
  // cy.get('[name="first_name"]').type(data.first_name)
  cy.get('[name="first_name"]').type(Cypress.env("first_name"))
   cy.get('[name="last_name"]').type(data.last_name)
   cy.get('[name="email"]').type(data.email)
   cy.get('textarea.feedback-input').type("example test")
   cy.get('[type="submit"]').click()
   cy.get('h1').should('have.text','Thank You for your Message!')

    });
    
    it("should not be able to submit a successful submission via contact us form as all are requrired",()=>{
    
    //cypress code
    cy.visit("http://www.webdriveruniversity.com")
    cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
   cy.get('[name="first_name"]').type("jhon")
   cy.get('[name="last_name"]').type("deo")
   cy.get('textarea.feedback-input').type("example test")
   cy.get('[type="submit"]').click()
   cy.get('body').contains('Error: all fields are required')

   
    });
    })
    
    
    