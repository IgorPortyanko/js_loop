(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const input1 = document.querySelector('.input-1');
        const out = document.querySelector('.out-1');
        let num = input1.value;

        if(num.length === 5) {
            const reversed = num.split('').reverse().join('');
            if(num === reversed) {
                out.textContent = `Число ${num} є паліндромом`
            } else {
                out.textContent = `Число ${num} не є паліндромом`
            }
        } else {
            out.textContent = `Будь ласка, введіть коректне п'ятизначне число!`
        }
    }
})()