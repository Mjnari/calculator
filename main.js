const add = function (x, y) {
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

function operate(operator, x, y) {
    if (operator == "+")
        return add(x, y);
    else if (operator == "-")
        return subtract(x, y);
    else if (operator == "*")
        return multiply(x, y);
    else if (operator == "/")
        return divide(x, y);
}

// set elements
const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let displayValue = "";

// buttons event listeners
buttons.forEach((button) => {
    // numbers
    if (button.parentElement.parentElement.id == "numbers")
        button.addEventListener("click", () => {
            display.value += button.id;
            displayValue += button.id;
        })

    // operators
    if (button.parentElement.id == "operators")
        button.addEventListener("click", () => {
            // do nothing if user has not entered a number yet
            if (displayValue != "") {
                console.log(button.id)
                switch(button.id) {
                    case "add":
                    case "subtract":
                    case "multiply":
                    case "divide":
                }
            }
        })
});