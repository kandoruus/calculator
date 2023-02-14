import { FunctionTree } from "classes/FunctionTree";

export type calculatorStateT = {
  func: FunctionTree
  funcDisplay: string
  display: string
  nextOp: string
  isdisplayingResults: boolean
};

export type buttonActionT = {
  type: string
  payload: string
}

export type actionType = buttonActionT

export type DispatchType = (args: actionType) => actionType