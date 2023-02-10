import { CLEAR, DECIMALCHAR, EQUALS, ERROR, NUMPADBUTTON, OPERATORBUTTON, OPERATORCHAR } from "../helper/constants";
import { buttonActionT } from "./types";

export const buttonAction = (buttonValue: string):buttonActionT => {
  if(DECIMALCHAR.test(buttonValue)){
    return {
      type: NUMPADBUTTON,
      payload: buttonValue,
    };
  } else if(OPERATORCHAR.test(buttonValue)){
    return {
      type: OPERATORBUTTON,
      payload: buttonValue,
    };
  } else if(CLEAR === buttonValue){
    return {
      type: CLEAR,
      payload: buttonValue,
    };
  } else if(EQUALS === buttonValue){
    return {
      type: EQUALS,
      payload: buttonValue,
    };
  } else {
    return {
      type: ERROR,
      payload: "No valid action type for buttonValue: " + buttonValue,
    };
  }
} 