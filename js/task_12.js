(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {
        const day = +prompt("Введіть день:");
        const month = +prompt("Введіть місяць (1-12):");
        const year = +prompt("Введіть рік:");

        if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
            const date = new Date(year, month - 1, day);

            date.setDate(date.getDate() + 1);

            const nextDay = date.getDate();
            const nextMonth = date.getMonth() + 1;
            const nextYear = date.getFullYear();

            alert(`Наступна дата: ${nextDay}.${nextMonth}.${nextYear}`);
        } else {
            alert("Введена некоректна дата!");
        }
    }
})()