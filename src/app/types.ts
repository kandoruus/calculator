export type functionObj = {
  operand1: string
  operand2: string | functionObj
  operator: string | null
}

export type calculatorStateT = {
  func: functionObj
  display: string
};

export type calcActionT = {
  type: string
};

export type DispatchType = (args: calcActionT) => calcActionT