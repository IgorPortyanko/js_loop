(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {

        alert("Загадайте число від 0 до 100, а я спробую його відгадати!");

let min = 0;
let max = 100;
let guess;
let answer;

do {
    guess = Math.floor((min + max) / 2);
    answer = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? Введіть >, < або =`);

    if (answer === ">") {
        min = guess + 1;
    } else if (answer === "<") {
        max = guess - 1;
    } else if (answer === "=") {
        alert(`Я вгадав! Ваше число = ${guess} `);
    } else {
        alert("Будь ласка, введіть тільки >, < або =");
    }

} while (answer !== "=");
    }
})()