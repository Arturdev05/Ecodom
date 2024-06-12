var quantidade = document.querySelector('#valor');

function atualizaValorCartao(valor) {
  document.querySelector("#parcelas-cartao").textContent = parseInt(valor / 3);
}
function atualizaValorTotal(valorTotalProduto) {
  var valorFrete = document.querySelector("#resumo-frete").textContent;
  var valorTotalInt = parseInt(valorTotalProduto);
  var valorFreteInt = parseInt(valorFrete);

  document.querySelectorAll(".total-valor").forEach(element => {
    if (element.id == "pix") {
      element.textContent = String(parseInt(valorTotalInt * 0.9) + valorFreteInt);
    } else {
      element.textContent = String(valorTotalInt + valorFreteInt);

      atualizaValorCartao(element.textContent);
    }
  });
}
function atualizaValor() {
  var valorProduto = document.querySelector("#produto-valor").textContent;
  var valorResumo = document.querySelector("#resumo-valor");

  document.querySelector("#resumo-quantidade").textContent = quantidade.textContent;
  valorResumo.textContent = String(parseInt(valorProduto) * parseInt(quantidade.textContent));

  atualizaValorTotal(valorResumo.textContent);
}
document.querySelectorAll(".input-frete").forEach(element => {
  element.addEventListener('click', () => {
    if (element.checked) {
      document.querySelector("#resumo-frete").textContent = String(element.value);

      atualizaValor();
      }
    });
});
document.querySelector("#diminuir").addEventListener('click', function() {

  if (quantidade.textContent > 1) {
    quantidade.textContent = String(parseInt(quantidade.textContent) - 1);
    atualizaValor();
  }
});
document.querySelector("#aumentar").addEventListener('click', function() {
  quantidade.textContent = String(parseInt(quantidade.textContent) + 1);
    atualizaValor();
});
document.querySelector("#continuar").addEventListener('click', function() {
  window.location.href = "../telaPagamento/pagamento.html";
})

atualizaValor();