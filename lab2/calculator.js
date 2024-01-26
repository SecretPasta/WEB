document.addEventListener('DOMContentLoaded', function () {
    let currentInput = '';
    let memory = 0;
    const resultField = document.getElementById('result');

    // Update display
    function updateDisplay(value) {
        resultField.value = value;
    }

    function performOperation(operation) {
        try {
            switch (operation) {
                case 'C':
                    currentInput = '';
                    break;
                case '=':
                    currentInput = eval(currentInput).toString();
                    break;
                case 'π':
                    currentInput += Math.PI.toString();
                    break;
                case 'e':
                    currentInput += Math.E.toString();
                    break;
                case 'sin':
                    currentInput = Math.sin(eval(currentInput)).toString();
                    break;
                case 'cos':
                    currentInput = Math.cos(eval(currentInput)).toString();
                    break;
                case 'tan':
                    currentInput = Math.tan(eval(currentInput)).toString();
                    break;
                case 'exp':
                    currentInput = Math.exp(eval(currentInput)).toString();
                    break;
                case 'mod':
                    currentInput += '%';
                    break;
                case 'x^y':
                    currentInput += '**';
                    break;
                case '2nd':
                    // Implement secondary functions if needed
                    break;
                case 'ln':
                    currentInput = Math.log(eval(currentInput)).toString();
                    break;
                case 'x!':
                    currentInput = factorial(eval(currentInput)).toString();
                    break;
                case 'log':
                    currentInput = Math.log10(eval(currentInput)).toString();
                    break;
                case 'x^2':
                    currentInput = Math.pow(eval(currentInput), 2).toString();
                    break;
                case '10^x':
                    currentInput = Math.pow(10, eval(currentInput)).toString();
                    break;
                case '√x':
                    currentInput = Math.sqrt(eval(currentInput)).toString();
                    break;
                case '±':
                    currentInput = (-1 * eval(currentInput)).toString();
                    break;
                case '.':
                    if (!currentInput.includes('.')) {
                        currentInput += '.';
                    }
                    break;
                default:
                    if (['+', '-', '*', '/', '(', ')'].includes(operation)) {
                        currentInput += operation;
                    } else {
                        currentInput += operation;
                    }
            }
            updateDisplay(currentInput);
        } catch (error) {
            updateDisplay('Error');
            currentInput = '';
        }
    }
    
    // Factorial function
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    

    // Handling memory operations
    function handleMemoryFunction(func) {
        switch (func) {
            case 'MC':
                memory = 0;
                break;
            case 'MR':
                currentInput = memory.toString();
                break;
            case 'M+':
                memory += parseFloat(currentInput);
                break;
            // Add cases for M-, MS, M^
        }
        updateDisplay(currentInput);
    }

    // Add event listeners to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('number') || this.classList.contains('operator')) {
                performOperation(this.textContent);
            } else if (this.classList.contains('function')) {
                // Handle special functions
                performOperation(this.textContent);
            } else if (this.classList.contains('memory')) {
                handleMemoryFunction(this.textContent);
            }
        });
    });
});
