describe('Text file upload via webdriveruni', () => {
    it('upload a file', () => {
        cy.visit("http://www.webdriveruniversity.com")
   cy.get('#file-upload').invoke('removeAttr','target').click({force:true})
   cy.get("#myFile").selectFile("cypress/fixtures/RPAUipath.txt");
cy.get("#submit-button").click();


    });
    it('upload no file', () => {
        cy.visit("http://www.webdriveruniversity.com")
   cy.get('#file-upload').invoke('removeAttr','target').click({force:true})

cy.get("#submit-button").click();


    });
});
