function atualizarCampos() {
    const gotas = parseFloat(document.getElementById('gotas').value);
    // Converter gotas para ml (1 gota para 0,025 ml)
    const mlCalculado = gotas * 0.025;
    document.getElementById('ml').value = mlCalculado.toFixed(3); // Exibir 3 casas decimais
}

// Função para atualizar os campos quando o valor é modificado diretamente no input de ml
function atualizarCamposPorML() {
    const ml = parseFloat(document.getElementById('ml').value);
    // Converter ml para gotas (1 ml para 40 gotas)
    const gotasCalculadas = ml / 0.025;
    document.getElementById('gotas').value = gotasCalculadas.toFixed(0); // Exibir sem casas decimais
}

// Adicionar os ouvintes de eventos para chamar a função atualizarCampos quando houver mudanças nos campos de entrada
document.getElementById('gotas').addEventListener('input', atualizarCampos);
document.getElementById('ml').addEventListener('input', atualizarCamposPorML);
