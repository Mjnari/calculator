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

// set elements (is elements the right word?)
const buttons = document.querySelectorAll("button");
let display = document.querySelector("#display");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.parentElement.parentElement.id == "numbers")
            display.value += button.id;
    })
});