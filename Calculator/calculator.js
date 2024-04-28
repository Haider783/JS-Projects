function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    let displayValue = document.getElementById('display').value;
    if (displayValue.length > 0) {
        document.getElementById('display').value = displayValue.slice(0, -1);
    }
}

function clearSingleDigit() {
    let displayValue = document.getElementById('display').value;
    if (displayValue.length > 0) {
        let lastChar = displayValue.slice(-1);

        if (!isNaN(parseInt(lastChar))) {
            document.getElementById('display').value = displayValue.slice(0, -1);
        }
    }
}

function calculateAnswer() {
    let displayValue = document.getElementById('display').value;

    if (displayValue.includes('+')) {
        const [num1, num2] = displayValue.split('+').map(parseFloat);
        document.getElementById('display').value = num1 + num2;
    } else if (displayValue.includes('-')) {
        const [num1, num2] = displayValue.split('-').map(parseFloat);
        document.getElementById('display').value = num1 - num2;
    } else if (displayValue.includes('*')) {
        const [num1, num2] = displayValue.split('*').map(parseFloat);
        document.getElementById('display').value = num1 * num2;
    } else if (displayValue.includes('/')) {
        const [num1, num2] = displayValue.split('/').map(parseFloat);
        if (num2 !== 0) {
            document.getElementById('display').value = num1 / num2;
        } else {
            document.getElementById('display').value = 'Error';
        }
    }
}
