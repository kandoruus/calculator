export type functionObj = {
  operand1: string
  operand2: string | functionObj
  operator: string | null
  parent: functionObj | null
}

export type calculatorStateT = {
  func: functionObj
  display: string
};

export type buttonActionT = {
  type: string
  payload: string
}

export type actionType = buttonActionT

export type DispatchType = (args: actionType) => actionType