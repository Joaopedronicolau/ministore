// main.js

// destacar item do menu ativo (pela seção da URL)
document.addEventListener('DOMContentLoaded', function () {
    const caminho = window.location.pathname;
    document.querySelectorAll('nav a:not(.marca)').forEach(function (link) {
        const alvo = new URL(link.href).pathname;
        const ativo = alvo === '/' ? caminho === '/' : caminho.startsWith(alvo);
        if (ativo && link.closest('.nav-usuario') === null) {
            link.classList.add('ativo');
        }
    });
});
