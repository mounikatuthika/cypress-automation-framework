class Autostore_Homepage_PO{
    visitHomepage(){
        cy.visit("https://automationteststore.com/");
       
    }
    clickOn_Haircare_Link(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
    }
    export default Autostore_Homepage_PO;