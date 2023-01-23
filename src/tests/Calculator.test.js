import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button7;
  let addButton;
  let minusButton;
  let multiplyButton;
  let divideButton;
  let equalsButton;
  let clearButton;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button7 = container.getByTestId('number7');
    addButton = container.getByTestId('operator-add');
    minusButton = container.getByTestId('operator-subtract')
    multiplyButton = container.getByTestId('operator-multiply')
    divideButton = container.getByTestId('operator-divide')
    equalsButton = container.getByTestId('operator-equals')
    clearButton = container.getByTestId('clear')
    runningTotal = container.getByTestId('display');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  // calculator.add() - add 1 to 4 and get 5
  it('should be able to perform addition', () => {
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('5');
  })

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should be able to perform subtraction', () => {
    fireEvent.click(button7);
    fireEvent.click(minusButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should be able to perform multiplication', () => {
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15')
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should be able to perform divizsion', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(button1);
    fireEvent.click(button2);
    expect(runningTotal.textContent).toEqual('12')
  })

  // calculator.operatorClick() - chain multiple operations together
  it('should be able to perform multiple operations together', () => {
    fireEvent.click(button5);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('50')
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('should be able to clear running total without affecting the calculation', () => {
    fireEvent.click(button5);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    fireEvent.click(clearButton);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15')
  })
})

