///<reference types="Cypress" />
describe("Mouse actions via webdriveruni",() =>{

    it("Scroll into view",()=>{
   cy.visit("http://www.webdriveruniversity.com")
   cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})

    });
    it("should be able to drag and drop",()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        cy.get('#draggable').trigger('mousedown',{which:1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
         });
         it("should be able to double click",()=>{
            cy.visit("http://www.webdriveruniversity.com")
            cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
            cy.get('#double-click').dblclick();
             });
             it.only("should be able to click and hold",()=>{
                cy.visit("http://www.webdriveruniversity.com")
                cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
                cy.get('#click-box').trigger('mousedown',{which:1}).then(($element)=>{
                    expect($element).to.have.css('background-color','rgb(0, 255, 0)')
                    
                    })
                    
                 });
})