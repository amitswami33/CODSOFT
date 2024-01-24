document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator form input');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(this.value);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case 'DE':
                deleteLastCharacter();
                break;
            case '=':
                calculate();
                break;
            default:
                appendInput(value);
                break;
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastCharacter() {
        let currentValue = display.value;
        display.value = currentValue.slice(0, -1);
    }

    function appendInput(input) {
        display.value += input;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});
