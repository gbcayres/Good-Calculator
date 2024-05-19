import Calculator from "./calculator.mjs";

const calculator = new Calculator();

function handleNumberClick(num) {
  calculator.appendNumber(num);
  updateScreen();
}

function handleOperatorClick(operator) {
  calculator.setOperator(operator);
  updateScreen();
}

function handleEqualsClick() {
  try {
    calculator.compute();
    updateScreen();
  } catch (error) {
    console.log(error.message);
  }
}

function handleClearClick() {
  calculator.reset();
  updateScreen();
}

function handleDeleteClick() {
  calculator.deleteLast();
  updateScreen();
}

function updateScreen() {
  $result.innerHTML = calculator.result;
  $operation.innerHTML = calculator.getOperation();
  console.log(calculator);
}

document.addEventListener("DOMContentLoaded", (event) => {
  $numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleNumberClick(button.innerHTML);
    });
  });

  $operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      handleOperatorClick(button.innerHTML);
    });
  });

  $equalsButton.addEventListener("click", handleEqualsClick);
  $clearButton.addEventListener("click", handleClearClick);
  $deleteButton.addEventListener("click", handleDeleteClick);
});

const $operation = document.querySelector(".screen__operation");
const $result = document.querySelector(".result");

const $numButtons = document.querySelectorAll(".number");
const $operationButtons = document.querySelectorAll(".operator");
const $clearButton = document.querySelector("#clear");
const $deleteButton = document.querySelector("#delete");
const $equalsButton = document.querySelector("#equals");
