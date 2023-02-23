///<reference types="Cypress" />
describe("Test contact us form via automation test store",() =>{
    before(() => {
        cy.fixture('Userdetails').as("user")
    });
    it("should be able to submit a successful submission via contact us formas all requrired",()=>{
    
    //cypress code
    cy.visit("https://www.automationteststore.com/")
    cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(linkText){
        cy.log("clicked on link using tex:"+linkText.text())
    })
    cy.get("@user").then((user)=>{
        cy.get('#ContactUsFrm_first_name').type(user.first_name)
        cy.get('#ContactUsFrm_email').type(user.email)
            })
    
    cy.get('#ContactUsFrm_enquiry').type("testing")
    cy.get('.col-md-6 > .btn').click()

    });
})