const defaultResault = 0;
let currentResult = defaultResault;


// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}



// Generates and writes calculation log
function createAndWriteLogOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator}        ${calcNumber}`;

  outputResult(currentResult, calcDescription);
}


//  function for +
function add(num1, num2) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLogOutput ('+',initialResult,enteredNumber)
}

// function for -
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLogOutput("-", initialResult, enteredNumber);
}
// function for *
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLogOutput("*", initialResult, enteredNumber);
}

// function for /
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLogOutput("/", initialResult, enteredNumber);
}

// add event for buttons
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);