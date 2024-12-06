document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;
        let result;

        // Verificamos que los valores sean correctos
        if (isNaN(num1) || isNaN(num2)) {
            result = 'Por favor ingresa números válidos';
        } else {
            // Realizar la operación seleccionada
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Error: División por cero';
                    }
                    break;
                case 'power':
                    result = Math.pow(num1, num2);
                    break;
                default:
                    result = 'Selecciona una operación';
            }
        }

        resultElement.textContent = result;
    });
});
