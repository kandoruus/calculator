import { stringify } from "querystring";
import { ADD, BLANK, DIVIDE, ERROR, MULTIPLY, NUMBER_REGEXP, OPERATOR_CHAR, OPERATOR_ORDER, SUBTRACT, ZERO } from "../helper/constants";
import { FunctionNode } from "./FunctionNode";


export class FunctionTree {
  private startNode: FunctionNode;
  private endNode: FunctionNode;

  constructor() {
    this.startNode = new FunctionNode();
    this.endNode = new FunctionNode();
    this.startNode.rightChild = this.endNode;
    this.isNumber = this.isNumber.bind(this);
    this.addNumberToTree = this.addNumberToTree.bind(this);
    this.addOperatorToTree = this.addOperatorToTree.bind(this);
    this.isOpInOrder = this.isOpInOrder.bind(this);
    this.add = this.add.bind(this);
  }

  private isOpInOrder (op: string, node: FunctionNode) {
    return OPERATOR_ORDER.indexOf(op) <= OPERATOR_ORDER.indexOf(node.value);
  }

  private isOperator(value: string): boolean {
    return OPERATOR_CHAR.test(value);
  }

  private isNumber(value: string): boolean {
    return NUMBER_REGEXP.test(value);
  }

  private addNumberToTree(num: string, node: FunctionNode) {
    if(!node.leftChild) {
      node.leftChild = new FunctionNode(num);
    } else {
      node.rightChild = new FunctionNode(num);
      this.endNode = node.rightChild;
    }
  }

  private addOperatorToTree(op: string, parentNode: FunctionNode, node: FunctionNode) {
    if(node.value === BLANK) {
      node.value = op;
    } else if(this.isOpInOrder(op, parentNode)){
      parentNode.rightChild = new FunctionNode(op, node);
      this.endNode = parentNode.rightChild;
    } else if(parentNode.parent) {
      this.addOperatorToTree(op, parentNode.parent, parentNode);
    } else {
      console.error("Node is orphaned: " + parentNode);
    }
  }

  add(value: string) {
    if(this.isNumber(value)) {
      this.addNumberToTree(value, this.endNode);
    } else if(this.isOperator(value) && this.endNode.parent) {
      this.addOperatorToTree(value, this.endNode.parent, this.endNode);
    } else {
      console.error("Invalid input to function tree: " + value);
    }
  }

  private mathOnStrings(op: string, a: string, b: string): string {
    if(a === ERROR || b === ERROR) {
      return ERROR;
    } else if(op === ADD) {
      return (parseFloat(a) + parseFloat(b)).toString();
    } else if(op === SUBTRACT) {
      return (parseFloat(a) - parseFloat(b)).toString();
    } else if(op === MULTIPLY) {
      return (parseFloat(a) * parseFloat(b)).toString();
    } else if(op === DIVIDE) {
      return b === ZERO ? ERROR : (parseFloat(a) / parseFloat(b)).toString();
    } else if(op === BLANK) {
      return a;
    } else {
      return ERROR;
    }
  }

  private recursiveEval(node: FunctionNode): string {
    if(NUMBER_REGEXP.test(node.value)) {
      return node.value;
    } else if(node.leftChild && node.rightChild) {
      return this.mathOnStrings(node.value, this.recursiveEval(node.leftChild), this.recursiveEval(node.rightChild));
    } else if(node.leftChild) {
      return this.recursiveEval(node.leftChild);
    } else {
      console.error(node);
      return ERROR;
    }
  }

  evaluate(): string {
    return this.startNode.rightChild ? this.recursiveEval(this.startNode.rightChild) : ERROR;
  }

  clear(): FunctionTree {
    this.startNode.rightChild = new FunctionNode();
    this.endNode = this.startNode.rightChild;
    return this;
  }
}