(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const input1 = document.querySelector('.input-1');
        const out = document.querySelector('.out-1');
        let num = +input1.value;

        let result = '';

        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                result += i + ", ";
                if (i !== num / i) {
                    result += (num / i) + ", ";
                }
            }
        }

        out.textContent = `Дільники числа ${num}: ${result}`
    }
})()