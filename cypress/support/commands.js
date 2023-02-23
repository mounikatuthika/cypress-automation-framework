// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
///<reference types="Cypress" />
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateTo_webdriveruni_homepage",()=>{
  cy.visit("/");
  });
  Cypress.Commands.add("navigateTo_webdriveruni_checkbox_page",()=>{
    cy.visit("/"+"/Dropdown-Checkboxes-RadioButtons/index.html");
    });
    
Cypress.Commands.add("selectProduct",productName=>{
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
          if($el.text().includes(productName)){
         cy.wrap($el).click();
             }
             }); 
})

Cypress.Commands.add("addProductToBasket", productName => {
   cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if($el.text() === productName) {
       cy.log($el.text())
        cy.get('.productcart').eq(index).click();
       }
      });

 
})
// Reusable method for inputting text into a text field
Cypress.Commands.add('typeInTextField', (selector, text) => {
    cy.get(selector).clear().type(text);
  });
  
  // Reusable method for selecting a value from a dropdown list
  Cypress.Commands.add('selectFromDropdown', (selector, value) => {
    cy.get(selector).select(value);
  });
  
  // Reusable method for clicking a button
  Cypress.Commands.add('clickButton', (selector) => {
    cy.get(selector).click();
  });
  
  // Reusable method for checking if an element is visible
  Cypress.Commands.add('checkIfVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });
  
  // Reusable method for checking if an element contains expected text
  Cypress.Commands.add('checkTextContent', (selector, text) => {
    cy.get(selector).should('contain', text);
  });

  



// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })