export default class Calculator {
  constructor() {
    this.operation = {
      leftOperand: "",
      operator: "",
      rightOperand: "",
    };

    this.result = "";
  }

  appendNumber(num) {
    if (this.operation.operator) {
      this.operation.rightOperand += num;
    } else {
      this.operation.leftOperand += num;
    }
  }

  setOperator(operator) {
    if (!this.operation.leftOperand) return;

    if (this.operation.rightOperand) {
      this.compute();
    }

    if (this.operation.operator) {
      this.operation.operator = operator;
      this.operation.rightOperand = "";
      return;
    }

    this.operation.operator = operator;
  }

  compute() {
    const leftOperand = parseFloat(this.operation.leftOperand);
    const rightOperand = parseFloat(this.operation.rightOperand);

    if (this.validOperands()) {
      this.doProperOperation(leftOperand, rightOperand);
      this.operation.leftOperand = this.result;
    } else {
      throw new Error("Please, check the operands.");
    }
  }

  validOperands() {
    return this.operation.leftOperand && this.operation.rightOperand;
  }

  doProperOperation(leftOperand, rightOperand) {
    switch (this.operation.operator) {
      case "+":
        this.result = leftOperand + rightOperand;
        break;
      case "-":
        this.result = leftOperand - rightOperand;
        break;
      case "x":
        this.result = leftOperand * rightOperand;
        break;
      case "/":
        this.result = leftOperand / rightOperand;
        break;
      case "**":
        this.result = leftOperand ** rightOperand;
        break;
      case "%":
        this.result = (leftOperand * rightOperand) / 100;
        break;
      default:
        throw new Error("Invalid operator.");
    }
  }

  reset() {
    this.operation = {
      leftOperand: "",
      operator: "",
      rightOperand: "",
    };

    this.result = "0";
  }

  getOperation() {
    return `${this.operation.leftOperand} ${this.operation.operator} ${this.operation.rightOperand}`;
  }

  deleteLast() {
    if (this.operation.rightOperand) {
      this.operation.rightOperand = "";
    } else if (this.operation.operator) {
      this.operation.operator = "";
    } else if (this.operation.leftOperand) {
      this.operation.leftOperand = "";
    }
  }
}
