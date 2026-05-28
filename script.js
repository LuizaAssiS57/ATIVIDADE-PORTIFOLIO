// Define automaticamente o ano atual no rodapé da página
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Função para abrir e fechar a explicação de cada tecnologia
function toggleCard(item) {
    item.classList.toggle('active');
}

// Função para ativar/desativar o Modo Escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const botao = document.getElementById('btn-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        botao.textContent = '☀️ Modo Claro';
    } else {
        botao.textContent = '🌙 Modo Escuro';
    }
}