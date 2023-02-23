import Autostore_Homepage_PO from '../../support/pageObjects/automationteststore/Autostore_Homepage_PO';
import Autostore_Haircare_PO from '../../support/pageObjects/automationteststore/Autostore_Haircare_PO';
/// <reference types="cypress" /> 
describe("Add multiple items to basket", () => {
    const homepage=new Autostore_Homepage_PO();
    const haircare=new Autostore_Haircare_PO();
    
    before(function () {
        cy.fixture("products").then(function (data) {
             globalThis.data = data;
            });}); 
            beforeEach(function () {
                // cy.clearLocalStorage();
                //  cy.clearCookies();

                homepage.visitHomepage();
                homepage.clickOn_Haircare_Link();
               
            });
            it("Add specific items to basket", () => {
               haircare.addHaircareproduct();
                    });
                });