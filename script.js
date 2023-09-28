window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('display').value = '';
}); 

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Buguei! Tente novamente');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function backspace() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault(); 
        addToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'del', 'escape') {
        event.preventDefault();
        clearDisplay();

    } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
});