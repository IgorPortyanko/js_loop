(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const input1 = document.querySelector('.input-1');
        const out = document.querySelector('.out-1');
        let sum = +input1.value;
        let resultSum = 0

        if(sum <= 0) {
            out.textContent = `Будь ласка, введіть коректу суму`
            return
        } else if(sum > 0 && sum <= 200){
            resultSum = sum
        } else if(sum >= 201 && sum <= 300){
            resultSum = sum - (sum / 100) * 3;
        } else if(sum >= 301 && sum <= 500){
            resultSum = sum - (sum / 100) * 5;
        } else {
            resultSum = sum - (sum / 100) * 7;
        } 

        out.textContent = `Сума покупки складе ${resultSum}`
    }
})()