// script.js

document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('calculator-screen');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                // Clear the screen and reset variables
                currentInput = '';
                operator = '';
                previousInput = '';
                screen.innerText = '0';
            } else if (button.id === 'equal') {
                // Perform calculation when '=' is pressed
                if (currentInput && previousInput && operator) {
                    currentInput = eval(previousInput + operator + currentInput);
                    screen.innerText = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (button.classList.contains('operator')) {
                // Store the operator and move current input to previous input
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                // Append number or decimal to the current input
                currentInput += value;
                screen.innerText = currentInput;
            }
        });
    });
});
