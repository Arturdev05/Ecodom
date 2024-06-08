atualizaValor();

var diminuir = document.querySelector("#diminuir");
diminuir.addEventListener('click', function() {
  var valorElement = document.querySelector('#valor');
  var valor = parseInt(valorElement.textContent);
  if (valor > 1) {
    valorElement.textContent = String(valor - 1) + " ";
    atualizaValor(valorElement.textContent);
  }
});

var aumentar = document.querySelector("#aumentar");
aumentar.addEventListener('click', function() {
  var valorElement = document.querySelector('#valor');
  var valor = parseInt(valorElement.textContent);
  valorElement.textContent = String((valor + 1) + " ");
  atualizaValor(valorElement.textContent);
});

function atualizaValor(quantidade) {
  if (quantidade) {
    document.querySelector("#resumo-quantidade").textContent = quantidade;
  } else {
    var quantidade = document.querySelector("#resumo-quantidade").textContent;
  }

  var valorProduto = document.querySelector("#produto-valor");
  var valorResumo = document.querySelector("#resumo-valor");
  valorResumo.textContent = String(" " + (parseFloat(valorProduto.textContent) * quantidade));

  atualizaValorTotal(valorResumo.textContent);
}

function atualizaValorTotal(valorProduto) {
  var valorTotal = document.querySelector("#total-valor");
  var valorFrete = parseFloat(document.querySelector("#resumo-frete").textContent);
  valorTotal.textContent = String(" " + (parseFloat(valorProduto) + valorFrete));
}
document.querySelector("#continuar").addEventListener('click', function() {
  window.location.href = "../telaPagamento/pagamento.html";
})

document.querySelectorAll(".input-frete").forEach(element => {
  element.addEventListener('click', () => {
    console.log(element);
    if (element.checked) {
      document.querySelector("#resumo-frete").textContent = String(parseFloat(element.value));

      atualizaValor();
      }
    });
});
