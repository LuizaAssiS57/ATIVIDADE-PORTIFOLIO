// Mantém o ano do rodapé atualizado automaticamente
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Controla a abertura e fechamento das descrições de tecnologias
function toggleCard(item) {
    // Alterna a classe active no item clicado
    item.classList.toggle('active');
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