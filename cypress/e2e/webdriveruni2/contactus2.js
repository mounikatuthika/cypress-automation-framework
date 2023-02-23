import HomePage_PO from '../../support/pageObjects/webdriveruni/Homepage_PO'
import Contactus_PO from '../../support/pageObjects/webdriveruni/Contactus_PO'
///<reference types="Cypress" />
describe("Test contact us form via webdriveruni",() =>{
    Cypress.config('defaultCommandTimeout',20000)//for perticular testsuit
    const contactus_po=new Contactus_PO();
    const homepage_PO=new HomePage_PO();
    beforeEach(() => {
        
        cy.viewport(550,750)
        homepage_PO.visitHomepage();
        //cy.wait(300);
        homepage_PO.clickOn_ContactUs_Button();
       // cy.pause();//can pause the test execution
        
    });
    before(() => {
        cy.fixture('Userdeatils').then(function(data){
           // this.data=data;
           globalThis.data=data;
        })
       
    });
    it("should be able to submit a successful submission via contact us formas all requrired",()=>{
    
  contactus_po.contactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,data.comment,"h1","Thank You for your Message!")

    });
    it("should not be able to submit a successful submission via contact us form as all are requrired",()=>{
    

       contactus_po.contactForm_Submission(Cypress.env("first_name"),data.last_name," ",data.comment,"body","Error: Invalid email address")
       
        });
    
    
    })
    
    