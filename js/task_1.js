

(function() {
    const btn = document.querySelector('.btn-1');

btn.addEventListener('click', () => {
    yourStatus()
})

function yourStatus() {
    const input = document.querySelector('.input-1');
    const out = document.querySelector('.out-1');
    const age = +input.value;

    if (age <= 0 || age > 120) {
        out.textContent = 'Введіть коректні дані';
    } else if (age > 0 && age <= 11) {
        out.textContent = 'Ви ще дитина';
    } else if (age >= 12 && age <= 17) {
        out.textContent = 'Ви підліток';
    } else if (age >= 18 && age <= 59) {
        out.textContent = 'Ви вже дорослий';
    } else {
        out.textContent = 'Ви пенсіонер';
    }
}
})()