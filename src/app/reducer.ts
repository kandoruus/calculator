import { EQUALS, NUMPAD_BUTTON, OPERATOR_BUTTON, ERROR, CLEAR, INITSTATE } from "helper/constants";
import { handleClearAct, handleEqualsAct, handleErrorAct, handleNumPadInputAct, handleOperatorInputAct } from "helper/functions";
import { calculatorStateT, actionType } from "app/types";

export const reducer = (state: calculatorStateT = INITSTATE, action: actionType ):calculatorStateT =>  {
  switch(action.type) {
    case NUMPAD_BUTTON:
      return handleNumPadInputAct(state, action.payload);
    case OPERATOR_BUTTON:
      return handleOperatorInputAct(state, action.payload);
    case CLEAR:
      return handleClearAct();
    case EQUALS: 
      return handleEqualsAct(state);
    case ERROR:
      return handleErrorAct(state, action.payload);
    default:
      return state;
  }
}