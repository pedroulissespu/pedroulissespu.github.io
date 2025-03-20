const loadPartial = (id, file) => {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(error.message));
};

loadPartial('header', 'partials/header.html');
loadPartial('sobre', 'partials/sobre.html');
loadPartial('projetos', 'partials/projetos.html');
loadPartial('conhecimentos', 'partials/conhecimentos.html');
loadPartial('certificacoes', 'partials/certificacoes.html');
loadPartial('experiencia', 'partials/experiencia.html');
loadPartial('blog', 'partials/blog.html');
loadPartial('footer', 'partials/footer.html');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelectorAll('div[id]').forEach(div => {
    div.addEventListener('error', () => {
        console.error(`Erro ao carregar o conteúdo de ${div.id}`);
    });
});
