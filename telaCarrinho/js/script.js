atualizaValor();

var diminuir = document.querySelector("#diminuir");
diminuir.addEventListener('click', function() {
  var valorElement = document.querySelector('#valor');
  var valor = parseInt(valorElement.textContent);

  if (valor > 1) {
    valorElement.textContent = String(valor - 1);
    atualizaValor();
  }
});

var aumentar = document.querySelector("#aumentar");
aumentar.addEventListener('click', function() {
  var valorElement = document.querySelector('#valor');
  var valor = parseInt(valorElement.textContent);

  valorElement.textContent = String((valor + 1));
  atualizaValor();
});

function atualizaValorTotal(valorProduto) {
  var valorTotal = document.querySelectorAll(".total-valor");
  var valorFrete = parseFloat(document.querySelector("#resumo-frete").textContent);
  document.querySelector("#resumo-quantidade").textContent = document.querySelector('#valor').textContent;

  valorTotal.forEach(element => {
    if (element.id == "pix") {
      element.textContent = String(parseInt(valorProduto * 0.9) + valorFrete);
    } else {
      element.textContent = String(parseInt(valorProduto) + valorFrete);

      atualizaValorCartao(element.textContent);
    }
  });
}
function atualizaValorCartao(valor) {
  document.querySelector("#parcelas-cartao").textContent = parseInt(valor / 3);
}
function atualizaValor() {
  var quantidade = parseInt(document.querySelector('#valor').textContent);

  var valorProduto = parseFloat(document.querySelector("#produto-valor").textContent);

  var valorResumo = document.querySelector("#resumo-valor");
  valorResumo.textContent = String(valorProduto * quantidade);

  atualizaValorTotal(valorResumo.textContent);
}

document.querySelectorAll(".input-frete").forEach(element => {
  element.addEventListener('click', () => {
    console.log(element);
    if (element.checked) {
      document.querySelector("#resumo-frete").textContent = String(element.value);

      atualizaValor();
      }
    });
});

document.querySelector("#continuar").addEventListener('click', function() {
  window.location.href = "../telaPagamento/pagamento.html";
})
