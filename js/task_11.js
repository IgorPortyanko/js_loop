(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const out = document.querySelector('.out-1');

        for(let i = 2; i <= 9; i++){
            for(let k = 2; k <= 9; k++){
                out.innerHTML += `${i} * ${k} = ${i*k} <br>`
            }
        }
    }
})()