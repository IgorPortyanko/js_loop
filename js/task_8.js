(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const out = document.querySelector('.out-1');
        let positive = 0;
        let negative = 0;
        let zeros = 0;
        let even = 0;
        let odd = 0;

        for (let i = 1; i <= 10; i++) {
            const num = +prompt(`Введіть число №${i}:`);

            if (num > 0) {
                positive++;
            } else if (num < 0) {
                negative++;
            } else {
                zeros++;
            }

            if (num !== 0) {
                if (num % 2 === 0) {
                    even++;
                } else {
                    odd++;
                }
            }
        }

        out.textContent = `Статистика: Додатніх: ${positive}; Від'ємних: ${negative}; Нулів: ${zeros}; Парних: ${even}; Непарних: ${odd}`
    }
})()