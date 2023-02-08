import { functionObj, calculatorStateT } from "../app/types";
import { ZERO, DECIMAL, BLANK } from "./constants";

const updateOperandString = (inputNum: string, operandString: string): string => {
  if(operandString === ZERO && inputNum !== DECIMAL) {
    return inputNum;
  } else if((operandString === BLANK || operandString === ZERO) && inputNum === DECIMAL) {
    return ZERO + DECIMAL;
  } else if(inputNum === DECIMAL) {
    return operandString.includes(DECIMAL) ? operandString : operandString.concat(inputNum);
  } else {
    return operandString.concat(inputNum);
  }
}

const updateOperand = (inputNum: string, currentOperand: functionObj | string): functionObj | string => {
  if(typeof currentOperand === "string") {
    return updateOperandString(inputNum, currentOperand);
  } else {
    return handleOperandInput(inputNum, currentOperand);
  }
}

export const handleOperandInput = (inputNum: string, currentFunction: functionObj): functionObj => {
  if(currentFunction.operator) {
    return {
      ...currentFunction,
      operand2: updateOperand(inputNum, currentFunction.operand2)
    };
  } else {
    return {
      ...currentFunction,
      operand1: updateOperandString(inputNum, currentFunction.operand1)
    };
  }
}

const addOperatorToString = (inputOp: string, operandString: string): functionObj | string => {
  if(operandString === BLANK) {
    return operandString;
  } else {
    return {
      operand1: operandString,
      operand2: BLANK,
      operator: inputOp
    }
  }
}

const addOperatorToOperand = (inputOp: string, currentOperand: functionObj | string): functionObj | string => {
  if(typeof currentOperand === "string") {
    return addOperatorToString(inputOp, currentOperand);
  } else {
    return handleOperatorInput(inputOp, currentOperand);
  }
}

export const handleOperatorInput = (inputOp: string, currentFunction: functionObj): functionObj => {
  if(currentFunction.operator) {
    return {
      ...currentFunction,
      operand2: addOperatorToOperand(inputOp, currentFunction.operand2)
    };
  } else {
    return {
      ...currentFunction,
      operator: inputOp
    };
  }
}

export const parseFunction = (currentState: calculatorStateT): calculatorStateT => {
  return {
    func: {
      operand1: BLANK,
      operand2: BLANK,
      operator: null
    },
    display: ZERO
  }
}

export const functionToString = (func: functionObj): string => {
  if(func.operator) {
    return (typeof func.operand2 === "string") ? func.operand1.concat(func.operator, func.operand2) : func.operand1.concat(func.operator, functionToString(func.operand2));
  } else {
    return func.operand1
  }
}