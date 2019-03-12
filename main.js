function add (x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

/**
 * 
 * @param {string} operator "add", "subtract", "multiply", "divide"
 * @param {float} x 
 * @param {float} y 
 */
function operate(operator, x, y) {
    if (operator == "add")
        return add(x, y);
    else if (operator == "subtract")
        return subtract(x, y);
    else if (operator == "multiply")
        return multiply(x, y);
    else if (operator == "divide")
        return divide(x, y);
}

/**
 * Clears the display, stored value, and stored operator.
 * Called when the clear button is pressed.
 */
function clear() {
    display.value = "";
    storedValue = 0;
    storedOperator = "";
}

/**
 * Clears the display without clearing stored value or stored operator.
 * Useful for after an operation is run.
 */
function displayClear() {
    display.value = "";
}

// set elements
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

// set global variables
let storedValue = 0;
let storedOperator = "";
let displayClearFlag = 0;

// buttons event listeners
buttons.forEach((button) => {

    // numbers
    if (button.getAttribute("class") == "number"){
        button.addEventListener("click", () => {
            if (displayClearFlag == 1) {
                displayClear();
                displayClearFlag = 0;
            }
            display.value += button.value;
        })
    }

    // decimal
    if (button.id == "decimal"){
        button.addEventListener("click", () => {
            if (display.value == ""){
                display.value += "0.";
            } else if (display.value.indexOf(".") == -1){ // only add . if there is not already a .
                display.value += ".";
            }
        });
    }

    // operators
    if (button.getAttribute("class") == "operator" & button.id != "equal"){
        button.addEventListener("click", () => {

            if (display.value != "") { // do nothing if user has not entered a number yet
                if (storedOperator != "") // if this is not a users first operation, then run the calculations before continuing
                    display.value = operate(storedOperator, storedValue, Number.parseFloat(display.value));
                storedValue = Number.parseFloat(display.value);
                displayClearFlag = 1;
                storedOperator = button.id;
            }
        })
    }

    // clear
    if (button.id == "clear") {
        button.addEventListener("click", () => {
            clear();
        });
    }

    // equal sign
    if (button.id == "equal") {
        button.addEventListener("click", () => {
            if (storedOperator != "") { // do nothing if user hits equal sign without first picking an operator
                display.value = operate(storedOperator, storedValue, Number.parseFloat(display.value));
                storedValue = Number.parseFloat(display.value);
                displayClearFlag = 1;
            }
        });
    }
});