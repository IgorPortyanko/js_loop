(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        sum()
    })

    function sum() {
        const input1 = document.querySelector('.input-1');
        const input2 = document.querySelector('.input-2');
        const out = document.querySelector('.out-1');
        const num1 = +input1.value;
        const num2 = +input2.value;

        let min, max;
        let sum = 0;

        if (num1 <= num2) {
            max = num2;
            min = num1;
        } else {
            max = num1;
            min = num2;
        }

        for(let i = min; i <= max; i++) {
            sum += i;
        }

        out.textContent = `Сума чисел в цьому діапазоні ${sum}`
    }
})()