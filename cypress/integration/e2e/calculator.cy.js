describe("Calculator", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // Do the number buttons update the display of the running total?
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  // Do the arithmetical operations update the display with the result of the operation?
  it('should be able to perform addition', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to perform subtraction', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to perform multiplication', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25')
  })

  it('should be able to perform division', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1')
  })


  // Can multiple operations be chained together?
  it('should be able to perform multiple operations chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '13')
  })


  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should be able to handle operations with negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  // xit('should be able to handle operations with decimals', () => {
  //   cy.get('#number7').click();
  //   cy.get('#decimal').click();
  //   cy.get('#number3').click();
  //   cy.get('#operator_add').click();
  //   cy.get('#number0').click();
  //   cy.get('#decimal').click();
  //   cy.get('#number7').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', '8')
  // })

  it('should be able to handle operations with decimals', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.33')
  })


  it('should be able to handle operations with large numbers', () => {
    cy.get('#number7').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15000')
  })


  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should return an error when dividing by 0', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })
})
