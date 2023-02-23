class Autostore_Haircare_PO{
  addHaircareproduct(){ 
     globalThis.data.productName.forEach(function(element) {
        cy.addProductToBasket(element)
       // debugger;

     })
         cy.get('.dropdown-toggle > .fa').click().debug();
}
    
    }
    export default Autostore_Haircare_PO;