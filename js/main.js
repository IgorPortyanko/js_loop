

const taskList = document.querySelector('.menu');
const content = document.querySelector('.content');
render('./pages/task-1.html')

taskList.addEventListener('click', function (event) {

    const link = event.target.closest('a');

    if (link) {
        event.preventDefault();
        const url = link.getAttribute('href');
        render(url)
    }
})

function render(url) {
        if (!url) return;
        content.innerHTML = '<p>Завантаження...</p>';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Помилка завантаження сторінки');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
                createScript()
            })
            .catch(error => {
                content.innerHTML = `<p style="color:red;">${error.message}</p>`;
            });
}

function createScript() {
    const existingScripts = document.querySelectorAll('script[data-dynamic]');

    existingScripts.forEach(script => script.remove());

    const scripts = content.querySelectorAll('script');

    scripts.forEach(script => {

        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.setAttribute('data-dynamic', 'true');

        document.body.appendChild(newScript);
    });
}