import {
  CLEAR,
  DECIMAL_CHAR,
  EQUALS,
  ERROR,
  NUMPAD_BUTTON,
  OPERATOR_BUTTON,
  OPERATOR_CHAR,
} from "helper/constants";
import { buttonActionT } from "app/types";

export const buttonAction = (buttonValue: string): buttonActionT => {
  if (DECIMAL_CHAR.test(buttonValue)) {
    return {
      type: NUMPAD_BUTTON,
      payload: buttonValue,
    };
  } else if (OPERATOR_CHAR.test(buttonValue)) {
    return {
      type: OPERATOR_BUTTON,
      payload: buttonValue,
    };
  } else if (CLEAR === buttonValue) {
    return {
      type: CLEAR,
      payload: buttonValue,
    };
  } else if (EQUALS === buttonValue) {
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
};
