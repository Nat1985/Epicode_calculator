const buttons = document.getElementsByClassName("button");
const displayValue = document.getElementById("display");
let firstValue = "";
let secondValue = "";
let operator;
let step = 1;
let result;

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickEvent);
}

function clickEvent() {
    if (this.textContent == "AC") {
        init();
        displayValue.textContent = "0";
    } else {
        for(i = 0; i < 10; i++) {
            if (step == 1 && i == this.textContent) {
                firstValue = firstValue + this.textContent;
                displayValue.textContent = firstValue; 
            } else if (step == 1 && i !== this.textContent) {
                if (this.textContent == "+" || this.textContent == "-" || this.textContent == "*" || this.textContent =="/") {
                    firstValue = firstValue + (this.textContent);
                    displayValue.textContent = firstValue; 
                    operator = this.textContent;
                    step++;
                }
            } else if (step == 2 && i == this.textContent) {
                secondValue = secondValue + this.textContent;
                displayValue.textContent = firstValue + secondValue;
            } else if (step == 2 && this.textContent == "=") {
                switch (operator) {
                    case "+":
                        result = parseInt(firstValue) + parseInt(secondValue);
                        displayValue.textContent = result;
                        break;
                    case "-":
                        result = parseInt(firstValue) - parseInt(secondValue);
                        displayValue.textContent = result;
                        break;
                    case "*":
                        result = parseInt(firstValue) * parseInt(secondValue);
                        displayValue.textContent = result;
                        break;
                    case "/":
                        result = parseInt(firstValue) / parseInt(secondValue);
                        displayValue.textContent = result;
                        break;
                }
                init();
            }
            
        }
    }
}

function init() {
    firstValue = "";
    secondValue= "";
    operator = "";
    step = 1;
    result = null;
}