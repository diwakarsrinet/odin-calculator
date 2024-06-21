// Variables for storage
let firstValue = "", secondValue = "", result = 0;
let firstOperator = "", secondOperator = "";
let equalPressed = 0;
let decimalValues = "0123456789";
let operatorValues = "+-/*";

// Function to clear current display
function clearAll() {
    const inputElement = document.querySelector("#displayInput");
    const resultElement = document.querySelector("#displayResult");
    inputElement.value = "", resultElement.value = "";
    firstValue = "", secondValue = "", result = 0;
    firstOperator = "", secondOperator = "";
}

// Pick operands and operators
const btnPressed = document.querySelectorAll(".btnCal");
btnPressed.forEach(btn => {
    btn.addEventListener("click", () => checkButtonType(btn.innerHTML));
});

// Function to check button type and call relevant functions
function checkButtonType(btnValue) {
    if (decimalValues.includes(btnValue)) btnNumPressed(btnValue);
    else if (operatorValues.includes(btnValue)) btnOpPressed(btnValue);
    else if (btnValue===".") dotPressed();
    else if (btnValue === "AC") clearAll();
    else if (btnValue === "=") {
        showResult();
        equalPressed = 1;
    }
}

// Input numbers on numeral button clicks
function btnNumPressed(btn) {
    const inputElement = document.querySelector("#displayInput");
    if(equalPressed === 1) {
        firstValue = "";
        firstValue += btn;
        equalPressed = 0;
    }
    else if(firstOperator === ""){
        firstValue += btn;
    }
    else {
        secondValue += btn;
    }
    inputElement.value = firstValue + firstOperator + secondValue;
}

// Operator button pressed
function btnOpPressed(btn) {
    const inputElement = document.querySelector("#displayInput");
    if(firstOperator === "") {
        firstOperator = btn;
        inputElement.value = firstValue + firstOperator + secondValue;
    }
    
    else if (secondOperator === "") {
        secondOperator = btn;
        showResult();
        inputElement.value = firstValue + firstOperator + secondValue;
    }
}

// Decimal point (dot) pressed
function dotPressed() {
    const inputElement = document.querySelector("#displayInput");
    if (!(firstValue.includes(".")) && firstOperator === "") firstValue += ".";
    else if (!(secondValue.includes(".")) && firstOperator !== "") secondValue += ".";
    inputElement.value = firstValue + firstOperator + secondValue;
}

// Show result by calling Operate function when = or second operator button is pressed and pass on two numbers & the operator
function showResult() {
    const outputElement = document.querySelector("#displayResult");
    result = operate(firstValue,firstOperator,secondValue);
    result = Math.round(result*100)/100;
    outputElement.value = result; 
    firstValue = result.toString();
    firstOperator = secondOperator;
    secondOperator = "", secondValue = "", result = "";
}


function operate (x,y,z) {
    switch(y) {
        case "+": 
            return (parseFloat(x) + parseFloat(z))
            break;
        case "-": 
            return (parseFloat(x) - parseFloat(z));
        break;
        case "*": 
            return (parseFloat(x) * parseFloat(z));
        break;
        case "/": 
            return (parseFloat(x) / parseFloat(z));
    }

}

