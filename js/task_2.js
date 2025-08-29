(function() {
    const btn = document.querySelector('.btn-1');

btn.addEventListener('click', () => {
    keySymbol()
})

function keySymbol() {
    const input = document.querySelector('.input-1');
    const out = document.querySelector('.out-1');
    const number = +input.value;

    if (number < 0 || number > 9) {
        out.textContent = 'Введіть коректні дані';
    } 

    switch (number) {
        case 0: 
            out.textContent = 'Спецсимвол ")"';
            break;
        case 1: 
            out.textContent = 'Спецсимвол "!"';
            break;
        case 2: 
            out.textContent = 'Спецсимвол "@"';
            break;
        case 3: 
            out.textContent = 'Спецсимвол "#"';
            break;
        case 4: 
            out.textContent = 'Спецсимвол "$"';
            break;
        case 5: 
            out.textContent = 'Спецсимвол "%"';
            break;
        case 6: 
            out.textContent = 'Спецсимвол "^"';
            break;
        case 7: 
            out.textContent = 'Спецсимвол "&"';
            break;
        case 8: 
            out.textContent = 'Спецсимвол "*"';
            break;
        case 9: 
            out.textContent = 'Спецсимвол "("';
            break;
    }
}
})()