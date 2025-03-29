// Exibir data e hora atual no rodapé
function atualizarDataHora() {
    const agora = new Date();
    const formatado = agora.toLocaleString('pt-BR');
    document.getElementById('dataHora').textContent = 'Data e hora atual: ' + formatado;
}
setInterval(atualizarDataHora, 1000);

// Alerta de boas-vindas após 3 segundos
setTimeout(() => {
    alert('Bem-vindo ao Minimercado Econômico! Confira nossas ofertas.');
}, 3000);

// Validação simples de formulário
const form = document.getElementById('formCliente');
form.addEventListener('submit', function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
});
