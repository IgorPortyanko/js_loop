
(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const input1 = document.querySelector('.input-1');
        const input2 = document.querySelector('.input-2');
        const out = document.querySelector('.out-1');
        let num1 = +input1.value;
        let num2 = +input2.value;

        while (num1 !== 0) {
        const temp = num1;
        num1 = num2 % num1;
        num2 = temp;
    }

        out.textContent = `Hайбільший спільний дільник цих чисел ${num2}`
    }
})()