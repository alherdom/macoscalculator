const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'point' && display.textContent.includes('.')) {
            return;
        }
        if (button.id === 'c') {
            display.textContent = '0';
        }
        else if (button.id === 'delete') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        }
        else if (button.id === 'equal') {
            const result = evaluateExpression(display.textContent);
            display.textContent = result;
        }
        else {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
                }
            else {
                display.textContent += button.textContent;
                }
        }
    });
});

function evaluateExpression(expression) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
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
