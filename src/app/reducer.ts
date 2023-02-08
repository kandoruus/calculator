import { ZERO, ONE, TWO, EIGHT, FIVE, FOUR, NINE, SEVEN, SIX, THREE, DECIMAL, CLEAR, MULTIPLY, DIVIDE, SUBTRACT, ADD, EQUALS, BLANK } from "../helper/constants";
import { handleOperandInput, handleOperatorInput, parseFunction } from "../helper/functions";
import { calculatorStateT, calcActionT } from "./types";

const initState: calculatorStateT = {
  func: {
    operand1: BLANK,
    operand2: BLANK,
    operator: null
  },
  display: ZERO
}

export const reducer = (state: calculatorStateT = initState, action: calcActionT ):calculatorStateT =>  {
  switch(action.type) {
    case ZERO:
    case ONE:
    case TWO:
    case THREE:
    case FOUR:
    case FIVE:
    case SIX:
    case SEVEN:
    case EIGHT:
    case NINE:
    case DECIMAL:
      return {
        ...state,
        func: handleOperandInput(action.type, state.func)
      }
    case CLEAR:
      return initState;
    case MULTIPLY:
    case DIVIDE:
    case ADD:
    case SUBTRACT:
      return {
        ...state,
        func: handleOperatorInput(action.type, state.func)
      }
    case EQUALS:
      return parseFunction(state);
    default: 
      return state;
  }
}