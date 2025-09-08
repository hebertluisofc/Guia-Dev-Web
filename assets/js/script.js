/* ------------------------------ */
/* MODO CLARO / ESCURO GLOBAL    */
/* ------------------------------ */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Atualiza ícone do botão
    themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';

    // Atualiza mini sites HTML e CSS para seguirem o modo principal
    document.getElementById('mini-site-css').className = 'mini-site styled-mini-site ' + (body.classList.contains('dark-mode') ? 'dark-mode-mini' : 'light-mode-mini');
});

/* ------------------------------ */
/* CONFIGURAÇÃO INICIAL MINI SITES */
/* ------------------------------ */
document.getElementById('mini-site-css').classList.add('dark-mode-mini');
document.getElementById('mini-site-js').classList.add('dark-mode-mini');

/* ------------------------------ */
/* MINI SITE INTERATIVO – SEÇÃO JS */
/* ------------------------------ */
const miniSiteJS = document.getElementById('mini-site-js');
const miniSiteBtnJS = miniSiteJS.querySelector('button');

miniSiteBtnJS.addEventListener('click', () => {
    miniSiteJS.classList.toggle('dark-mode-mini');
    miniSiteJS.classList.toggle('light-mode-mini');

    miniSiteBtnJS.textContent = miniSiteJS.classList.contains('dark-mode-mini') ? '🌙 Alternar Modo' : '☀️ Alternar Modo';
});

// Newsletter
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMsg = document.getElementById('newsletter-msg');

newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // evita recarregar a página
    const emailInput = this.querySelector('input[type="email"]');
    newsletterMsg.style.display = 'block';
    newsletterMsg.textContent = `Obrigado por se inscrever, ${emailInput.value}!`;
    emailInput.value = '';
});