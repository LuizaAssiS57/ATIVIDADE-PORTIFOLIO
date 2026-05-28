document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Controla a abertura e fechamento dos mini cards de tecnologias
function toggleCard(card) {
    card.classList.toggle('active');
}

// Controla a alternância do Modo Escuro
function toggleDarkMode() {
    // Liga/Desliga a classe 'dark-mode' no elemento <body>
    document.body.classList.toggle('dark-mode');
    
    // Altera o texto do botão para combinar com o modo atual
    const botao = document.getElementById('btn-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        botao.textContent = '☀️ Modo Claro';
    } else {
        botao.textContent = '🌙 Modo Escuro';
    }
}