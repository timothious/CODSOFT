const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
}

function updateDisplay(value) {
    display.value = value;
}

function calculate() {
    let result;
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    updateDisplay(result);
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
}

document.querySelectorAll('.keys button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value >= '0' && value <= '9') {
            currentInput += value;
            updateDisplay(currentInput);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput !== '') {
                firstOperand = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            }
        } else if (value === '=') {
            if (firstOperand !== null && currentInput !== '') {
                calculate();
            }
        } else if (value === 'CL') {
            clearDisplay();
        }
    });
});
