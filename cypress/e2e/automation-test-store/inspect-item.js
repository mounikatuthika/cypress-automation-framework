///<reference types="Cypress" />
describe("Inspect automation test store items using chain of commands",() =>{
    it("click on first item using item header",()=>{

    
    //cypress code
    cy.visit("https://www.automationteststore.com/")
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });
    it.only("click on first item using item text",()=>{

    
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("selected the following item:"+itemHeaderText.text())
            })
    });
    it("click on first item using item index",()=>{

        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.productname').eq(0).click()
    });
})