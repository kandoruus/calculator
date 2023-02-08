export const CLEAR:string = "AC";
export const DIVIDE:string = "/";
export const MULTIPLY:string = "X";
export const SUBTRACT:string = "-";
export const ADD:string = "+";
export const EQUALS:string = "=";
export const DECIMAL:string = ".";
export const ZERO:string = "0";
export const ONE:string = "1";
export const TWO:string = "2";
export const THREE:string = "3";
export const FOUR:string = "4";
export const FIVE:string = "5";
export const SIX:string = "6";
export const SEVEN:string = "7";
export const EIGHT:string = "8";
export const NINE:string = "9";
export const BLANK:string = "";

export const buttonProps: { id: string, className: string, value: string }[] = [
  {
    id: "clear",
    className: "row1 col1",
    value: CLEAR
  },
  {
    id: "divide",
    className: "row1 col3",
    value: DIVIDE
  },
  {
    id: "multiply",
    className: "row1 col4",
    value: MULTIPLY
  },
  {
    id: "seven",
    className: "row2 col1 numPad",
    value: SEVEN
  },
  {
    id: "eight",
    className: "row2 col2 numPad",
    value: EIGHT
  },
  {
    id: "nine",
    className: "row2 col3 numPad",
    value: NINE
  },
  {
    id: "subtract",
    className: "row2 col4",
    value: SUBTRACT
  },
  {
    id: "four",
    className: "row3 col1 numPad",
    value: FOUR
  },
  {
    id: "five",
    className: "row3 col2 numPad",
    value: FIVE
  },
  {
    id: "six",
    className: "row3 col3 numPad",
    value: SIX
  },
  {
    id: "add",
    className: "row3 col4",
    value: ADD
  },
  {
    id: "one",
    className: "row4 col1 numPad",
    value: ONE
  },
  {
    id: "two",
    className: "row4 col2 numPad",
    value: TWO
  },
  {
    id: "three",
    className: "row4 col3 numPad",
    value: THREE
  },
  {
    id: "zero",
    className: "row5 col1 numPad",
    value: ZERO
  },
  {
    id: "decimal",
    className: "row5 col3 numPad",
    value: DECIMAL
  },
  {
    id: "equals",
    className: "row4 col4",
    value: EQUALS
  }
];