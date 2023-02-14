import { BLANK } from "helper/constants";

export class FunctionNode {
  value: string;
  private _parent: FunctionNode | null;
  private _leftChild: FunctionNode | null;
  private _rightChild: FunctionNode | null;

  constructor(initValue?: string, initLeftChild?: FunctionNode, initRightChild?: FunctionNode) {
    this._parent = null;
    this.value = initValue ?  initValue : BLANK;
    this._leftChild = initLeftChild ? this.addChild(initLeftChild) : null;
    this._rightChild = initRightChild ? this.addChild(initRightChild) : null;
    this.addChild = this.addChild.bind(this);
  }

  private addChild(newChild: FunctionNode | null): FunctionNode | null {
    if(newChild) newChild.parent = this;
    return newChild;
  }

  get parent():FunctionNode | null {
    return this._parent;
  }
  
  private set parent(newParent: FunctionNode | null) {
    this._parent = newParent;
  }

  set leftChild(newChild: FunctionNode | null) {
    if(newChild) newChild.parent = this;
    this._leftChild = newChild;
  }

  get leftChild(): FunctionNode | null {
    return this._leftChild;
  }

  set rightChild(newChild: FunctionNode | null) {
    if(newChild) newChild.parent = this;
    this._rightChild = newChild;
  }

  get rightChild(): FunctionNode | null {
    return this._rightChild;
  }

}
