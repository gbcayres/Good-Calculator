export default class Calculator {
  constructor() {
    (this.leftOperand = ""),
      (this.operator = ""),
      (this.rightOperand = ""),
      (this.result = "");
  }

  appendNumber(num) {
    if (this.operator) {
      this.rightOperand += num;
    } else {
      this.leftOperand += num;
    }
  }

  setOperator(operator) {
    if (!this.leftOperand) return;

    this.operator = operator;
  }

  compute() {
    const leftOperand = parseFloat(this.leftOperand);
    const rightOperand = parseFloat(this.rightOperand);

    if (this.validOperands()) {
      this.doProperOperation(leftOperand, rightOperand);
      this.leftOperand = this.result;
      this.rightOperand = "";
    } else {
      throw new Error("Please, check the operands.");
    }
  }

  validOperands() {
    return this.leftOperand && this.rightOperand;
  }

  doProperOperation(leftOperand, rightOperand) {
    switch (this.operator) {
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
    (this.leftOperand = ""),
      (this.operator = ""),
      (this.rightOperand = ""),
      (this.result = "0");
  }

  deleteLast() {
    if (this.rightOperand) {
      this.rightOperand = "";
    } else if (this.operator) {
      this.operator = "";
    } else if (this.leftOperand) {
      this.leftOperand = "";
    }
  }

  getOperation() {
    return `${this.leftOperand} ${this.operator} ${this.rightOperand}`;
  }
}
