(function () {
    const btn = document.querySelector('.btn-1');

    btn.addEventListener('click', () => {
        result()
    })

    function result() {

        const days = [ "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
        const today = new Date().getDay();
        let i = today;
        let next;

        do {
            next = confirm(`День тижня: ${days[i]}. Хочеш побачити наступний день?`);
            i = (i + 1) % days.length;
        } while (next);
    }
})()