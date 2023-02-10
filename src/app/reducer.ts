import { EQUALS, NUMPADBUTTON, OPERATORBUTTON, ERROR, CLEAR, INITSTATE } from "../helper/constants";
import { handleClearAct, handleEqualsAct, handleErrorAct, handleNumPadInputAct, handleOperatorInputAct } from "../helper/functions";
import { calculatorStateT, actionType } from "./types";

export const reducer = (state: calculatorStateT = INITSTATE, action: actionType ):calculatorStateT =>  {
  switch(action.type) {
    case NUMPADBUTTON:
      return handleNumPadInputAct(state, action.payload);
    case OPERATORBUTTON:
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