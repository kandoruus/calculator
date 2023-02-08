import { calcActionT } from "./types";

export const buttonAction = (buttonValue: string):calcActionT => {
  return {
    type: buttonValue,
  }
}