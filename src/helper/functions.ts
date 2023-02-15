import { calculatorStateT } from "app/types";
import {
  BLANK,
  DECIMAL,
  EQUALS,
  INITSTATE,
  NUMBER_REGEXP,
  OPERATOR_CHAR,
  SUBTRACT,
  ZERO,
} from "helper/constants";

export const handleNumPadInputAct = (
  state: calculatorStateT,
  numPadChar: string
): calculatorStateT => {
  if (state.isdisplayingResults && numPadChar === DECIMAL) {
    return {
      ...state,
      display: "0.",
      funcDisplay: BLANK,
      isdisplayingResults: false,
    };
  } else if (state.isdisplayingResults) {
    return {
      ...state,
      display: numPadChar,
      funcDisplay: BLANK,
      isdisplayingResults: false,
    };
  } else if (state.nextOp !== BLANK) {
    state.func.add(state.nextOp);
    return {
      ...state,
      funcDisplay: state.funcDisplay.concat(state.nextOp),
      display:
        numPadChar === DECIMAL ? "-0." : state.display.concat(numPadChar),
      nextOp: BLANK,
    };
  } else if (state.display === ZERO && numPadChar !== DECIMAL) {
    return {
      ...state,
      display: numPadChar,
    };
  } else if (state.display === "-0" && numPadChar !== DECIMAL) {
    return {
      ...state,
      display: SUBTRACT.concat(numPadChar),
    };
  } else if (state.display.includes(".") && numPadChar === DECIMAL) {
    return state;
  } else if (OPERATOR_CHAR.test(state.display)) {
    state.func.add(state.display);
    return {
      ...state,
      funcDisplay: state.funcDisplay.concat(state.display),
      display: numPadChar,
    };
  } else {
    return {
      ...state,
      display: state.display.concat(numPadChar),
    };
  }
};

export const handleOperatorInputAct = (
  state: calculatorStateT,
  OperationChar: string
): calculatorStateT => {
  if (state.isdisplayingResults) {
    state.func.add(state.display);
    return {
      ...state,
      display: OperationChar,
      funcDisplay: state.display,
      isdisplayingResults: false,
      nextOp: BLANK,
    };
  } else if (NUMBER_REGEXP.test(state.display)) {
    state.func.add(state.display);
    return {
      ...state,
      funcDisplay: state.funcDisplay.concat(state.display),
      display: OperationChar,
      nextOp: BLANK,
    };
  } else if (OperationChar === SUBTRACT && state.nextOp === BLANK) {
    return {
      ...state,
      display: OperationChar,
      nextOp: state.display,
    };
  } else {
    return {
      ...state,
      display: OperationChar,
      nextOp: BLANK,
    };
  }
};

export const handleClearAct = (): calculatorStateT => {
  return INITSTATE;
};

export const handleEqualsAct = (state: calculatorStateT): calculatorStateT => {
  if (state.isdisplayingResults) {
    return state;
  } else {
    state.func.add(state.display);
    const results = state.func.evaluate();
    return {
      ...state,
      func: state.func.clear(),
      display: results,
      funcDisplay: state.funcDisplay.concat(state.display + EQUALS),
      isdisplayingResults: true,
    };
  }
};

export const handleErrorAct = (
  state: calculatorStateT,
  errorMessage: string
): calculatorStateT => {
  console.error(errorMessage);
  return state;
};
