$operation = document.querySelector(".screen__operation");
$result = document.querySelector(".result");

$buttons = document.querySelectorAll(".number, .operator");
$clearButton = document.querySelector("#clear");
$deleteButton = document.querySelector("#delete");
$equalsButton = document.querySelector("#equals");

document.addEventListener("DOMContentLoaded", (event) => {
  $buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      append(event.target.innerHTML);
    });
  });

  $clearButton.addEventListener("click", clear);
  $deleteButton.addEventListener("click", removeChar);
  $equalsButton.addEventListener("click", compute);
});

function compute() {
  result = eval($operation.innerHTML);
  console.log(result);
}

function append(char) {
  if (!isNaN(char) || char === ".") {
    $operation.innerHTML += char;
  } else {
    $operation.innerHTML += ` ${char} `;
  }
}

function clear() {
  $operation.innerHTML = "";
  $result.innerHTML = "0";
}

function removeChar() {
  const lastChar = $operation.innerHTML.length - 1;
  const newOperations = $operation.innerHTML.slice(0, lastChar).trim();
  $operation.innerHTML = newOperations;
}
