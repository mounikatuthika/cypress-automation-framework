describe("Handle date pickers via webdriveruni",() =>{
    it("select date from the datepicker",()=>{
    

   cy.visit("http://www.webdriveruniversity.com")
   cy.get('#datepicker').invoke('removeAttr','target').click({force:true})
   cy.get('#datepicker').click();
//    let date=new Date();
// date.setDate(date.getDate())
// cy.log(date.getDate())//get current date

// let date2=new Date();
// date2.setDate(date.getDate()+4)
// cy.log(date2.getDate())//get current date +addition day 4

var date=new Date();
date.setDate(date.getDate()+460);
var futureYear=date.getFullYear();
var futureMonth=date.toLocaleString("default",{month:"long"});
var futureDay=date.getDate();
cy.log("Future Year to select:"+futureYear);
cy.log("Future Month to select:"+futureMonth);
cy.log("Future Day to select:"+futureDay);
function selectMonthAndYear(){
    cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
    if(!currentDate.text().includes(futureYear)){
    cy.get('.next').first().click();
    selectMonthAndYear();
    }
    }).then(()=>{

        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
        if(!currentDate.text().includes(futureMonth)){
        cy.get('.next').first().click();
        selectMonthAndYear();
        }
        })   
    } )
}
function selectFutureDay(){
    cy.get('[class="day"]').contains(futureDay).click();
    }

selectMonthAndYear();
selectFutureDay();
})

})