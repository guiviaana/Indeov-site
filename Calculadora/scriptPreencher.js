let mlCalculado = 0;
let selectedProduct;

function atualizarCampos() {
  const gotas = parseFloat(document.getElementById('gotas').value);
  mlCalculado = gotas * 0.025;
  document.getElementById('ml').value = mlCalculado.toFixed(3);

  calcularDuracao();
  doseDiaria();
  calcularProximaCompra(parseInt(document.getElementById('duracao').value)); // Chama a função para calcular a próxima compra
}

function atualizarCamposPorML() {
    const ml = parseFloat(document.getElementById('ml').value);
    const gotasCalculadas = ml / 0.025;
    document.getElementById('gotas').value = gotasCalculadas.toFixed(0);
  
    mlCalculado = ml; // Atualizar o valor de mlCalculado com o novo valor de ml
    calcularDuracao();
    doseDiaria();
    calcularProximaCompra(parseInt(document.getElementById('duracao').value)); // Chama a função para calcular a próxima compra
  }
  
  document.getElementById('ml').addEventListener('input', atualizarCamposPorML);

function calcularDuracao() {
    const frascos = parseInt(document.getElementById('frascos').value);
  
    // Verificar se o produto selecionado e mlCalculado estão definidos antes de fazer o cálculo
    if (selectedProduct && mlCalculado > 0) {
      const duracao = Math.floor((frascos * selectedProduct.volume) / mlCalculado); // Arredonda para baixo
      document.getElementById('duracao').value = duracao + ' dias';
      calcularProximaCompra(parseInt(document.getElementById('duracao').value)); // Chama a função para calcular a próxima compra
    } else {
      document.getElementById('duracao').value = '';
    }
  }

function doseDiaria() {
    // Verificar se o produto selecionado e mlCalculado estão definidos antes de fazer o cálculo
    if (selectedProduct && mlCalculado > 0) {
      const diarioCalculado = mlCalculado * selectedProduct.mgtotal / selectedProduct.volume;
      document.getElementById('doseDiaria').value = diarioCalculado.toFixed(2) + ' mg';
    } else {
      document.getElementById('doseDiaria').value = '';
    }
  }

  // Função para calcular a data da próxima compra com base na duração em dias
function calcularProximaCompra(duracaoEmDias) {
    const hoje = new Date();
    const proximaCompra = new Date(hoje.getTime() + duracaoEmDias * 24 * 60 * 60 * 1000);
  
    const dia = proximaCompra.getDate().toString().padStart(2, '0');
    const mes = (proximaCompra.getMonth() + 1).toString().padStart(2, '0');
    const ano = proximaCompra.getFullYear().toString();
  
    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById('proxCompra').value = dataFormatada;
  }

document.getElementById('gotas').addEventListener('input', atualizarCampos);
document.getElementById('ml').addEventListener('input', atualizarCamposPorML);
document.getElementById('frascos').addEventListener('input', calcularDuracao);

function setSelectedProduct(product) {
  selectedProduct = product;
  calcularDuracao();
  doseDiaria();
  calcularProximaCompra(parseInt(document.getElementById('duracao').value)); // Chama a função para calcular a próxima compra
}
