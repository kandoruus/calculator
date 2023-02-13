import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonAction } from "../app/action-creators";
import { DispatchType, calculatorStateT } from "../app/types";
import { buttonProps } from "../helper/constants";


export const Calculator: React.FC = ():React.ReactElement => {
  const dispatch: DispatchType = useDispatch();
  const outputDisplay: string = useSelector((state: calculatorStateT) => state.display);
  const functionDisplay: string = useSelector((state: calculatorStateT) => state.funcDisplay);
  const nextOpDisplay: string = useSelector((state: calculatorStateT) => state.nextOp);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(buttonAction((event.target as HTMLButtonElement).value));
  }

  return (
    <div id="calculator">
      <div id="formulaScreen">{functionDisplay + nextOpDisplay + outputDisplay}</div>
      <div id="display">{outputDisplay}</div>
      <div id="buttonWrapper">
        {buttonProps.map(button => <button id={button.id} className={button.className} onClick={handleClick} value={button.value} key={button.id}>{button.value}</button>)}
      </div>
    </div>
  );
}