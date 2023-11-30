// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
    // Se o usuário confirmar, altera a classe 'dark-mode' no body
    if (confirm("Deseja ativar ou desativar o Modo Escuro?")) {
      document.body.classList.toggle('dark-mode');
    }
  }