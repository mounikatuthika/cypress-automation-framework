///<reference types="Cypress" />
describe("Test contact us form via webdriveruni",() =>{
    
    it("should be able to submit a successful submission via contact us formas all requrired",()=>{
      
        cy.fixture('testdata.json').then((records) => { 
            
            const filteredRecords = records.filter((record) => 
            record.status === 'yes');
            filteredRecords.forEach((record1)=>{
                cy.visit("http://www.webdriveruniversity.com")
                cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
               
cy.typeInTextField('[name="first_name"]',record1.first_name)
cy.typeInTextField('[name="last_name"]',record1.last_name)
cy.typeInTextField('[name="email"]',record1.email)
cy.typeInTextField('textarea.feedback-input',record1.comments)
cy.checkIfVisible('[type="submit"]')
cy.clickButton('[type="submit"]')
cy.checkTextContent('h1','Thank You for your Message!')
    });
})
});
});