// Get elements from the DOM
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// Add event for each buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'point' && display.textContent.includes(',')) { 
            return
        }
        // If the button is C, remove all display contents
        if (button.id === 'c') {
            display.textContent = '0';
        }
        // If the button is delete, remove the last display character
        else if (button.id === 'delete') {
            display.textContent = display.textContent.slice(0, -1) || 0;
        }
        // If the button is equal, we evalue the display mathematci expresion
        else if (button.id === 'equal') {
            try {
                const result = evaluateExpression(display.textContent);
                display.textContent = result;
            } catch (error) {
                display.textContent = 'Error';
            }
        }
        // If the button is not special, we add the display contents
        else {
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});

// Función para evaluar la expresión matemática
function evaluateExpression(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '÷': (a, b) => a / b,
        '%': (a, b) => a / 100
    };

    const parts = expression.split(/(\+|\-|x|÷|%)/);
    let result = parseFloat(parts[0]);
    let operator = null;

    for (let i = 1; i < parts.length; i += 2) {
        const value = parseFloat(parts[i + 1]);
        const operation = operators[parts[i]];

        if (operator === null) {
            result = operation(result, value);
        } else {
            result = operators[operator](result, value);
            operator = null;
        }

        if (i + 2 < parts.length) {
            operator = parts[i + 2];
        }
    }

    return result;
}
