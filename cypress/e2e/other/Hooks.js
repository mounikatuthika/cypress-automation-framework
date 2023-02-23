describe('Hooks', () => {
    before(() => {
        cy.log("runs befor all tests in the block")
    });
    after(() => {
        cy.log("runs after all tests in the block")
    });
    beforeEach(() => {
        cy.log("runs befor each test in the block")
    });
    afterEach(() => {
        cy.log("runs after each test in the block")
    });
    it('Test1', () => {
        cy.log("iam test1")
    });
    it('Test2', () => {
        cy.log("iam test2")
    });
});