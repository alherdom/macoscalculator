// Obtenemos los elementos del DOM
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const igual = document.getElementById('igual');
const borrar = document.getElementById('borrar');

// Añadimos el evento click a cada botón
botones.forEach(botón => {
    botón.addEventListener('click', () => {
        // Si el botón es el de AC, borramos todo el contenido de la pantalla
        if (botón.id === 'c') {
            pantalla.textContent = '0';
        }
        // Si el botón es el de borrado, eliminamos el último carácter de la pantalla
        else if (botón.id === 'borrar') {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        // Si el botón es el de igual, evaluamos la expresión matemática en la pantalla
        else if (botón.id === 'igual') {
            try {
                const resultado = evaluarExpresion(pantalla.textContent);
                pantalla.textContent = resultado;
            } catch (error) {
                pantalla.textContent = 'Error';
            }
        }
        // Si el botón no es especial, lo añadimos al contenido de la pantalla
        else {
            if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
                pantalla.textContent = botón.textContent;
            } else {
                pantalla.textContent += botón.textContent;
            }
        }
    });
});

// Función para evaluar la expresión matemática
function evaluarExpresion(expresion) {
    const operaciones = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '÷': (a, b) => a / b,
        '%': (a, b) => a % b
    };

    const partes = expresion.split(/(\+|\-|x|÷|%)/);
    let resultado = parseFloat(partes[0]);
    let operador = null;

    for (let i = 1; i < partes.length; i += 2) {
        const valor = parseFloat(partes[i + 1]);
        const operacion = operaciones[partes[i]];

        if (operador === null) {
            resultado = operacion(resultado, valor);
        } else {
            resultado = operaciones[operador](resultado, valor);
            operador = null;
        }

        if (i + 2 < partes.length) {
            operador = partes[i + 2];
        }
    }

    return resultado;
}
