// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText) || '0';
    } catch {
        display.innerText = 'Error';
    }
}

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializar el reloj
updateClock();
