import { calculatorStateT } from "app/types";
import { FunctionTree } from "classes/FunctionTree";

export const CLEAR = "AC";
export const DIVIDE = "/";
export const MULTIPLY = "×";
export const SUBTRACT = "-";
export const ADD = "+";
export const EQUALS = "=";
export const DECIMAL = ".";
export const ZERO = "0";
export const ONE = "1";
export const TWO = "2";
export const THREE = "3";
export const FOUR = "4";
export const FIVE = "5";
export const SIX = "6";
export const SEVEN = "7";
export const EIGHT = "8";
export const NINE = "9";
export const BLANK = "";
export const DECIMAL_CHAR = /^[.\d]$/;
export const NUMBER_REGEXP =
  /^-?0$|^-?0[.]\d*$|^-?[1-9]\d*$|^-?[1-9]\d*[.]\d*$/;
export const OPERATOR_CHAR = /^[+\-×/]$/;
export const ERROR = "ERROR";
export const NUMPAD_BUTTON = "NUMPADBUTTON";
export const OPERATOR_BUTTON = "OPERATORBUTTON";
export const OPERATOR_ORDER: string[] = [
  MULTIPLY,
  DIVIDE,
  SUBTRACT,
  ADD,
  BLANK,
];

export const INITSTATE: calculatorStateT = {
  func: new FunctionTree(),
  funcDisplay: BLANK,
  display: ZERO,
  nextOp: BLANK,
  isdisplayingResults: false,
};

export const buttonProps: { id: string; className: string; value: string }[] = [
  {
    id: "clear",
    className: "row1 col1",
    value: CLEAR,
  },
  {
    id: "divide",
    className: "row1 col3",
    value: DIVIDE,
  },
  {
    id: "multiply",
    className: "row1 col4",
    value: MULTIPLY,
  },
  {
    id: "seven",
    className: "row2 col1 numPad",
    value: SEVEN,
  },
  {
    id: "eight",
    className: "row2 col2 numPad",
    value: EIGHT,
  },
  {
    id: "nine",
    className: "row2 col3 numPad",
    value: NINE,
  },
  {
    id: "subtract",
    className: "row2 col4",
    value: SUBTRACT,
  },
  {
    id: "four",
    className: "row3 col1 numPad",
    value: FOUR,
  },
  {
    id: "five",
    className: "row3 col2 numPad",
    value: FIVE,
  },
  {
    id: "six",
    className: "row3 col3 numPad",
    value: SIX,
  },
  {
    id: "add",
    className: "row3 col4",
    value: ADD,
  },
  {
    id: "one",
    className: "row4 col1 numPad",
    value: ONE,
  },
  {
    id: "two",
    className: "row4 col2 numPad",
    value: TWO,
  },
  {
    id: "three",
    className: "row4 col3 numPad",
    value: THREE,
  },
  {
    id: "zero",
    className: "row5 col1 numPad",
    value: ZERO,
  },
  {
    id: "decimal",
    className: "row5 col3 numPad",
    value: DECIMAL,
  },
  {
    id: "equals",
    className: "row4 col4",
    value: EQUALS,
  },
];
